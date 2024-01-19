---
outline: deep
---
## 任务队列管理类
### 定义任务队列类
```js
class TaskManager {
  constructor(maxTasks) {
    this.maxTasks = maxTasks;
    this.activeTasks = new Map(); // 使用Map来存储正在进行的任务，使得根据taskId快速删除
    this.waitingTasks = [];//等待中的任务
    this.drainCallbacks = []; // 存储drain回调的数组
  }

  // 注册当所有任务都完成时的回调函数
  drain(callback) {
    this.drainCallbacks.push(callback);
  }

  // 移除指定的回调函数
  offDrain(callback) {
    this.drainCallbacks = this.drainCallbacks.filter(
      (item) => item !== callback
    );
  }
// 添加任务
  add(taskId, task, data = {}, isAddCaches = false) {
    return new Promise((resolve, reject) => {
      // 首先检查taskId是否已经存在
      if (
        this.activeTasks.has(taskId) ||
        this.waitingTasks.some((taskObj) => taskObj.taskId === taskId)
      ) {
        // 如果任务ID已存在，立即拒绝新任务
        return reject(new Error(`Task with taskId ${taskId} already exists.`));
      }

      const taskObj = { task, taskId, data, resolve, reject };
      // 如果带有缓存标志，则直接添加到等待任务队列
      if (isAddCaches) {
        this.waitingTasks.push(taskObj);
        return;
      }
      // 判断当前执行任务数是否大于最大任务数，是则放入等待任务队列，否则运行执行函数
      if (this.activeTasks.size < this.maxTasks) {
        this._run(taskObj);
      } else {
        this.waitingTasks.push(taskObj);
      }
    });
  }

  /**
   * 处理等待队列中的任务。如果激活任务的数量小于最大任务数，从等待队列中取出任务并执行。
   * 这个方法可以在添加新任务或任务完成时调用，以确保始终有最大数量的任务在运行。
   */
  processWaitingTasks() {
    while (
      this.activeTasks.size < this.maxTasks &&
      this.waitingTasks.length > 0
    ) {
      const taskObj = this.waitingTasks.shift();
      this._run(taskObj);
    }
  }

  // 执行任务函数
  // eslint-disable-next-line
  async _run(taskObj) {
    // 任务添加到正在执行任务队列
    this.activeTasks.set(taskObj.taskId, taskObj);
    try {
      const result = await taskObj.task();
      taskObj.resolve(result);
    } catch (error) {
      taskObj.reject(error);
    } finally {
      // 任务执行完成移正在执行任务队列
      this.activeTasks.delete(taskObj.taskId);
      if (this.waitingTasks.length > 0) {
        // 如果等待队列还有任务，则弹出队列首个任务执行
        this._run(this.waitingTasks.shift());
      } else if (this.activeTasks.size === 0) {
        // 等待队列没有任务，则执行回调队列中的所有回调函数
        this.drainCallbacks.forEach((callback) => callback()); // 执行所有的drain回调
      }
    }
  }
// 移除任务
  removeTask(taskId) {
    if (this.activeTasks.has(taskId)) {
      // 如果任务正在执行，可以将其标记为中断或其他操作。
      // 但基于现有的Promise架构，我们不能从外部"取消"一个已经运行的Promise。
      console.warn(
        `Task ${taskId} is currently running and cannot be immediately removed.`
      );
    } else {
      const index = this.waitingTasks.findIndex(
        (taskObj) => taskObj.taskId === taskId
      );
      if (index !== -1) {
        this.waitingTasks.splice(index, 1);
      }
    }
  }
// 清楚所有任务
  clearAllTasks() {
    console.error("[clearAllTasks this]", JSON.parse(JSON.stringify(this)));
    // 通知所有等待的任务它们被取消了
    // for (let taskObj of this.waitingTasks) {
    //   taskObj.reject(
    //     new Error(`Task ${taskObj.taskId} has been removed before execution.`)
    //   );
    // }
    // this.waitingTasks = []; // 清空等待任务队列

    // // 通知所有活动的任务它们被取消了（虽然不能真正取消正在运行的Promise）
    // // eslint-disable-next-line
    // for (let [taskId, taskObj] of this.activeTasks) {
    //   console.warn(`Task ${taskId} is currently running and cannot be immediately removed.`);
    //   // 如果你的任务支持取消，你可能想在这里调用它
    //   // 例如：taskObj.cancel();
    // }
    // this.activeTasks.clear(); // 清空活动任务Map

    this.activeTasks = new Map(); // 使用Map来存储正在进行的任务，使得根据taskId快速删除
    this.waitingTasks = [];
    this.drainCallbacks = []; // 存储drain回调的数组
  }

  /**
   * 对等待中的任务根据指定字段进行排序。
   *
   * @param {string} sortField - 排序依据的字段名称。这应该是taskObj.data中的一个属性。
   * @param {boolean} [ascending=true] - 排序顺序。如果为true，则按升序排序；如果为false，则按降序排序。
   *
   * 升序排序意味着较小的值会排在前面，降序排序则相反。如果两个任务的sortField值相同，
   * 它们的顺序将保持不变。
   *
   * 示例用法：
   * manager.sortWaitingTasks("priority", true); // 根据优先级升序排序
   * manager.sortWaitingTasks("priority", false); // 根据优先级降序排序
   */
  sortWaitingTasks(sortField, ascending = true) {
    this.waitingTasks.sort((a, b) => {
      if (a.data[sortField] < b.data[sortField]) {
        return ascending ? -1 : 1;
      }
      if (a.data[sortField] > b.data[sortField]) {
        return ascending ? 1 : -1;
      }
      return 0;
    });
  }

  /**
   * 根据 taskId 查询任务。
   * 如果找到正在运行的或等待中的任务，则返回该任务对象；
   * 如果没有找到，则返回 null。
   *
   * @param {string} taskId - 要查询的任务的 ID。
   * @return {Object|null} - 任务对象或 null。
   */
  getTask(taskId) {
    // 首先检查活动任务中是否存在该任务
    if (this.activeTasks.has(taskId)) {
      return this.activeTasks.get(taskId);
    }

    // 检查等待队列中是否存在该任务
    const taskIndex = this.waitingTasks.findIndex(
      (taskObj) => taskObj.taskId === taskId
    );
    if (taskIndex !== -1) {
      return this.waitingTasks[taskIndex];
    }

    // 如果没有找到任务，返回 null
    return null;
  }
}

module.exports = TaskManager;

```
### 使用任务队列类
```js
// 引入任务管理类
const TaskManager = require("./TaskManager.js");

const fs = require("fs");
const path = require("path");

const logPath = path.join(__dirname, "readme.txt");

// 入口文件
function main() {
  const maxTasks = 2;
  const manager = new TaskManager(maxTasks);
  // {
  //     maxTasks: 1,
  //     activeTasks: Map(0) {},
  //     waitingTasks: [],
  //     drainCallbacks: []
  //  }

  //   console.log("TaskManager2222", manager);

  //   for (let i = 0; i < 1; i++) {
  //     const time = Math.random() * 5000;
  //     const handle = async (i, time) => {
  //       // 执行一些操作
  //       return new Promise((resolve) => {
  //         console.log("22222aaa", i);

  //         console.log("[记录值i, time]", i, time);

  //         fs.readFile(path.join(__dirname, "TaskManager.js"), (err, data) => {
  //           if (err) {
  //             rejects(err);
  //             return;
  //           }
  //           console.log("TaskManager.js", data);
  //           resolve(data);
  //         });

  //         // setTimeout(() => {
  //         //   resolve(i);
  //         // }, time);
  //       });
  //     };

  //     manager
  //       .add("task" + i, handle.bind(null, i, time), { name: i })
  //       .then((data) => {
  //         console.log("task" + i, data.toString());
  //       });
  //   }

  //   for (let i = 0; i < 100; i++) {
  //     if (Math.random() > 0.5) {
  //       writeFile(logPath, "写入" + i).then(() => {
  //         console.log("写入" + i);
  //       });
  //     } else {
  //       readFile(logPath).then((data) => {
  //         console.log("读取" + i);
  //       });
  //     }
  //   }

  manager.drain(() => {
    console.log("全部操作完毕！！！");
  });

  for (let i = 0; i < 9999; i++) {
    const taskId = i;

    const trigger = Math.random() > 0.5 ? handleRead : handleWrite;

    manager.add(taskId, trigger.bind(null, i));
  }

  setTimeout(() => {
    for (let i = 0; i < 5; i++) {
      const taskId = i;

      const trigger = Math.random() > 0.5 ? handleRead : handleWrite;

      manager.add(taskId, trigger.bind(null, i));
    }
  }, 5000);
}

main();

function handleRead(i) {
  return readFile(logPath).then((data) => {
    console.log("读取" + i);
  });
}
function handleWrite(i) {
  return writeFile(logPath, "写入" + i).then(() => {
    console.log("写入" + i);
  });
}

function readFile(logPath) {
  return new Promise((resolve, reject) => {
    fs.readFile(logPath, { flag: "a+" }, (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    });
  });
}

function writeFile(logPath, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(logPath, data + "\n", { flag: "a+" }, (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    });
  });
}

```
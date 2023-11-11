---
outline: deep
---
## node子进程(child_process)的使用
### 1. spawn
默认不执行shell，可以配置项配置开启shell
```ts
import { spawn } from "node:child_process";
//创建单个项目独立打包的shell脚本执行
function executePowershell(command: string, callback: ()=>any) {
  let powershell: any = null;
  if (process.platform.includes("darwin")) 
    // mac系统
    // powershell = spawn("powershell.exe", [command]);
    console.log('system version drawin');
    powershell = spawn(command+'.sh',{shell:'bash'});
  } else {
    // windows系统
    console.log('system version win32');
    powershell = spawn(command+'.bat',{shell:'powershell'});
  }
  //监听子进程的输出
  powershell.stdout.on("data", (data: string) => {
    console.log(`spawn message: ${data}`);
  });
  // 监听子进程的错误
  powershell.stderr.on("data", (data: string) => {
    console.error(`错误: ${data}`);
  });
  // 监听子进程退出
  powershell.on("exit", (code: number) => {
    console.log(`子进程已退出，退出代码：${code}`);
    if (code === 0) {
      callback && callback();
    }
  });
  // 关闭输入流，结束等待用户输入
  powershell.stdin.end(); //end input
}
// 执行子进程
executePowershell(
  './build',
  () => {
    // 完成子进程后的回调
    // main();
  }
);
```
### 2. exec
exec方法将会生成一个子shell，然后在该 shell 中执行命令，并缓冲产生的数据，当子流程完成后，并将子进程的输出以回调函数参数的形式一次性返回。exec方法会从子进程中返回一个完整的buffer。默认情况下，这个buffer的大小应该是200k。
```ts
import { exec }  from "node:child_process";

exec("find . -type f | wc -l", (err, stdout, stderr) => {
  if (err) {
    console.error(`exec error: ${err}`);
    return;
  }

  console.log(`Number of files ${stdout}`);
});
```
### 3. execFile
child_process.execFile() 函数与 child_process.exec() 类似，不同之处在于它默认不衍生 shell。 而是，指定的可执行文件 file 直接作为新进程衍生，使其比 child_process.exec() 略有效率。
支持与 child_process.exec() 相同的选项。 由于未衍生 shell，因此不支持 I/O 重定向和文件通配等行为。
```ts
const { execFile } = require('child_process');
const child = execFile('node', ['--version'], (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
});
```
### 4. fork
child_process.fork 是 spawn()的特殊形式，用于在子进程中运行的模块，如 fork(‘./son.js’) 相当于 spawn(‘node’, [‘./son.js’]) 。与spawn方法不同的是，fork会在父进程与子进程之间，建立一个通信管道，用于进程之间的通信。  
**父文件：parent.js**
```ts
const { fork } = require("child_process");

const forked = fork("child.js");

forked.on("message", msg => {
  console.log("Message from child", msg);
});

forked.send({ hello: "world" });
```
**子文件：child.js**
```ts
process.on("message", msg => {
  console.log("Message from parent:", msg);
});

let counter = 0;

setInterval(() => {
  process.send({ counter: counter++ });
}, 1000);
```
在父文件里面，我们用fork执行了child.js，同时，我们监听了message事件，当子进程通过process.send发送消息的时候，父文件中的message事件将会被触发。
同样，我们也可以在父进程通过process.send给子进程发消息。  

我们举个实际项目中可能会用到的例子  
**创建一个compute.js文件，放入计算**
```ts
const longComputation = () => {
  let sum = 0;
  for (let i = 0; i < 1e9; i++) {
    sum += i;
  }
  return sum;
};

process.on("message", msg => {
  const sum = longComputation();
  process.send(sum);
});
```
```ts
import http from "node:http";
import fork from"node:child_process";

const server = http.createServer();

server.on("request", (req, res) => {
  if (req.url === "/compute") {
    const compute = fork("compute.js");
    compute.send("start");
    compute.on("message", sum => {
      res.end(Sum is ${sum});
    });
  } else {
    res.end("Ok");
  }
});

server.listen(3000);
```
我们有一个http服务，该服务有两个端点，当我们请求/compute端点的时候，执行longComputation函数进行大量CUP计算，会阻塞I/O。如果此时我们在访问 另一个端点，是得不到OK响应的。
解决方法是将  longComputation函数放在一个子进程中执行，通过fork去执行，这样不会不阻塞I/O。  
Node的cluster模块就是基于这种思想。
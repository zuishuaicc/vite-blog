---
outline: deep
---
## 消除异步传染性
```ts
function getUser() {
  return axios('./data.json')
}
function m1() {
  const user = getUser()
  return user
}
function m2() {
  const user = m1()
  return user
}
function m3() {
  const user = m2()
  return user
}

function main() {
  console.log('main')
  const user = m3()
  console.log(user)
}

function run(func) {
  // 1,改动原fetch
  const oldFetch = window.axios
  const cache = {
    status: 'pending',
    value: null
  }
  // 2,创建新的fetch
  function newFetch(...args) {
    // 有缓存
    if (cache.status === 'fulfilled') {
      return cache.value
    } else if (cache.status === 'rejected') {
      throw  cache.value
    }
    //没有缓存
    const promise = oldFetch(...args).then(data=>data.data).then((data) => {
      cache.value = data
      cache.status = 'fulfilled'
    }).catch((err) => {
      cache.value = err
      cache.status = 'rejected'
    })
    // 抛出promise错误
    throw promise
  }
  window.axios = newFetch
  // 3，执行func
  try {
    func()
  } catch (error) {
    if (error instanceof Promise) {
      // 判断错误类型为promise时，在finally中再次执行func，因为请求已经有结果了，会直接返回缓存结果
      error.finally(() => {
        window.axios = newFetch
        func()
        window.axios = oldFetch
      })
    }
    
  }
  // 4，改回fetch
  window.axios = oldFetch
}

// 运行
run(main)

```
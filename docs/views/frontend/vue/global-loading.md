---
outline: deep
---

# 实现全局 loading
`useLoading`
```ts
import { customRef } from "vue"

export const loading = customRef((track,trigger)=>{
  let loadingCount = 0
  return {
    get(){
      track()//收集依赖
      return loadingCount>0
    }
    set(value){
      if(value){
        loadingCount = loadingCount+1
      }else{
        loadingCount = loadingCount-1
      }
      loadingCount = value? loadingCount + 1: loadingCount - 1
      loadingCount = Math.max(0,loadingCount)
      trigger()//通知更新
    }
  }
})
```

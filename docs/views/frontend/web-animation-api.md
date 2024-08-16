---
outline: deep
---
# 原生js动画 
## web animation API
1. 先上代码
```ts
const targetDom = document.querySelector('#target-dom')
// 取消之前所有动画实例
targetDom.getAnimations().forEach((animate)=>animate.cancel())
// 创建新动画
targetDom.animate(
    [
        {
            transform: `translate(0,0)`
        },
        {   
            transform: `translate(${x}px,${y})px`
        }
    ]，
    {
        duration:2000,
        fill:'forwards'
    }
)
```
2. 优点
与三方的动画库对比，此实现方式类似css动画，不操作DOM,不会导致重绘重排，性能更高
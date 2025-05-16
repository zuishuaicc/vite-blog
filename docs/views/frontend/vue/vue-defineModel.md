---
outline: deep
---

# vue3实现defineModel宏
## 1.创建`useDefineModel.ts`hook
```ts
import { computed } from 'vue'

type UpdateEvent<T extends string> = `update:${T}`
// 辅助类型：从 Props 对象类型中提取所有字符串键
type PropsKeys<T> = T extends Record<infer K, any> ? Extract<K, string> : never

function useDefineModel<T extends Record<string, any>, K extends PropsKeys<T>>(
  props: T,
  field: K,
  emits: (e: UpdateEvent<K>, payload: T[K]) => void
) {
  const visible = computed({
    get() {
      return props[field]
    },
    set(val: T[K]) {
      return emits(`update:${field}`, val)
    }
  })
  return {
    visible
  }
}
export default useDefineModel
```

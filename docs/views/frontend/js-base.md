---
outline: deep
---

# js 基础

## Map 与 WeekMap

### Map

Map 是一个按插入顺序迭代的键值对集合。它的键和值都可以是任意类型，包括对象、原始值（如字符串、数字等）。

特点：

任意类型的键： 可以使用任何值作为键，不仅仅是字符串或符号。  
键的遍历顺序： Map 保留了键值对的插入顺序。  
迭代： 可以使用 for...of 循环、forEach 方法或者 keys()、values() 和 entries() 方法来迭代 Map。  
大小： 使用 size 属性获取 Map 中的键值对数量。  
强引用： Map 的键是强引用，意味着只要 Map 对象存在，键也会存在。

```ts
let map = new Map()
map.set("key1", "value1")
map.set({ name: "key2" }, "value2")

console.log(map.get("key1")) // 输出 "value1"
console.log(map.size) // 输出 2

for (let [key, value] of map) {
  console.log(key, value)
}

// key1 value1
// { name: 'key2' } value2
```

### WeakMap

WeakMap 也是一个键值对集合，但它的键只能是对象，且键是弱引用。

特点：

对象类型的键： 键必须是对象（不能是原始值）。  
键的弱引用： 如果没有其他引用指向键对象，键对象可以被垃圾回收。这意味着 WeakMap 不会阻止垃圾回收器回收键对象。  
不可迭代： WeakMap 不能被迭代，因此没有 size 属性、keys()、values() 或 entries() 方法。  
无序： WeakMap 没有保证键值对的插入顺序。

```ts
let weakMap = new WeakMap()
let obj = { name: "key1" }
weakMap.set(obj, "value1")

console.log(weakMap.get(obj)) // 输出 "value1"

obj = null // 删除对键对象的引用
// 现在 obj 所引用的对象可能会被垃圾回收
```

### Map 与 WeakMap 的选择

- Map： 当你需要存储任意类型的键，且希望这些键不会被垃圾回收时，使用 Map。适用于需要遍历、检查大小等场景。

- WeakMap： 当你希望使用对象作为键，并且不想阻止垃圾回收器回收这些对象时，使用 WeakMap。适用于缓存、DOM 节点关联等需要避免内存泄漏的场景。
- 总结来说，Map 和 WeakMap 各自有不同的应用场景，选择哪一个取决于你的需求：是需要任意类型键的强引用集合，还是仅限于对象键且自动管理内存的弱引用集合。

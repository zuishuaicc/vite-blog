---
outline: deep
---

## eslint配置规则
### 1.配置使用``-``开头的形参免于未使用变量校验
```ts
  'no-unused-vars': ['error', {
    argsIgnorePattern: '^_',
  }],
  '@typescript-eslint/no-unused-vars': ['error', {
    argsIgnorePattern: '^_',
  }],
```


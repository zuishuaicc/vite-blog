---
outline: deep
---

# electron 中使用 sqlite

## 下载编译依赖

```bash
npm install better-sqlite3
```

## 创建数据库实例

```ts
import Database, * as BetterSqlite3 from "better-sqlite3"
import { app } from "electron"
import { resolve } from "path"

const file = resolve(app.getPath("home"), "Desktop", "snippets.db")
const db: BetterSqlite3.Database = new Database(file, {})

db.pragma("journal_mode = WAL")
export { db }
```

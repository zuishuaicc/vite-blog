---
outline: deep
---
## PowerShell内设置pnpm的别名
```bash
set-alias -name pn -value pnpm
function pnpmdev {pnpm dev}
set-alias -name pd -value pnpmdev
function pnpmremove {pnpm remove}
set-alias -name pr -value pnpmremove
function pnpmadd {pnpm add}
set-alias -name pa -value pnpm pnpmadd
```
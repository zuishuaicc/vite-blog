---
outline: deep
---
# react实践记录
## react-router-dom 路由重定向
```tsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate //v6版本使用Navigate代替Redirect
} from 'react-router-dom'
import Login from '@/pages/Login/index'
import Layout from '@/pages/Layout/index'

function App() {
  return (
    <>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<Navigate to="/home"></Navigate>}></Route>
            <Route path="/home" element={<Layout></Layout>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
```
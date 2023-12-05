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
## 封装图片懒加载组件
### react中封装为图片组件
```tsx
interface Props {
  src: string
  className: string
  alt: string
}

function Image({ src, className, alt }: Props) {
  // 记录图片是否出错
  const [isError, setIsError] = useState(false)
  // 记录图片是否在加载状态
  const [isLoading, setIsLoading] = useState(true)
  // 对图片元素的引用
  const imgRef = useRef(null)
  // 在组件创建时
  useEffect(() => {
    // 创建监听对象
    const observer = new IntersectionObserver((entries, imgObserver) => {
      entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement
          img.src = img.dataset.src!
          imgObserver.unobserve(entry.target)
        }
      })
    })
    // 开始监听
    observer.observe(imgRef.current!)
    return () => {
      // 停止IntersectionObserver对象的监听
      observer.disconnect()
    }
  }, [])
  return (
    <>
      <div className={classnames(styles.root, className)}>
        {/* 正在加载时显示的内容 */}
        {isLoading && (
          <div className="image-icon">
            <Icon type="iconphoto" />
          </div>
        )}

        {/* 加载出错时显示的内容 */}
        {isError && (
          <div className="image-icon">
            <Icon type="iconphoto-fail" />
          </div>
        )}

        {/* 加载成功时显示的内容 */}
        {!isError && (
          <img
            alt={alt}
            data-src={src}
            ref={imgRef}
            onLoad={() => setIsLoading(false)}
            onError={() => setIsError(true)}
          />
        )}
      </div>
    </>
  )
}
export default Image

```
### vue3中可以使用指令
```ts
app.directive('lazy', {
      mounted (el, { value }) {
        const observer = new IntersectionObserver(([{ isIntersecting }], observer) => {
          if (isIntersecting) {
            observer.unobserve(el)
            el.src = value
            el.onerror = () => {
              el.src = require('@/assets/images/200.png')
            }
          }
        }, {
          threshold: 0
        })
        observer.observe(el)
      }
    }
    )
```
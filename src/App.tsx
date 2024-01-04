import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { routes } from './routes'
import { Spin } from 'antd'
import '@assets/less/style.less'

function App() {
  return (
    <Suspense fallback={<Spin className='fill' />}>
      <Routes>
        {routes.map((route) => {
          return <Route key={route.path} path={route.path} element={route.element} />
        })}
      </Routes>
    </Suspense>
  )
}

export default App

import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'

const LazyHome = lazy(() => import('@pages/Home'))
const LazyAbout = lazy(() => import('@pages/About'))

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <LazyHome />,
  },
  {
    path: '/about',
    element: <LazyAbout />,
  },
]

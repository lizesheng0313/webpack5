import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const rootContainer = document.createElement('div')
rootContainer.id = 'root'
document.body.appendChild(rootContainer)

ReactDOM.createRoot(rootContainer).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

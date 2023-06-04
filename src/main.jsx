import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { App } from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App title="Title" subtitle="Subtitle" />
  </React.StrictMode>,
)

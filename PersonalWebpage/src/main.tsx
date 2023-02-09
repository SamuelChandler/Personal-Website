import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Counter from './components/counter';
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  
  <React.StrictMode>
    <Counter />
    <App />
  </React.StrictMode>,
)

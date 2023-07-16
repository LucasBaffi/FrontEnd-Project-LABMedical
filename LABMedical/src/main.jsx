import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './reset.css'
import 'bootstrap/dist/css/bootstrap.css';
import { LoginProvider } from './Context/LoginContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoginProvider>
    <App />
    </LoginProvider>
  </React.StrictMode>,
)

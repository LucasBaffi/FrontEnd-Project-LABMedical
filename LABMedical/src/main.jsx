import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'

import 'bootstrap/dist/css/bootstrap.css';
import { LoginProvider } from './Context/LoginContext.jsx'
import { UserProvider } from './Context/UserContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <LoginProvider>
        <App />
      </LoginProvider>
    </UserProvider>
  </React.StrictMode>,
)



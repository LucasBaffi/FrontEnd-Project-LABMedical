import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home.jsx';
// import Register from './pages/Register/Register';
import './App.css'
import { useContext } from 'react';
import { LoginContext } from './Context/LoginContext';



function App() {

  const { loginOn } = useContext(LoginContext)
  


  return (
    <>    
        <Router>
     
      <Routes>
        <Route
          path="/"
          element={loginOn ? <Navigate to="/home" /> : <Login />}
        />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App

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
import ToolBar from './Compenents/OutherComponents/ToolBar';

function App() {

  const { loginOn } = useContext(LoginContext)
  


  return (
    <>    
        <Router>
          {loginOn ? <Home/> :  <Navigate to='/' />}         
          {loginOn && <ToolBar/>}
          <Routes>
            <Route path="/" exact element={!loginOn ? <Login /> : <Navigate to='/home' />} />
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <></>
            {/* <Route path='/register' element={<Register/>}/> */}
          </Routes>
        </Router>
      
    </>
  )
}

export default App

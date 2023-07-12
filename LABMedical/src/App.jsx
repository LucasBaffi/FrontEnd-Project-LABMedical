import {
  BrowserRouter as Router, // Apenas renomeando BrowserRouter para Router
  Routes,
  Route,
  Navigate
}from 'react-router-dom'
import Login from './pages/Login/Login'
import Modal from 'react-modal';
Modal.setAppElement('#root');
import './App.css'

function App() {
  
  

  return (
    <>
       <Router>
       <Routes>
       <Route path="/" element= {<Login/>}/>
      
       </Routes>
       </Router>
    </>
  )
}

export default App

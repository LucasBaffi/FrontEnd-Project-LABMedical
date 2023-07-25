<<<<<<< HEAD
import React from 'react';
=======
>>>>>>> aa5aabb3a788ce133ecc97062e5e865f1c226313
import {
  BrowserRouter as Router,
  Routes,
  Route,
<<<<<<< HEAD
  Navigate,
} from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home.jsx';
import './App.css';
import { useContext } from 'react';
import { LoginContext } from './Context/LoginContext';
import ToolBar from './Compenents/OtherComponents/ToolBar/ToolBar';
import SideBar from './Compenents/OtherComponents/SideBar/SideBar';

function App() {
  const { loginOn } = useContext(LoginContext);

  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
          {loginOn && (
            // SideBar ocupando col-3 (na esquerda)
            <div className="col-3">
              <SideBar />
            </div>
          )}

          {/* ToolBar ocupando col-9 */}
          <div className="col-9">
            {loginOn && <ToolBar />}
            <div className={`container-fluid ${loginOn ? 'mt-5' : ''}`}>
              <div className="row">
                <div className={`col ${loginOn ? 'col-12' : ''}`}>
                  <Routes>
                    <Route
                      path="/"
                      element={loginOn ? <Navigate to="/home" /> : <Login />}
                    />
                    <Route path="/home" element={<Home />} />
                  </Routes>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
=======
  Navigate
} from 'react-router-dom'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home.jsx';
// import Register from './pages/Register/Register';
import './App.css'
import { useContext } from 'react';
import { LoginContext } from './Context/LoginContext';
import ToolBar from './Compenents/OtherComponents/ToolBar/ToolBar'
import SideBar from './Compenents/OtherComponents/SideBar/SideBar';



function App() {

  const { loginOn } = useContext(LoginContext)



  return (

    <Router>




      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/"
          element={loginOn ? <Navigate to="/home" /> : <Login />}
        />
      </Routes>


    </Router>

  )
}

export default App


 
>>>>>>> aa5aabb3a788ce133ecc97062e5e865f1c226313

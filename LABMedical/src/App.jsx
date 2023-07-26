
import {
  BrowserRouter as Router,
  Routes,
  Route,

  Navigate,
} from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home.jsx';
import RegisterPatient from './pages/RegisterPatient/registerPatient';
import './App.css';
import { useContext } from 'react';
import { LoginContext } from './Context/LoginContext';
import ToolBar from './Compenents/OtherComponents/ToolBar/ToolBar';
import SideBar from './Compenents/OtherComponents/SideBar/SideBar';
import RecordListing from './pages/recordListing/recordListing';

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

            <div className={`container-fluid  ${loginOn ? 'mt-5' : ''}`}>
              <div className="row ">
                <div className={`col ${loginOn ? 'col-12  div-main-home' : ''}`}>
                  <Routes>
                    <Route
                      path="/"
                      element={loginOn ? <Navigate to="/home" /> : <Login />}
                    />
                    <Route path="/home" element={<Home />} />
                    <Route path="/registerPatient" element={<RegisterPatient />} />
                    <Route path="/recordListing" element={<RecordListing />} />
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



 



import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import { useContext } from 'react';
import { LoginContext } from './Context/LoginContext';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home.jsx';
import RegisterPatient from './pages/RegisterPatient/registerPatient';
import ToolBar from './Compenents/OtherComponents/ToolBar/ToolBar';
import SideBar from './Compenents/OtherComponents/SideBar/SideBar';
import RecordListing from './pages/recordListing/recordListing';
import RegisterQuery from './pages/registerQuery/registerQuery';
import RegisterExam from './pages/RegisterExam/RegisterExam';
import './App.css';



function App() {
  const {loginOn } = useContext(LoginContext);

  if (!loginOn) {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
        </Routes>
      </Router>
    );
  }

  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
         
          <div className="col-3">
            <SideBar />
          </div>

       
          <div className="col-9">
            <ToolBar />

            <div className="container-fluid">
              <div className="row">
                <div className="col">
                  <Routes>
                    <Route path="/home" element={<Home/>} />
                    <Route path="/registerPatient" element={<RegisterPatient />} />
                    <Route path="/recordListing" element={<RecordListing />} />
                    <Route path="/registerquery" element={<RegisterQuery />} />
                    <Route path="/registerexam" element={<RegisterExam />} />   
                   
                                 
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



 


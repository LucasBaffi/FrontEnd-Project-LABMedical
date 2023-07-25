<<<<<<< HEAD
import  { useState } from "react";
import { useContext } from "react";
=======
import { useContext, useState } from "react";
>>>>>>> aa5aabb3a788ce133ecc97062e5e865f1c226313
import { LoginContext } from "../../../Context/LoginContext";
import { useNavigate } from "react-router-dom";
import { AiOutlineLogout } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
<<<<<<< HEAD
import './ToolBar.css';
import SideBar from "../SideBar/SideBar";

function ToolBar() {
  const { logout, user } = useContext(LoginContext);
=======
import './ToolBar.css'
// import SideBar from "../OtherComponents/SideBar/SideBar";


function ToolBar() {
  const { logout, user } = useContext(LoginContext)
>>>>>>> aa5aabb3a788ce133ecc97062e5e865f1c226313
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogoutClick = () => {
<<<<<<< HEAD
    logout();
    navigate('/');
=======
    logout()
    navigate('/')
>>>>>>> aa5aabb3a788ce133ecc97062e5e865f1c226313
  };

  const formatNameToUpperCase = (name) => {
    return name.toUpperCase();
  };

<<<<<<< HEAD
  return (
    <nav className="navbar  nav-main">
      <div className=" d-flex align-items-flex-start  justify-content-between w-100">   
       
        <div>
      <div>
        
      </div>
        <div >
            <a className="navbar-brand" href="#">Navbar</a>
          </div>
        </div>
        <div>
            
        <div className="d-flex">
            {user && user.name && <p className="p-name">Olá, {formatNameToUpperCase(user.name)}</p>}
            <ul className="nav nav-pills">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  onClick={handleDropdownToggle}
                >
                  <FaUser className="user-icon" />
                </a>
                <ul className={`dropdown-menu ${showDropdown ? 'show' : ''}`}>
                  <li>
                    <button onClick={handleLogoutClick} className="dropdown-item button-exit">
                      <AiOutlineLogout />
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        </div>
     
    </nav>
=======

  return (
    
    <nav className="navbar bg-body-tertiary nav-main">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <div className="div-name"> 
          {user && user.name && <p className="p-name">Olá, {formatNameToUpperCase(user.name)}</p>}
          <ul className="nav nav-pills">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded={showDropdown}
                onClick={handleDropdownToggle}
              >
                <FaUser className="user-icon" />
              </a>
              <ul className={`dropdown-menu ${showDropdown ? 'show' : ''}`}>
                <li>
                  <button onClick={handleLogoutClick} className="dropdown-item button-exit">
                    <AiOutlineLogout />
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    
    </nav>   

>>>>>>> aa5aabb3a788ce133ecc97062e5e865f1c226313
  );
}

export default ToolBar;
<<<<<<< HEAD
=======


// < !--As a link-- >
//   <nav className="navbar bg-body-tertiary">




    // <div className="div-header row">
    //   <div className="div-container w-80">
    //     <div className="div-icon-side">

    //     </div>
    //     <h1>Secao a</h1>
    //     <div className="div-name"> 
    //       {user && user.name && <p className="p-name">Olá, {formatNameToUpperCase(user.name)}</p>}
    //       <ul className="nav nav-pills">
    //         <li className="nav-item dropdown">
    //           <a
    //             className="nav-link dropdown-toggle"
    //             href="#"
    //             role="button"
    //             data-bs-toggle="dropdown"
    //             aria-expanded={showDropdown}
    //             onClick={handleDropdownToggle}
    //           >
    //             <FaUser className="user-icon" />
    //           </a>
    //           <ul className={`dropdown-menu ${showDropdown ? 'show' : ''}`}>
    //             <li>
    //               <button onClick={handleLogoutClick} className="dropdown-item button-exit">
    //                 <AiOutlineLogout />
    //               </button>
    //             </li>
    //           </ul>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>

    // </div>
>>>>>>> aa5aabb3a788ce133ecc97062e5e865f1c226313

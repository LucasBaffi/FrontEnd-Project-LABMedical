
import { useContext, useState } from "react";

import { LoginContext } from "../../../Context/LoginContext";
import { useNavigate } from "react-router-dom";
import { AiOutlineLogout } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';

import './ToolBar.css';
import SideBar from "../SideBar/SideBar";

function ToolBar() {
  const { logout, user } = useContext(LoginContext);


  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogoutClick = () => {

    logout();
    navigate('/');

  };

  const formatNameToUpperCase = (name) => {
    return name.toUpperCase();
  };




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


  );
}

export default ToolBar;


import { useContext, useState } from "react";
import { LoginContext } from "../../Context/LoginContext";
import { useNavigate } from "react-router-dom";
import { AiOutlineLogout } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import './ToolBar.css'


function ToolBar() {
  const { logout } = useContext(LoginContext)
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogoutClick = () => {
    logout()
    navigate('/')
  };

  return (
    
      <div className="div-container"> 
        <h1>Secao a</h1>
        <div className="div-name">
          <p className="p-name">Nome</p>
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

  );
}

export default ToolBar;

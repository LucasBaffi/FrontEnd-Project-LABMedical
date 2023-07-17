import { useContext, useState } from "react";
import { LoginContext } from "../../Context/LoginContext";
import TollBar from './TooBar.css'
import { AiOutlineLogout } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';


export function ToolBar() {
    const { logout } = useContext(LoginContext)

    const [showDropdown, setShowDropdown] = useState(false);

    const handleDropdownToggle = () => {
      setShowDropdown(!showDropdown);
    };
  
    const handleLogoutClick = () => {
      logout()
    };
  
    return (
      <header>
        <nav id="navbar-example2" className="navbar bg-body-tertiary px-3 mb-3">
          <a className="navbar-brand" href="#"></a>
          <h1>Secao a</h1>
          <div>
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
                    <a onClick={handleLogoutClick} className="dropdown-item">
                       <AiOutlineLogout />
                    </a>
                  </li>
                
                </ul>
              </li>

            </ul>
          </div>
        </nav>
      </header>
    );
}


export default ToolBar;
{/* <nav id="navbar-example2" className="navbar bg-body-tertiary px-3 mb-3">
        <a className="navbar-brand" href="#"></a>
        <h1></h1>
        <div>
            <ul className="nav nav-pills">
                {showLogout ? 
                (<li className="nav-item">
                    <button onClick={handleLogoutClick} className="nav-link" >  <AiOutlineLogout /></button>
                </li>
                ) : 
                 (<li className="nav-item" >
                    <button onClick={handleSecondClick}  class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Second</button>
                </li>)}

                <li className="nav-item">
                    <a className="nav-link" >First</a>
                </li>
              
                <li>

                </li>

            </ul>
        </div>
    </nav> */}
import { useState } from "react";
import {BsReverseLayoutSidebarInsetReverse} from 'react-icons/bs'
import './SideBar.css'




function SideBar() {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleDropdownToggle = () => {
        setShowDropdown(!showDropdown);
      };     

    return (

        <>
            <div className="sidebar">
                <BsReverseLayoutSidebarInsetReverse
                aria-expanded={showDropdown}
                onClick={handleDropdownToggle}
                 className="btn icon-sidebar "
                 type="button"
                 data-bs-toggle="offcanvas" 
                 data-bs-target="#offcanvasScrolling"
                  aria-controls="offcanvasScrolling">
                  </BsReverseLayoutSidebarInsetReverse>

              
               <div 
                 className={`dropdown-menu ${showDropdown ? 'show' : ''} div-dropdown`}
               id='div-dropdown'
                 data-bs-scroll="true" 
                 data-bs-backdrop="false" 
               
                  aria-labelledby="offcanvasScrollingLabel"  >
                    <div className="offcanvas-header">                        
                       
                    </div>
                    <div className="offcanvas-body body-buttons">
                        <h5>Geral</h5>
                      <button className=" btn-sidebar">INICIO</button>
                      <h5>Pacientes</h5>
                      <button className=" btn-sidebar">CADASTRAR</button>
                      <button className=" btn-sidebar">PRONTUARIOS</button>
                      <h5>Exames</h5>
                      <button className=" btn-sidebar">CADASTRAR CONSULTA</button>
                      <button className=" btn-sidebar">CADASTRAR EXAME</button>
                    </div>
                </div>
               </div>
          
        </>
    )


}

export default SideBar;
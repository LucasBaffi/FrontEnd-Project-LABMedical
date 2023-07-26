
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SideBar.css';

function SideBar() {
  const [showSideBar, setShowSideBar] = useState(true);
  const navigate = useNavigate();

  const handleToggleSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  const navRegisterPatient = (event) =>{
event.preventDefault()
navigate('/registerPatient');

  }

  return (
    <>
      {showSideBar && (
        <div className='div-sidebar'>
          <h5 className='mb-1 mt-5'>Geral</h5>
          <button className="mb-1 btn btn-outline-secondary btn-custom">INICIO</button>
          <h5 className='mb-1 mt-0'>Pacientes</h5>
          <button className="mb-1 btn btn-outline-secondary btn-custom" onClick={navRegisterPatient}>CADASTRAR</button>
          <button className="mb-1 btn btn-outline-secondary btn-custom">PRONTUARIOS</button>
          <h5 className='mb-1 mt-0'>Exames</h5>
          <button className="mb-1 btn btn-outline-secondary btn-custom">CADASTRAR CONSULTA</button>
          <button className="mb-1 btn btn-outline-secondary btn-custom">CADASTRAR EXAME</button>
          <button className="mb-2 btn btn-outline-secondary btn-custom mt-5" onClick={handleToggleSideBar} > Esconder Barra </button>
        </div>
      )} {!showSideBar && ( <div className='div-sidebar-closed'>
          <button className="mb-2 btn btn-outline-secondary btn-custom mt-3"   onClick={handleToggleSideBar} > Mostrar Barra </button>
        </div>
      )}
    </>
  );
}

export default SideBar;


import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SideBar.css';

function SideBar() {

 
  const navigate = useNavigate();


  const navRegisterPatient = (event) => {
    event.preventDefault()
    navigate('/registerPatient');
   
  }

  const navHome = (event) => {
    event.preventDefault()
    navigate('/home');
  

  }

  const navProntuario = (event) => {
    event.preventDefault()
    navigate('/recordListing');
  

  }

  const navConsulta = (event) => {
    event.preventDefault()
    navigate('/registerquery'); 
  }

  const navExam = (event) => {
    event.preventDefault()
    navigate('/registerexam');

  }
  
  

  return (
    <>
     
        <div className='div-sidebar'>
          <h5 className='mb-1 mt-5'>Geral</h5>
          <button className="mb-1 btn btn-outline-secondary btn-custom" onClick={navHome}>INICIO</button>
          <h5 className='mb-1 mt-0'>Pacientes</h5>
          <button className="mb-1 btn btn-outline-secondary btn-custom" onClick={navRegisterPatient}>CADASTRAR</button>
          <button className="mb-1 btn btn-outline-secondary btn-custom" onClick={navProntuario}>PRONTUARIOS</button>
          <h5 className='mb-1 mt-0'>Exames</h5>
          <button className="mb-1 btn btn-outline-secondary btn-custom" onClick={navConsulta}>CADASTRAR CONSULTA</button>
          <button className="mb-1 btn btn-outline-secondary btn-custom" onClick={navExam}>CADASTRAR EXAME</button>
          
        </div>
      
       
      
     
    </>
  );
}

export default SideBar;

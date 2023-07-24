import Img from '../../../assets/img-labmedical.png';
import './SideBar.css'




function SideBar() {


    return (

        <>
            <div className=' h-30 div-sidebar'>


                <h5 className='mb-1 mt-5'>Geral</h5>
                <button className="mb-1  btn btn-outline-secondary btn-custom">INICIO</button>
                <h5 className='mb-1 mt-0'>Pacientes</h5>
                <button className="mb-1 btn btn-outline-secondary btn-custom ">CADASTRAR</button>
                <button className="mb-1 btn btn-outline-secondary  btn-custom">PRONTUARIOS</button>
                <h5 className='mb-1 mt-0'>Exames</h5>
                <button className="mb-1 btn btn-outline-secondary  btn-custom ">CADASTRAR CONSULTA</button>
                <button className="mb-1 btn btn-outline-secondary btn-custom">CADASTRAR EXAME</button>

                <button className=" mb-1 btn btn-outline-secondary btn-custom mt-5">Esconder Barra</button>

            </div>


        </>
    )


}

export default SideBar;


import ToolBar from "../../Compenents/ToolBar/ToolBar";
import { AiOutlineSearch } from 'react-icons/ai';
import { PiUserCircleFill } from 'react-icons/pi';
import { HiUserGroup } from 'react-icons/hi'
import { BsFileEarmarkMedicalFill } from 'react-icons/bs'
import { LiaBookMedicalSolid } from 'react-icons/lia'
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import './Home.css'
import SideBar from "../../Compenents/SideBar/SideBar";



function Home() {
    const { search, handleChange, filterItens } = useContext(UserContext);

    const formatNameToUpperCase = (user) => {
        return user.toUpperCase();
    };


    return (
        <>
            <ToolBar />
            {/* <SideBar/> */}
            <div className="container">
                <div className="row div-main">

                    <div className="d-flex mb-4">
                        <h3 className="mt-3">Estatisticas do sistema</h3>
                    </div>
                    <div className="div-cards" >
                        <div className="div-cards-info w-4">
                            <div className="div-info-estatistica">
                                <HiUserGroup className="icon-card-info" />
                                <span className="span-length-pacients">
                                    {filterItens.length}

                                </span>
                            </div>
                            <p className="p-info-estatistica">Pacientes</p>

                        </div>
                        <div className="div-cards-info w-4">
                            <div className="div-info-estatistica">
                                <LiaBookMedicalSolid className="icon-card-info" />
                                <span className="span-length-pacients">
                                    20

                                </span>
                            </div>
                            <p className="p-info-estatistica">Consultas</p>


                        </div>
                        <div className="div-cards-info w-4">
                            <div className="div-info-estatistica">
                                <BsFileEarmarkMedicalFill className="icon-card-info" />
                                <span className="span-length-pacients">
                                    {filterItens.length}

                                </span>
                            </div>
                            <p className="p-info-estatistica">Exames</p>

                        </div>
                    </div>
                </div>

                <div >
                    <h3>Informacoes do paciente</h3>
                    <div className="row div-search">
                        <div className=" div-search1">
                            <div className="form-outline col-9 div-search2">
                                <input type="text"
                                 value={search}
                                  id="form1" 
                                  className="form-control "
                                   onChange={handleChange} />
                            </div>
                            <AiOutlineSearch className="user-icon col-1 icon-search" />

                        </div>
                    </div>
                </div>
                <ul className=" div-cards-user">
                    {filterItens.map((users) =>
                    (<li key={users.id} className=" info-user with-background "
                    >
                        <PiUserCircleFill className="user-icon col-4 icon-search" />
                        <span>{formatNameToUpperCase(users.name)}</span>
                        <span>{users.age} anos</span>
                        <span>{users.number}</span>
                        <span>{users.convenio}</span>

                    </li>)
                    )}
                </ul>
            </div >
        </>


    )
}

export default Home;



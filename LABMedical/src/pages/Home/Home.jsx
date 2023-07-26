// import ToolBar from "../../Compenents/ToolBar/ToolBar";
import { AiOutlineSearch } from 'react-icons/ai';
import { PiUserCircleFill } from 'react-icons/pi';
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { HiUserGroup } from 'react-icons/hi'
import { LiaBookMedicalSolid } from 'react-icons/lia'
import { BsFileEarmarkMedicalFill } from 'react-icons/bs'
import CardInfo from '../../Compenents/HomeComponents/CardIndo/CardInfo';
import './Home.css'



function Home() {
    const { search, handleChange, filterItens } = useContext(UserContext);

    const formatNameToUpperCase = (user) => {
        return user.toUpperCase();
    };

    return (
        <>
            <div className=" ">
                
                    <div >
                       
                            <h3 className="mt-3">Estatisticas do sistema</h3>
                        <div className="cards-user ">
                            <div className=" div-cards-info d-flex align-items-center justify-content-center gap-3 w-80">
                                <div className=" div-info-estatistica" >
                                    <div className="col ">
                                        <CardInfo titulo={'Pacientes'} valor={filterItens.length} IconComponent={HiUserGroup} />
                                    </div>
                                </div>
                            </div>
                            <div className=" div-cards-info d-flex align-items-center justify-content-center gap-3 w-80">
                                <div className=" div-info-estatistica" >
                                    <div className="col ">
                                        <CardInfo titulo={'Consultas'} valor={filterItens.length} IconComponent={LiaBookMedicalSolid} />
                                    </div>
                                </div>
                            </div>
                            <div className=" div-cards-info d-flex align-items-center justify-content-center gap-3 w-80">
                                <div className=" div-info-estatistica" >
                                    <div className="col ">
                                        <CardInfo titulo={'Exames'} valor={filterItens.length} IconComponent={BsFileEarmarkMedicalFill} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12'>

                            </div>

                        </div>

                        <div >
                            <h3 className="m-4">Informacoes do paciente</h3>
                            <div className="div-search">
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
                            (<li key={users.id} className=" info-user with-background " >
                                <PiUserCircleFill className="user-icon col-4 icon-search" />
                                <span>{formatNameToUpperCase(users.name)}</span>
                                <span>{users.age} anos</span>
                                <span>{users.number}</span>
                                <span>{users.convenio}</span>

                            </li>)
                            )}
                        </ul>

                    </div>
                </div>

           

        </>
    )
}

export default Home;



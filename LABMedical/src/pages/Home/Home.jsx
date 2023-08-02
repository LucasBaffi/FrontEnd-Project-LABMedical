import { AiOutlineSearch } from 'react-icons/ai';
import { PiUserCircleFill } from 'react-icons/pi';
import { useContext, useState, useRef, useEffect } from "react";
import { UserContext } from "../../Context/UserContext";
import { HiUserGroup } from 'react-icons/hi'
import { LiaBookMedicalSolid } from 'react-icons/lia'
import { BsFileEarmarkMedicalFill } from 'react-icons/bs'
import PatientDetails from '../../Compenents/HomeComponents/PtientDetails/PatientDetails';
import CardInfo from '../../Compenents/HomeComponents/CardIndo/CardInfo';
import { Modal } from 'react-bootstrap';



import './Home.css'



function Home() {
    const { search, handleChange, filterItens, users, consultas, exames } = useContext(UserContext);
    const [selectedPatient, setSelectedPatient] = useState(null);
    const modalRef = useRef(null);


    useEffect(() => {
     
        if (modalRef.current) {
            new Modal(modalRef.current);
        }
    }, []);

    useEffect(() => {
        
    }, [selectedPatient]);


    const formatNameToUpperCase = (user) => {
        return user.toUpperCase();

    };
    const handleShowDetails = (patient) => {
        
        setSelectedPatient(patient);
    };

    return (
        <>

            <div >
                <div >

                    <h3 className="mt-3">Estatisticas do sistema</h3>
                    <div className="cards-user ">
                        <div className=" div-cards-info d-flex align-items-center justify-content-center gap-3 w-80">
                            <div className=" div-info-estatistica" >
                                <div className="col ">


                                    <CardInfo titulo={'Pacientes'} valor={users.length} IconComponent={HiUserGroup} />

                                </div>
                            </div>
                        </div>
                        <div className=" div-cards-info d-flex align-items-center justify-content-center gap-3 w-80">
                            <div className=" div-info-estatistica" >
                                <div className="col ">


                                    <CardInfo titulo={'Consultas'} valor={consultas.length} IconComponent={LiaBookMedicalSolid} />

                                </div>
                            </div>
                        </div>
                        <div className=" div-cards-info d-flex align-items-center justify-content-center gap-3 w-80">
                            <div className=" div-info-estatistica" >
                                <div className="col ">
                                    <CardInfo titulo={'Exames'} valor={exames.length} IconComponent={BsFileEarmarkMedicalFill} />
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
                    <ul className="div-cards-user">
                        {filterItens.map((user) => (
                            <li key={user.id} className="info-user with-background">
                                <PiUserCircleFill className="user-icon col-4 icon-search" />
                                <span>{formatNameToUpperCase(user.name)}</span>
                                <span>{user.age} anos</span>
                                <span>{user.number}</span>
                                <span>{user.convenio}</span>
                                <button className='btn btn-secondary' onClick={() => handleShowDetails(user)}>Ver mais</button>
                            </li>
                        ))}
                    </ul>
                    <Modal show={selectedPatient !== null} onHide={() => setSelectedPatient(null)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Informações do paciente</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {selectedPatient && (
                                <PatientDetails
                                    patient={selectedPatient}
                                    consultations={consultas.filter((consulta) => consulta.pacienteId === selectedPatient.id)}
                                    exams={exames.filter((exame) => exame.pacienteId === selectedPatient.id)}
                                />
                            )}
                        </Modal.Body>
                        
                    </Modal>
                </div>
            </div>



        </>
    )
}

export default Home;



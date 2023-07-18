import ToolBar from "../../Compenents/ToolBar/ToolBar";
import { AiOutlineSearch } from 'react-icons/ai';
import './Home.css'



function Home() {

    return (
        <>

            <div className="container">
                <div className="row div-main">
                    <div className="col-12 div-tollBar  "><ToolBar /></div>
                    <h3>Estatisticas do sistema</h3>
                    <div className="div-cards" >
                        <div className="div-cards-info w-4">

                        </div>
                        <div className="div-cards-info w-4">

                        </div>
                        <div className="div-cards-info w-4">

                        </div>
                    </div>
                </div>

                <div >
                    <h3>Informacoes do paciente</h3>
                    <div className="row div-search">
                        <div className=" div-search1">
                            <div className="form-outline col-9 div-search2">
                                <AiOutlineSearch className="user-icon col-1 icon-search" />
                                <input type="search" id="form1" className="form-control " />
                            </div>
                            <button className="search col-3 btn btn-outline-secondary">Search</button>

                        </div>
                    </div>
                   
                </div>
                <div className="d-flex justify-content-center row div-cards-user">
                    <div className="col-8 info-user"></div>
                    <div className="col-8 info-user"></div>
                    <div className="col-8 info-user"></div>
                </div>
            </div>
        </>


    )
}

export default Home;

{/* <>
<ToolBar/>
<div classNameName="container h-100">
    <h1>ola</h1>
</div>
    </> */}
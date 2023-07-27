import { useContext } from 'react';
import { UserContext } from '../../Context/UserContext'
import { AiOutlineSearch } from 'react-icons/ai';
import './style.css'


function RecordListing() {
    const { search, handleChange, filterItens } = useContext(UserContext);

    return (
        <>
            <div >
                <h3 className="m-4">Utilize a barra de pesquisa para buscar</h3>
                <div className="div-search">
                    <div className=" div-search1">
                        <div className="form-outline col-9 div-search2">
                            <input type="text"

                                id="form1"
                                className="form-control "
                                value={search}
                                onChange={handleChange}
                            />
                        </div>
                        <AiOutlineSearch className="user-icon col-1 icon-search" />
                    </div>
                </div>
            </div>

            <table className="table form-listing">

                <thead>
                    <tr>
                        <th scope="col">Registro</th>
                        <th scope="col">Nome do Paciente</th>
                        <th scope="col">Convenio</th>

                    </tr>
                </thead>
                <tbody>
                    {filterItens.map((user) => (
                        <tr key={user.id}>
                            <th scope="row">{user.id}</th>
                            <td>{user.name}</td>
                            <td>{user.convenio}</td>

                        </tr>
                    ))}



                </tbody>
            </table>
        </>

    )
}

export default RecordListing;
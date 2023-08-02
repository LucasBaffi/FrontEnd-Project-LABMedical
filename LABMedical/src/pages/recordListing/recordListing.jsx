import { useContext } from 'react';
import { UserContext } from '../../Context/UserContext'
import { deletePatient } from '../../Services/web';

import { AiOutlineSearch } from 'react-icons/ai';
import './style.css'


function RecordListing() {
    const { search, handleChange, filterItens } = useContext(UserContext);
    
    const handleDelete = async (userId) => {
        try {
          await deletePatient(userId);
          // Se a exclusão for bem-sucedida, você pode atualizar a lista de pacientes ou recarregar os dados, conforme necessário.
          // Por exemplo, se você estiver usando useState para manter a lista de usuários:
          // setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
          alert('Paciente excluído com sucesso!');
        } catch (error) {
         alert('Erro ao excluir o paciente:', error);
        }
      };

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

            <table className="table table-bordered table-striped mx-auto table-width ">

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
                            <th scope="row" className='d-flex justify-content-between'>{user.id}<button className=" btn btn-primary" onClick={() => handleDelete(user.id)}>Excluir </button></th>
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
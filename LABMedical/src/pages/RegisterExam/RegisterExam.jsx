import { useState, useContext } from "react";
import { PostExam } from "../../Services/web";
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../../Context/UserContext";


function RegisterExam() {

    const [nomeExame, setNomeExame] = useState('')
    const [dataExame, setDataExame] = useState('')
    const [horaExame, setHoraExame] = useState('')
    const [tipoExame, setTipoExame] = useState('')
    const [laboratorio, setLaboratorio] = useState('')
    const [resultados, setResultados] = useState('')
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [isLoading, setIsLoanding] = useState(false)
    const { search, handleChange, filterItens } = useContext(UserContext);
    const navigate = useNavigate();

    const selectedPatient = filterItens.find((user) => user.id === selectedUserId);


    const handleNomeExameChange = (event) => {
        setNomeExame(event.target.value);
    };

    const handleDataExameChange = (event) => {
        setDataExame(event.target.value);
    };

    const handleHoraExameChange = (event) => {
        setHoraExame(event.target.value);
    };

    const handleTipoExameChange = (event) => {
        setTipoExame(event.target.value);
    };

    const handleLaboratorioChange = (event) => {
        setLaboratorio(event.target.value);
    };

    const handleResultadosChange = (event) => {
        setResultados(event.target.value);
    };

    const handleSelectUser = (userId) => {

        setSelectedUserId(userId);
        setNomeExame("");
        setDataExame("");
        setHoraExame("");
        setTipoExame("");
        setLaboratorio("");
        setResultados("");

    };
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (
            !selectedUserId ||
            !nomeExame ||
            !dataExame ||
            !horaExame ||
            !tipoExame ||
            !laboratorio ||
            !resultados
        ) {
            alert("Preencha todos os campos obrigatórios!");
            return;
        }

        try {
            const newExame = {
                pacienteId: selectedUserId,
                nomeExame,
                dataExame,
                horaExame,
                tipoExame,
                laboratorio,
                resultados,
            };

            setIsLoanding(true);

            const exame = await PostExam(newExame);

            if (!exame) {
                alert('Erro ao cadastrar exame.');
            } else {
                setIsLoanding(true);
                alert('exame realizado com sucesso!');
                setTimeout(() => {
                    navigate('/home'); 
                }, 3000);
            }
        } catch (error) {


            alert('Erro ao cadastrar exame.');
            setIsLoanding(false);
        }
    };

    return (
        
        <>
        <div>
        <h3 className="m-4">Encontre o Paciente</h3>
        <div className="div-search">
          <div className=" div-search1 mb-1">
            <div className="form-outline col-9 div-search2">
              <input type="text"
                placeholder="Digite o nome do Paciente"

                id="form1"
                className="form-control "
                value={search}
                onChange={handleChange}
              />
            </div>
            {/* <AiOutlineSearch className="user-icon col-1 icon-search" /> */}
          </div>
        </div>
      </div>
      <ul className="div-cards-user ">
      {filterItens.map((user) => (
          <button className=" btn btn-outline-secondary" key={user.id} onClick={() => handleSelectUser(user.id)}>
            <span>{user.name.toUpperCase()}</span>
          </button>
        ))}
      </ul>

      <div className="form-query">
        <form className="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <div>
              <div className="col-12">
                <h3>Exame de {selectedPatient ? selectedPatient.name.toUpperCase() : ""} </h3>
                <button type="button" className="btn btn-primary me-2">
                  Editar
                </button>
                <button type="button" className="btn btn-danger me-2">
                  Deletar
                </button>
              </div>
            </div>
          </div>
          <div className="col-8">
            <label className="form-label">Nome da exame</label>
            <input
              type="text"
              className="form-control"
              value={nomeExame}
              onChange={handleNomeExameChange}
              required
            />
          </div>
          <div className="col-8">
            <div className="col-md-6">
              <label className="form-label">Data da exame</label>
              <input
                type="date"
                className="form-control"
                value={dataExame}
                onChange={handleDataExameChange}
                required
              />
            </div>
            <div className="col-8">
              <label className="form-label">Hora da exame</label>
              <input
                type="time"
                className="form-control"
                value={horaExame}
                onChange={handleHoraExameChange}
                required
              />
            </div>
          </div>
          <div className="col-8">
            <label className="form-label">Tipo de exame</label>
            <input
            type="text"
              className="form-control"
              value={tipoExame}
              onChange={handleTipoExameChange}            
              required
            />
          </div>
          <div className="col-8">
            <label className="form-label">Laboratorio</label>
            <input
              type="text"
              className="form-control"
              value={laboratorio}
              onChange={handleLaboratorioChange}
              required
            />
          </div>
          
          <div className="col-8">
            <label className="form-label">Resultados</label>
            <textarea
              className="form-control"
              value={resultados}
              onChange={handleResultadosChange}
              rows="4"
              required
            />
          </div>
          {isLoading ? (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            <button
              type="submit"
              className="btn btn-success"
              onClick={handleSubmit}
              disabled={!selectedUserId} // Desabilitar o botão quando selectedUserId é null
            >
              Salvar
            </button>
          )}
        </form>
      </div>
        
        </>
    )
}


export default RegisterExam;



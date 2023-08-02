import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext'
// import { AiOutlineSearch } from 'react-icons/ai';
import { PostConsulta } from "../../Services/web";
import './style.css'


function RegisterQuery() {

  const [motivoConsulta, setMotivoConsulta] = useState('');
  const [dataConsulta, setDataConsulta] = useState('');
  const [horaConsulta, setHoraConsulta] = useState('');
  const [problema, setProblema] = useState('');
  const [medicacaoReceitada, setMedicacaoReceitada] = useState('');
  const [dosagem, setDosagem] = useState('');
  const [precaucoes, setPrecaucoes] = useState('');
  const [isLoading, setIsLoanding] = useState(false)
  const { search, handleChange, filterItens, users } = useContext(UserContext);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const navigate = useNavigate();

  const selectedPatient = filterItens.find((user) => user.id === selectedUserId);



  const handleMotivoConsultaChange = (event) => {
    setMotivoConsulta(event.target.value);
  };

  const handleDataConsultaChange = (event) => {
    setDataConsulta(event.target.value);
  };

  const handleHoraConsultaChange = (event) => {
    setHoraConsulta(event.target.value);
  };

  const handleProblemaChange = (event) => {
    setProblema(event.target.value);
  };

  const handleMedicacaoReceitadaChange = (event) => {
    setMedicacaoReceitada(event.target.value);
  };

  const handleDosagemChange = (event) => {
    setDosagem(event.target.value);
  };

  const handlePrecaucoesChange = (event) => {
    setPrecaucoes(event.target.value);
  };

  const handleSelectUser = (userId) => {
    setSelectedUserId(userId);
    setMotivoConsulta('');
    setDataConsulta('');
    setHoraConsulta('');
    setProblema('');
    setMedicacaoReceitada('');
    setDosagem('');
    setPrecaucoes('');
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !selectedUserId ||
      !motivoConsulta ||
      !dataConsulta ||
      !horaConsulta ||
      !problema ||
      !medicacaoReceitada ||
      !dosagem ||
      !precaucoes
    ) {

      alert('Preencha todos os campos obrigatórios!');
      return;
    }

    try {
      const newConsulta = {
        pacienteId: selectedUserId,
        motivoConsulta,
        dataConsulta,
        horaConsulta,
        problema,
        medicacaoReceitada,
        dosagem,
        precaucoes,
      };

      setIsLoanding(true);

      const consulta = await PostConsulta(newConsulta);

      if (!consulta) {
        alert('Erro ao cadastrar consulta.');
      } else {
        setIsLoanding(true);
        alert('Consulta realizada com sucesso!');
        setTimeout(() => {
          navigate('/home'); 
        }, 3000);
      }
    } catch (error) {


      alert('Erro ao cadastrar consulta.');
      setIsLoanding(false);
    }
  };
  return (
    <>
      <div >
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
      <ul className="div-cards-user">
        {filterItens.map((user) => (
          <button className=" btn btn-outline-secondary" key={user.id} onClick={() => handleSelectUser(user.id)}>
            <span>{user.name.toUpperCase()}</span>
          </button>
        ))}
      </ul>

      <div className=" form-query">
        <form className="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <div>
              <div className="col-12 ">
                <h3>Consulta de {selectedPatient ? selectedPatient.name.toUpperCase() : ""}</h3>
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
            <label className="form-label">Motivo da Consulta</label>
            <input
              type="text"
              className="form-control"
              value={motivoConsulta}
              onChange={handleMotivoConsultaChange}
              required
            />
          </div>
          <div className="col-8">
            <div className="col-md-6">
              <label className="form-label">Data da Consulta</label>
              <input
                type="date"
                className="form-control"
                value={dataConsulta}
                onChange={handleDataConsultaChange}
                required
              />
            </div>
            <div className="col-8">
              <label className="form-label">Hora da Consulta</label>
              <input
                type="time"
                className="form-control"
                value={horaConsulta}
                onChange={handleHoraConsultaChange}
                required
              />
            </div>
          </div>
          <div className="col-8">
            <label className="form-label">Descrição do Problema</label>
            <textarea
              className="form-control"
              value={problema}
              onChange={handleProblemaChange}
              rows="4"
              required
            />
          </div>
          <div className="col-8">
            <label className="form-label">Medicação Receitada</label>
            <input
              type="text"
              className="form-control"
              value={medicacaoReceitada}
              onChange={handleMedicacaoReceitadaChange}
              required
            />
          </div>
          <div className="col-8">
            <label className="form-label">Dosagem</label>
            <input
              type="text"
              className="form-control"
              value={dosagem}
              onChange={handleDosagemChange}
              required
            />
          </div>
          <div className="col-8">
            <label className="form-label">Precauções</label>
            <textarea
              className="form-control"
              value={precaucoes}
              onChange={handlePrecaucoesChange}
              rows="4"
              required
            />
          </div>
          {isLoading ?
            (
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) :
            <button
              type="submit"
              className="btn btn-success"
              onClick={handleSubmit}
              disabled={!selectedUserId} // Desabilitar o botão quando selectedUserId é null
            >
              Salvar
            </button>
          }
        </form>
      </div>
    </>
  );
}

export default RegisterQuery;



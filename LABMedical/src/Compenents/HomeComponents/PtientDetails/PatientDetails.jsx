import './PatientDetails.css'

function PatientDetails({ patient, consultations, exams }) {
  return (
    
     
      <div className="modal-body">
        <h3>Dados do paciente</h3>
        <div>
          <p><strong>Nome:</strong> {patient.name}</p>
          <p><strong>Gênero:</strong> {patient.genero}</p>
          <p><strong>Data de Nascimento:</strong> {patient.dataNascimento}</p>
          <p><strong>CPF:</strong> {patient.cpf}</p>
        </div>

        <h3>Consultas</h3>
        {consultations.map((consulta) => (
          <div key={consulta.id}>
            <p><strong>Motivo da Consulta:</strong> {consulta.motivoConsulta}</p>
            <p><strong>Data da Consulta:</strong> {consulta.dataConsulta}</p>
            <p><strong>Hora da Consulta:</strong> {consulta.horaConsulta}</p>
            <p><strong>Precauções:</strong> {consulta.precaucoes}</p>
          </div>
        ))}

        <h3>Exames</h3>
        {exams.map((exame) => (
          <div key={exame.id}>
            <p><strong>Nome do Exame:</strong> {exame.nomeExame}</p>
            <p><strong>Data do Exame:</strong> {exame.dataExame}</p>
            <p><strong>Tipo de Exame:</strong> {exame.tipoExame}</p>
            <p><strong>Laboratório:</strong> {exame.laboratorio}</p>
           
          </div>
        ))}
      </div>
     
 
  
  );
}

export default PatientDetails;
const URL_API = 'http://localhost:3000'



export async function LoginApi(email, password) {
  const response = await fetch(`${URL_API}/usuarios`);
  const usuarios = await response.json();
  const usuario = usuarios.find(
    (usuario) => usuario.email === email && usuario.password === password
  );

  return usuario;
}



export async function RegisterApi(name, email, password) {
  const response = await fetch(`${URL_API}/usuarios`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  });

  if (response.ok) {
    const usuario = await response.json();
    return usuario;
  } else {
    throw new Error('Error registering user.');
  }
}


export async function PostPatient(
  name,
  genero,
  dataNascimento,
  cpf,
  rg,
  estadoCivil,
  number,
  email,
  naturalidade,
  convenio,
  numeroCarteira,
  validade,
  cep,
  cidade,
  estado,
  logradouro,
  numero,
  complemento,
  bairro,
  pontoReferencia,
) {
  const response = await fetch(`${URL_API}/pacientes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      genero,
      dataNascimento,
      cpf,
      rg,
      estadoCivil,
      number,
      email,
      naturalidade,
      convenio,
      numeroCarteira,
      validade,
      cep,
      cidade,
      estado,
      logradouro,
      numero,
      complemento,
      bairro,
      pontoReferencia,
    }),
  });

  if (response.ok) {
    const usuario = await response.json();
    return usuario;
  } else {
    throw new Error('Erro ao cadastrar usuário.');
  }
}

export async function deletePatient(patientId) {
  const response = await fetch(`${URL_API}/pacientes/${patientId}`, {
    method: 'DELETE',
  });

  if (response.ok) {
  
    return patientId;
  } else {
    throw new Error('Erro ao excluir paciente.');
  }
}









export async function PostConsulta(consultaData) {
  
 
  const response = await fetch(`${URL_API}/consultas`, {
      method: 'POST',
      headers: {
        
       
  'Content-Type': 'application/json',
      },
      body: JSON.stringify(consultaData),
    });
  
    if (response.ok) {
      const consulta = await response.json();
      return consulta;
    } else {
      return null;
    }
  }

  export async function PostExam(consultaData) {
  
 
    const response = await fetch(`${URL_API}/exames`, {
        method: 'POST',
        headers: {
          
         
    'Content-Type': 'application/json',
        },
        body: JSON.stringify(consultaData),
      });
    
      if (response.ok) {
        const consulta = await response.json();
        return consulta;
      } else {
        return null;
      }
    }





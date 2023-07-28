import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PostPatient } from '../../Services/web';
import './style.css'

// form-patient mx-auto
function RegisterPatient() {
    const [name, setNome] = useState('');
    const [genero, setGenero] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [cpf, setCpf] = useState('');
    const [rg, setRg] = useState('');
    const [estadoCivil, setEstadoCivil] = useState('');
    const [number, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [naturalidade, setNaturalidade] = useState('');
    const [convenio, setConvenio] = useState('');
    const [numeroCarteira, setNumeroCarteira] = useState('');
    const [validade, setValidade] = useState('');
    const [cep, setCep] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [bairro, setBairro] = useState('');
    const [pontoReferencia, setPontoReferencia] = useState('');
    const [isLoading, setIsLoanding] = useState(false)
    const navigate = useNavigate();
    



    const handleNomeChange = (event) => {
        setNome(event.target.value);
    };

    const handleGeneroChange = (event) => {
        setGenero(event.target.value);
    };

    const handleDataNascimentoChange = (event) => {
        setDataNascimento(event.target.value);
    };

    const handleCpfChange = (event) => {
        setCpf(event.target.value);
    };

    const handleRgChange = (event) => {
        setRg(event.target.value);
    };

    const handleEstadoCivilChange = (event) => {
        setEstadoCivil(event.target.value);
    };

    const handleTelefoneChange = (event) => {
        setTelefone(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleNaturalidadeChange = (event) => {
        setNaturalidade(event.target.value);
    };

    const handleConvenioChange = (event) => {
        setConvenio(event.target.value);
    };

    const handleNumeroCarteiraChange = (event) => {
        setNumeroCarteira(event.target.value);
    };

    const handleValidadeChange = (event) => {
        setValidade(event.target.value);
    };

    const handleCepChange = (event) => {
        setCep(event.target.value);
    };

    const handleCidadeChange = (event) => {
        setCidade(event.target.value);
    };

    const handleEstadoChange = (event) => {
        setEstado(event.target.value);
    };

    const handleLogradouroChange = (event) => {
        setLogradouro(event.target.value);
    };

    const handleNumeroChange = (event) => {
        setNumero(event.target.value);
    };

    const handleComplementoChange = (event) => {
        setComplemento(event.target.value);
    };

    const handleBairroChange = (event) => {
        setBairro(event.target.value);
    };

    const handlePontoReferenciaChange = (event) => {
        setPontoReferencia(event.target.value);
    };


    const handleRegister = async (event) => {
        event.preventDefault()


        if (!name || !genero || !dataNascimento || !cpf || !rg || !estadoCivil || !number || !email || !naturalidade || !convenio || !numeroCarteira || !validade || !cep || !cidade || !estado || !logradouro || !numero || !bairro || !pontoReferencia) {
            alert('Preencha todos os campos obrigatórios!');
            return;
        }

        try {
            const usuario = await PostPatient(
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
            );

            if (!usuario) {
                alert('Erro ao cadastrar usuário.');
            } else {
                setIsLoanding(true);
                alert('Cadastro realizado com sucesso!');
                setTimeout(() => {
                    navigate('/home'); // Navega para a home após 2,5 segundos
                }, 3000);
              
            }
        } catch (error) {
            alert('Erro ao cadastrar usuário.');
        }





        setNome('');
        setGenero('');
        setDataNascimento('');
        setCpf('');
        setRg('');
        setEstadoCivil('');
        setTelefone('');
        setEmail('');
        setNaturalidade('');
        setConvenio('');
        setNumeroCarteira('');
        setValidade('');
        setCep('');
        setCidade('');
        setEstado('');
        setLogradouro('');
        setNumero('');
        setComplemento('');
        setBairro('');
        setPontoReferencia('');


    }

    return (
        <>




            <h3>Preencha os dados para cadastrar</h3>
            <form className="form-patient mx-auto">
                <div className='div-button-register '>
                    <h4>Identificação</h4>

                    <div className="col-12 d-flex justify-content-end">
                        <button type="button" className="btn btn-primary me-2">
                            Editar
                        </button>
                        <button type="button" className="btn btn-danger me-2">
                            Deletar
                        </button>
                        <button type="submit" className="btn btn-success" onClick={handleRegister}>
                            Salvar
                        </button>

                    </div>
                </div>
                {isLoading && (
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                )}              

                <div className="col-md-8">
                    <label className="form-label">Nome</label>
                    <input type="text" className="form-control" id="inputNome" value={name}
                        onChange={handleNomeChange} />
                </div>
                <div className="col-md-8">
                    <label className="form-label">Gênero</label>
                    <select className="form-select" id="inputGenero" value={genero}
                        onChange={handleGeneroChange}>
                        <option value="">Selecione o Gênero</option>
                        <option value="masculino">Masculino</option>
                        <option value="feminino">Feminino</option>
                        <option value="nao-binario">Não-Binário</option>
                    </select>
                </div>
                <div className="col-md-8">
                    <label className="form-label">Data de Nascimento</label>
                    <input type="date" className="form-control" id="inputDataNascimento" value={dataNascimento}
                        onChange={handleDataNascimentoChange} />
                </div>
                <div className="col-md-8">
                    <label className="form-label">CPF</label>
                    <input type="text" className="form-control" id="inputCpf" value={cpf}
                        onChange={handleCpfChange} />
                </div>
                <div className="col-md-8">
                    <label className="form-label">RG</label>
                    <input type="text" className="form-control" id="inputRg" value={rg}
                        onChange={handleRgChange} />
                </div>
                <div className="col-md-8">
                    <label className="form-label">Estado Civil</label>
                    <select className="form-select" id="inputEstadoCivil" value={estadoCivil}
                        onChange={handleEstadoCivilChange}>
                        <option value="">Selecione o Estado Civil</option>
                        <option value="solteiro">Solteiro</option>
                        <option value="casado">Casado</option>
                        <option value="divorciado">Divorciado</option>
                        <option value="viuvo">Viúvo</option>
                    </select>
                </div>
                <div className="col-md-8">
                    <label className="form-label">Telefone</label>
                    <input type="tel" className="form-control" id="inputTelefone" value={number}
                        onChange={handleTelefoneChange} />
                </div>
                <div className="col-md-8">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail" value={email}
                        onChange={handleEmailChange} />
                </div>
                <div className="col-md-8">
                    <label className="form-label">Naturalidade</label>
                    <input type="text" className="form-control" id="inputNaturalidade" value={naturalidade}
                        onChange={handleNaturalidadeChange} />
                </div>
                <h4>Convenio</h4>
                <div className="col-md-8">
                    <label className="form-label">Convênio</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputConvenio"
                        value={convenio}
                        onChange={handleConvenioChange}
                    />
                </div>
                <div className="col-md-8">
                    <label className="form-label">Número da Carteira</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputNumeroCarteira"
                        value={numeroCarteira}
                        onChange={handleNumeroCarteiraChange}
                    />
                </div>
                <div className="col-md-8">
                    <label className="form-label">Validade</label>
                    <input
                        type="date"
                        className="form-control"
                        id="inputValidade"
                        value={validade}
                        onChange={handleValidadeChange}
                    />
                </div>
                <h4>Dados de endereço</h4>
                <div className="col-md-8">
                    <label className="form-label">CEP</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputCep"
                        value={cep}
                        onChange={handleCepChange}
                    />
                </div>
                <div className="col-md-8">
                    <label className="form-label">Cidade</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputCidade"
                        value={cidade}
                        onChange={handleCidadeChange}
                    />
                </div>
                <div className="col-md-8">
                    <label className="form-label">Estado</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputEstado"
                        value={estado}
                        onChange={handleEstadoChange}
                    />
                </div>
                <div className="col-md-8">
                    <label className="form-label">Logradouro</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputLogradouro"
                        value={logradouro}
                        onChange={handleLogradouroChange}
                    />
                </div>
                <div className="col-md-8">
                    <label className="form-label">Número</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputNumero"
                        value={numero}
                        onChange={handleNumeroChange}
                    />
                </div>
                <div className="col-md-8">
                    <label className="form-label">Complemento</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputComplemento"
                        value={complemento}
                        onChange={handleComplementoChange}
                    />
                </div>
                <div className="col-md-8">
                    <label className="form-label">Bairro</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputBairro"
                        value={bairro}
                        onChange={handleBairroChange}
                    />
                </div>
                <div className="col-md-8">
                    <label className="form-label">Ponto de Referência</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputPontoReferencia"
                        value={pontoReferencia}
                        onChange={handlePontoReferenciaChange}
                    />
                </div>


            </form>



        </>
    )
}


export default RegisterPatient;
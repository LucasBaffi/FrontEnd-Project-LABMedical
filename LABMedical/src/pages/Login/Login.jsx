import { useState, useEffect, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import MyImg from '../../assets/logo-pulso-hospital.png';
import MySecoundImg from '../../assets/img-labmedical.png';
import Register from '../Register/Register.jsx';
import { LoginApi } from '../../Services/web.js';
import './Login.css';
import { LoginContext } from '../../Context/LoginContext.jsx'



function Login() {

  const { login } = useContext(LoginContext);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const handleRegisterClick = () => {
    setShowRegisterModal(true);
  };

  const handleRegisterClose = () => {
    setShowRegisterModal(false);
  }

  const inputRefs = useRef({});

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [errorForm, setErrorForm] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    setErrorForm(false)
  }, [password])

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const response = await LoginApi(email, password)
    if (!response) {
      setErrorForm(true)
      inputRefs.current.email.style.borderColor = 'red'
      inputRefs.current.password.style.borderColor = 'red'
      return;
    }

    login(response)
    navigate('/home')
  }

  return (
    <>
      <div className='div-login'>
        <div className='div-form1'>
          <img src={MyImg} className='img-logo' alt="" />
          <img src={MySecoundImg} alt="Logo-LABMedical" />
        </div>
        <div className='div-form w-100'>
          <div className='div-open-modal'>
            <h4 className='title'>Dont have an account?</h4>


            <button type="button" className="btn btn-outline-primary" onClick={handleRegisterClick} >Register</button>
            {showRegisterModal && < Register onClose={handleRegisterClose} />}
          </div>
          <div className="row">
            <form onSubmit={handleSubmit}>
              <h3>Login</h3>
              <label className="formGroupExampleInput">Email</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email}
                ref={(el) => (inputRefs.current.email = el)}
                placeholder="Digite seu e-mail"
                onChange={handleEmailChange} />

              <label className="formGroupExampleInput">PassWord</label>
              <input type="password" className="form-control" id="exampleInputPassword1" minLength="6"
                ref={(el) => (inputRefs.current.password = el)}
                value={password} placeholder="Digite sua senha"
                onChange={handlePasswordChange} />

              {errorForm && <span style={{ color: 'red' }}>E-mail e/ou senha inválidos</span>}

              <button type="submit" className="btn btn-primary w-100 btn-login">Login</button>
            </form>
            <div>
              <a className="underlineHover" href="#">Forgot Password?</a>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Login;

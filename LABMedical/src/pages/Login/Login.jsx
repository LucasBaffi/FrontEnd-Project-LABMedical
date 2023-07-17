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
  const [errorForm, setErrorForm] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const inputRefs = useRef({});

  
  
    useEffect(() => {
      setErrorForm(false)
    }, [password])

  const handleRegisterClick = () => {
    setShowRegisterModal(true);
  };

  const handleRegisterClose = () => {
    setShowRegisterModal(false);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
    resetInputBorderColor('email')
    resetInputBorderColor('password')
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
    resetInputBorderColor('email')
    resetInputBorderColor('password')
  }

  const resetInputBorderColor = (inputName) => {
    inputRefs.current[inputName].style.borderColor = '';
  };

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

  const resetPassword =() =>{

    alert('functionality under construction');
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
            <a className='title' >Dont have an account?</a>


            <button type="button" className="btn btn-outline-primary" onClick={handleRegisterClick} >Register</button>
            {showRegisterModal && < Register onClose={handleRegisterClose} />}
          </div>
          <div className="row">
            <form onSubmit={handleSubmit}>
              <h3>Login</h3>
              <label className="formGroupExampleInput">Email</label>
              <input type="email" className="form-control" id="exampleInputEmail1" 
              aria-describedby="emailHelp" value={email}
                ref={(el) => (inputRefs.current.email = el)}
                placeholder="Type your e-mail"
                onChange={handleEmailChange} />

              <label className="formGroupExampleInput">PassWord</label>
              <input type="password" className="form-control" id="exampleInputPassword1" minLength="6"
                ref={(el) => (inputRefs.current.password = el)}
                value={password} placeholder="Type your password"
                onChange={handlePasswordChange} />

              {errorForm  && <span style={{color:'red'}} >Incorrect email and/or password</span>}
              <button type="submit" className="btn btn-primary w-100 btn-login">Login</button>
            </form>
            <div>
              <a className="underlineHover" href="#" onClick={resetPassword}>Forgot Password?</a>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Login;

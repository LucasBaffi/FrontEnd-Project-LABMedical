import { useState } from 'react';
import MyImg from '../../assets/logo-pulso-hospital.png';
import MySecoundImg from '../../assets/img-labmedical.png';
import Modal from 'react-modal';
import './Login.css';
import './Modal.css'


Modal.setAppElement('#root');




function Login() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closedModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className='div-login'>
        <div className='div-form1'>
          <img src={MyImg} className='img-logo' alt="" />
          <img src={MySecoundImg}  alt="Logo-LABMedical" />
        </div>
        <div className='div-form w-100'>
          <div className='div-open-modal'>
            <h4 className='title'>Don't have an account?</h4>
           
            <button type="button" className="btn btn-outline-primary" onClick={openModal}>Register</button>
          </div>
          <div className="row">
            <form>
              <h3>Login</h3>
              <label className="formGroupExampleInput">Email</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <label className="formGroupExampleInput">PassWord</label>
              <input type="password" className="form-control" id="exampleInputPassword1" />
              <button type="submit" className="btn btn-primary w-100 btn-login">Login</button>
            </form>
            <div>
              <a className="underlineHover" href="#">Forgot Password?</a>
            </div>
          </div>
        </div>
      </div>
     

    <div className='div-main-modal'>
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closedModal}
        // style={customStyles}
        contentLabel="Modal de exemplo"
        className="custom-modal"
        id='open-modal'

      >
        <div className='div-button-closed-modal'>
        <button className='button-closed-modal' onClick={closedModal}>x</button>
    
        </div>
        <form action="" className='form-modal'>
          <h4>Preencha os dados</h4>
          <label  htmlFor="">Name</label>
          <input   className="form-control"  aria-label="Username" aria-describedby="basic-addon1"  />
          <label htmlFor="">Email</label>
          <input   className="form-control" aria-label="Email" aria-describedby="basic-addon1" type='email'></input>
          <label htmlFor="">Password</label>
          <input   className="form-control"  aria-label="Password" aria-describedby="basic-addon1" type='Password'></input>
           
          <button className='btn btn-primary button-send'>Send</button>
        </form>
      
      </Modal>
    </div>
    </>
  )
}

export default Login;

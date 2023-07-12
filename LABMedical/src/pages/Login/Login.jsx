import React, { useState } from 'react';
import './Login.css';
import './Modal.css'
import MyImg from '../../assets/hospital-logo-design-vector-medical-cross_53876-136743.avif';
import MySecoundImg from '../../assets/img-labmedical.png';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function Login() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function abrirModal() {
    setIsOpen(true);
  }

  function fecharModal() {
    setIsOpen(false);
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
            <h4 className='title'>Não possui conta</h4>
            <button type="button" className="btn btn-outline-primary" onClick={abrirModal}>Register</button>
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

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={fecharModal}
        contentLabel="Modal de exemplo"
        className="custom-modal"
        id='open-modal'

      >
        <form action="">
          <input></input>
          <input></input>
        </form>
      
      </Modal>
    </>
  )
}

export default Login;

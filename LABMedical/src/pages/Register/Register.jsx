import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import './Modal.css';
import { RegisterApi } from '../../Services/web';
import { useNavigate } from 'react-router-dom';

Modal.setAppElement('#root');

const Register = ({ onClose }) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();


  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleRegister = async (event) => {
    event.preventDefault()
    // Validating name, email, and password
    if (name.trim() === '') {
      alert('Please enter a name.');
      return;
    }

    if (!email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (password.length < 8) {
      alert('Please enter a password with at least 8 characters.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');

      return;
    }


    const usuario = await RegisterApi(name, email, password);
    if (!usuario) {
      alert('Error registering user.');
    }
    alert(`Your count registered successfully`)
    navigate('/login')


    // Clearing form fields
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');

    // Closing the register modal
    onClose();
  };

  return (
    <Modal
      isOpen={true}
      onRequestClose={onClose}
      contentLabel='Modal de exemplo'
      className='custom-modal'
      id='open-modal'>

      <div className='div-button-closed-modal'>
        <button className='button-closed-modal' onClick={onClose}>
          x
        </button>
      </div>
      <form className='form-modal'>
        <h4>Personal data</h4>
        <label htmlFor='name'>Name:</label>
        <input id='name' className='form-control' value={name} onChange={handleNameChange} aria-label='Username' />

        <label htmlFor='email'>Email:</label>
        <input id='email' className='form-control' value={email} onChange={handleEmailChange} aria-label='Email' type='email' />

        <label htmlFor='password'>Password:</label>
        <input id='password' className='form-control' value={password} onChange={handlePasswordChange} aria-label='Password' type='password' />

        <label htmlFor='confirmPassword'>Password confirmation:</label>
        <input id='confirmPassword' className='form-control' value={confirmPassword} onChange={handleConfirmPasswordChange} aria-label='Confirm Password' type='password' />

        <button type='submit' onClick={handleRegister} className='btn btn-primary button-send form-control'>
          Send
        </button>
      </form>
    </Modal>
  );
};

Register.propTypes = {
  onClose: PropTypes.func.isRequired,
};



export default Register;

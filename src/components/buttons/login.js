import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';

const LoginBtn = () => {


  
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };


    return (
       
       <>
       <button  className="login-btn fs-5"  onClick={handleShow}>
         <i class="fa-regular fa-user"></i>
      </button>

      <Modal show={show} onHide={handleClose} backdrop="static"  keyboard={false}    size="md" aria-labelledby="contained-modal-title-vcenter"
      centered>

        <Modal.Header closeButton className='text-center  d-flex justify-content-center border border-white'>

          <Modal.Title className='col-lg-10 ms-5'>Welcome To Furni.</Modal.Title>

        </Modal.Header>

        <Modal.Body>

          <div className='d-flex justify-content-center pt-4  '>
            <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3 col-lg-10 d-flex justify-content-center">

            <Form.Control type="email" placeholder="name@example.com" className='col-lg-12'/>

            </FloatingLabel>
          </div>

          <div className='d-flex justify-content-center pt-2'>

          <FloatingLabel controlId="floatingPassword" label="Password" className='col-lg-10'>

            <Form.Control
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              
            />

            <i
              className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}
              onClick={togglePasswordVisibility}
              style={{ position: 'absolute', right: '10px', top: '19px', cursor: 'pointer' }}
            />

            </FloatingLabel>

          </div>

          <div className='d-flex justify-content-center'>

            <div className='col-lg-10 d-flex pt-3'>

              <div className='d-flex col-lg-6'>
                <Form.Check aria-label="option 1" id="loginCheck" className='me-2'/>
                <label htmlFor='loginCheck'>Remember me</label>
              </div>

              <div className='d-flex justify-content-end col-lg-6 '>
                <Link className='text-black text-decoration-none'>Forgot password?</Link>
              </div>

            </div>

          </div>

          <div className='login-btn-container mt-4'>
            <button className='login-btn bg bg-dark text-white col-lg-5 pt-2 pb-2'>Login</button>
          </div>

          <div className='mt-4 text-center'>
            <p>Dont have an account? <span> <Link to="/register" className='text-black text-decoration-none' onClick={() => setShow(false)}>Register here</Link></span></p>
          </div>



        </Modal.Body>
        
  
        
      </Modal>
       </> 
       
    )

}

export default LoginBtn
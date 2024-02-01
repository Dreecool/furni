import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import img from '../../components/images/img-grid-3.jpg';
import RegisterBtn from '../../components/buttons/register';

import sofa from '../../components/images/sofa.png'

//footer
import Footer from '../../components/ui/footer/footer';

const Register = () => {

    const location = useLocation();
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    const [secPassword, setSecPassword] = useState('');
    const [showSecPassword, setSecShowPassword] = useState(false);

    const togglePasswordVisibilitySec = () => {
        setSecShowPassword(!showSecPassword);
    };

    return (
        <>
            <div className="register-container  d-flex align-items-center flex-wrap">

                 <div className='input-container d-flex flex-column pb-5 pt-5  col-lg-5'>

                    <h1 className='text-center mb-5'>Sign up</h1>

                    <div className='d-flex align-items-center justify-content-end'>

                       <span className='fs-4 me-3'><i class="fa-solid fa-user"></i></span>

                       <FloatingLabel controlId="floatingInput" label="Your Name" className="mb-3 col-lg-7 d-flex justify-content-center">

                         <Form.Control type="text" placeholder="Your Name" className='col-lg-12'/>

                        </FloatingLabel>

                    </div>

                    <div className='d-flex align-items-center justify-content-end'>

                        <span className='fs-4 me-3'><i class="fa-regular fa-envelope"></i></span>

                        <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3 col-lg-7 d-flex justify-content-center">

                         <Form.Control type="email" placeholder="name@example.com" className='col-lg-12'/>

                        </FloatingLabel>

                    </div>

                    <div className='d-flex align-items-center justify-content-end mb-3'>

                     <span className='fs-4 me-3'><i class="fa-solid fa-bag-shopping"></i></span>

                     <FloatingLabel controlId="floatingPassword" label="Password" className='col-lg-7 d-flex justify-content-center'>

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

                    <div className='d-flex align-items-center justify-content-end'>

                     <span className='fs-4 me-3'><i class="fa-solid fa-key"></i></span>

                     <FloatingLabel controlId="floatingPassword" label="Repeat Your Password" className='col-lg-7 d-flex justify-content-center'>

                        <Form.Control
                            type={showSecPassword ? 'text' : 'password'}
                            placeholder="Password"
                            value={secPassword}
                            onChange={(e) => setSecPassword(e.target.value)}
                        />

                        <i
                            className={`bi ${showSecPassword ? 'bi-eye-slash' : 'bi-eye'}`}
                            onClick={togglePasswordVisibilitySec}
                            style={{ position: 'absolute', right: '10px', top: '19px', cursor: 'pointer' }}
                        />

                    </FloatingLabel>

                    </div>

                    <div className='check-box-container    d-flex align-items-center justify-content-center mt-3'>

                    <Form.Check aria-label="option 1" id="agreements-checkbox" className='me-2'/>
                    <label htmlFor='agreements-checkbox'>I agree all statements in <span><Link className='text-decoration-none'>Terms of service</Link></span></label>

                    </div>

                    <RegisterBtn/>
    
                 </div>

                 <div className='col-lg-5 register-img d-flex justify-content-center'>
                    <img  className="col-lg-7" src={img}/>
                 </div>

               

            </div>
            <Footer img={sofa}/>
        </>
    )
}

export default Register
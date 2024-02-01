import { Link, useLocation } from "react-router-dom"


const Footer = ({img}) => {

    const location = useLocation();

 
    return (
       <>
        <div className={`footer ${location.pathname === '/register' ? 'footer-page' : ''}`}>

            <div className="d-flex sec1 ">

                <div className="footer-text col-lg-6 ">
                    <div className="d-flex align-items-center">
                        <span className="fs-4   me-2"><i class="fa-regular fa-envelope"></i></span>
                        <span className="fs-5">Subscribe to Newsletter</span>
                    </div>
                    <div className="d-flex  align-items-center">

                        <div className="form-floating me-3">
                            <input type="text" class="form-control" id="floatingInput" placeholder="Enter Your Name"/>
                            <label htmlFor="floatingInput">Enter Your Name</label>
                        </div>

                        <div className="form-floating  me-3">
                            <input type="email" class="form-control" id="floatingPassword" placeholder="Enter Your Email"/>
                            <label htmlFor="floatingPassword">Enter Your Email</label>
                        </div>

                        <div>
                            <button className="footer-btn  pt-3 pb-3"><i className="fa-solid fa-paper-plane"></i></button>
                        </div> 
                </div>
                    
                </div>

                <div className="footer-img">
                    <img className="col-lg-8" src={img}/>
                </div>

            </div>

           <div className="footer-nav pb-5">
            
            <h1>Furni<span className="footer-dot">.</span></h1>

            <div className=" d-flex">
                
                <div className="col-lg-4">
                    <div>
                        <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant</p>
                    </div>
                    <div className="d-flex col-lg-8 ">
                        <Link className="me-3 text-black fs-4"><i class="fa-brands fa-facebook"></i></Link>
                        <Link className="me-3 text-black fs-4"><i class="fa-brands fa-twitter"></i></Link>
                        <Link className="me-3 text-black fs-4"><i class="fa-brands fa-instagram"></i></Link>
                        <Link className="me-3 text-black fs-4"><i class="fa-brands fa-linkedin"></i></Link>
                    </div>
                </div>

                <div className="nav-link-container  d-flex col justify-content-around">

                    <div className="col-lg-1 d-flex flex-column">
                        <Link className="text-black text-decoration-none">About us</Link>
                        <Link className="text-black text-decoration-none mt-1">Services</Link>
                        <Link className="text-black text-decoration-none mt-1">Blog</Link>
                        <Link className="text-black text-decoration-none mt-1">Contact us</Link>
                    </div>

                    <div className="col-lg-1  d-flex flex-column"> 
                        <Link className="text-black text-decoration-none">Support</Link>
                        <Link className="text-black text-decoration-none mt-1">Knowledege Base</Link>
                        <Link className="text-black text-decoration-none mt-1">Live chat</Link>
                    </div>

                    <div className="col-lg-1   d-flex flex-column">
                        <Link className="text-black text-decoration-none">Our team</Link>
                        <Link className="text-black text-decoration-none mt-1">Privacy Policy</Link>
                        <Link className="text-black text-decoration-none mt-1">Leadership</Link>
                        <Link className="text-black text-decoration-none mt-1">Jobs</Link>
                    </div>

                    <div className="col-lg-2   d-flex flex-column">
                        <Link className="text-black text-decoration-none">Nordic Chair</Link>
                        <Link className="text-black text-decoration-none mt-1">Kruzo Aero</Link>
                        <Link className="text-black text-decoration-none mt-1">Aergonomic Chair</Link>
                    </div>

                </div>



            </div>
            
           </div>

        </div> 
       </>
    )
}

export default Footer
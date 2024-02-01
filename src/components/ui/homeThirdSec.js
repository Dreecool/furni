import whyChooseUsImg from '../images/why-choose-us-img.jpg'

const HomeThirdSec = () => {
    return (
        <>
            <div className="home-third-container d-flex container-fluid justify-content-around pb-5">

                <div className="why-choose-text  d-flex flex-column  col-lg-5">

                     <h1 className=''>Why Choose Us</h1>

                    <p> Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
                    </p>

                    <div className="d-flex flex-wrap pt-5">

                        <div className="col-lg-6 pt-4">
                         <p className='fs-3'><i class="fa-solid fa-van-shuttle"></i></p> 
                         <p>Fast & Free Shipping</p>
                         <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                        </div>

                        <div className="col-lg-6 pt-4">
                        <p className='fs-3'><i class="fa-solid fa-bag-shopping"></i></p> 
                        <p>Easy to Shop</p>
                         <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                        </div>

                        <div className="col-lg-6 pt-4">
                        <p className='fs-3'><i class="fa-solid fa-phone"></i></p> 
                         <p>24/7 Support</p>
                         <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                        </div>

                        <div className="col-lg-6 pt-4">
                        <p className='fs-3'><i class="fa-solid fa-arrows-rotate"></i></p> 
                         <p>Hassle Free Returns</p>
                         <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                        </div>
                        
                    </div>
                
                </div>

                <div className="d-flex col justify-content-center">

                    <img className='why-choose-img' src={whyChooseUsImg}/>

                </div>

            </div>
        </>
    )
}

export default HomeThirdSec
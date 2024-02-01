import img1 from '../images/img-grid-1.jpg'
import img2 from '../images/img-grid-2.jpg'
import img3 from '../images/img-grid-3.jpg'


const HomeFourthSec = () => {
    return (
        <>
            <div className='home-fourth-container d-flex pt-5'>

                <div className='img d-flex flex-wrap col-lg-6'>

                    <div className='col-lg-7'>
                        <img className='fourth-img1 col-lg-12'src={img1}/>
                    </div>

                    <div className='col-lg-4 ms-3'>  
                        <img  className='fourth-img2  col-lg-12' src={img2}/>
                    </div>

                    <div className='col-lg-6 fourth-img3'>  
                        <img  className='fourth-img2  col-lg-12' src={img3}/>
                    </div>

                    

                </div>

                <div className='text-container'>
                    
                    <h1>We Help You Make Modern Interior Design</h1>

                    <div className='pt-4'>
                        <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada</p>
                    </div>

                    <div className='d-flex flex-wrap pt-4'>

                        <div className='col-lg-6 d-flex'>
                            <span className='me-2'><i class="fa-regular fa-circle"></i> </span>
                            <p>Donec vitae odio quis nisl dapibus malesuada</p>
                        </div>

                        <div className='col-lg-6 d-flex'>
                            <span className='me-2'><i class="fa-regular fa-circle"></i> </span>
                            <p>Donec vitae odio quis nisl dapibus malesuada</p>
                        </div>

                        <div className='col-lg-6 d-flex'>
                            <span className='me-2'><i class="fa-regular fa-circle"></i> </span>
                            <p>Donec vitae odio quis nisl dapibus malesuada</p>
                        </div>

                        <div className='col-lg-6 d-flex'>
                            <span className='me-2'><i class="fa-regular fa-circle"></i> </span>
                            <p>Donec vitae odio quis nisl dapibus malesuada</p>
                        </div>

                      
                        <button className="explrBtn-homeSec col-lg-3 pt-3 pb-3 mt-4">Explore</button>

                    </div>
                    
                </div>

            </div>
        </>
    )
}

export default HomeFourthSec
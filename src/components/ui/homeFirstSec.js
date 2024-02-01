import couch from '../images/couch.png'

const HomeTitle = () => {

    return (
        <>  
        <div className='d-flex align-items-center justify-content-around'>

            <div className='home-title col-lg-4 p-5'>

                <div>
                 <h1>Modern Interior Design Studio</h1>
                </div>

                <div>
                    <p className='furni-home-text'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p> 
                </div>
                <div>
                    <button className='shopBtn me-3 pt-3 pb-3 ps-5 pe-5'>Shop Now</button> 
                    <button className='exploreBtn pt-3 pb-3 ps-5 pe-5'>Explore</button>
                </div>
          
            </div>
            <div >
                <img src={couch}/>
            </div>

        </div>
        </>
    )
}

export default HomeTitle
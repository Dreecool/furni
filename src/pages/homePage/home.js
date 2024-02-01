import HomeTitle from "../../components/ui/homeFirstSec"
import HomeSecond from "../../components/ui/homeSecondSec"
import HomeThirdSec from "../../components/ui/homeThirdSec"
import HomeFourthSec from "../../components/ui/homeFourthSec"
import Footer from '../../components/ui/footer/footer'

//image props
import sofa from '../../components/images/sofa.png'

const Home = () => {


    return (
        <>
            <div className="home-container">
                <HomeTitle/>
                <HomeSecond/>
                <HomeThirdSec/>
                <HomeFourthSec/>
                <Footer img={sofa}/>
            </div>
        </>
    )

}

export default Home
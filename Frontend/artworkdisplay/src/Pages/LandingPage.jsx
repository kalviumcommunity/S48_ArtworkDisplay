import './LandingPage.css';
import Navbar from '../Components/Navbar';
import Subnav from '../Components/SubNav';
import Footer from '../Components/Footer';
import Photoslide from '../Components/Photoslide';
import RandomMainImg from '../Components/RandomMainImg'

export default function Landingpage(){
    return (
        <>
            <Navbar />
            <Subnav />
            <div className='container'>
                <div id='textContainer'>
                    <h1>Art Works Display</h1>
                    <p>Welcome to our captivating realm where the allure of Indian artistry awaits your discovery. Explore, engage, and share as we invite you to like, comment, and spread the beauty of these timeless works.  <br/> 
                    Feel free to suggest the finest artworks you've encountered, enriching our collection with your unique perspectives and insights into India's rich artistic tapestry.</p>
                </div>
            </div>
            <Photoslide />
            <RandomMainImg />
            <Footer />
        </>
    )
}
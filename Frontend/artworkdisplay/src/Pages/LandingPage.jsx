import './LandingPage.css';
import Navbar from '../Components/Navbar';
import Subnav from '../Components/SubNav';

export default function Landingpage(){
    return (
        <>
        <Navbar />
        <Subnav />
        <div className='container'>
            <p>Hellow World</p>
        </div>
        </>
      )
}
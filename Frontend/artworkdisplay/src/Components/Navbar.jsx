import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar(){
    return (
        <>
        <nav id='navbar'>
          <Link to="/" className='navElemnts'>Logo</Link>
          <a href="#details" className='navElemnts'>About</a>
          <a href="#contact" className='navElemnts'>Contact</a>
          <Link to="/feedback" className='navElemnts'>Feedback</Link>
          <Link to="/signin" className='navElemnts'>SignIn</Link>
          <Link to="/signup" className='navElemnts'>SignUp</Link>
        </nav>
        </>
      )
}
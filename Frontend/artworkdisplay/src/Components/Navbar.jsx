import './Navbar.css';

export default function Landingpage(){
    return (
        <>
        <nav id='navbar'>
                <a className='navElemnts' href="#">Logo</a>
                <a className='navElemnts' href="/about">About</a>
                <a className='navElemnts' href="/contacts">Contact</a>
                <a className='navElemnts' href="/feedback">Feedback</a>
                <a className='navElemnts' href="/register">Register!</a>
        </nav>
        </>
      )
}
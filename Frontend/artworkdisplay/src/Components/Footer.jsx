import './Footer.css'

export default function Footer(){
    return(
        <>
        <div className="footerContainer">
            <div className="profile">
                <div id='image'>
                    <img src="https://avatars.githubusercontent.com/u/93367272?v=4" alt="profileImg" />
                </div>
                <div id='details'>
                    <h3>Arthi</h3> <br/>
                    <p>Technical Mentor at Kalvium <br/> <br/>
                    Passionate about painting, drwing and so..<br/> <br/></p>
                </div>
            </div>
            <div className="contact">
                <ul>
                    <li><a href="">Github</a></li>
                    <li><a href="">Linkedin</a></li>
                    <li><a href="">Instagram</a></li>
                    <li><a href="">Email</a></li>
                </ul>
            </div>
        </div>
        </>
    )
}
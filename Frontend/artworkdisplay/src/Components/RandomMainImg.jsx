import './RandomMainImg.css'

export default function RandomMainImg(){
    return(
        <>
            <div id='mainCtnr'>
                <div className="maindivtab">
                    <div className="randomIImage">
                        <img src="" alt="random image" />
                    </div>
                    <div className="imgInfo">
                        <div id="info">
                            <h2 id="artist">Artist</h2><br />
                            <h3 id='artwork'>Artwork</h3><br />
                            <p id="discription">Discription</p><br />
                            <p id='date&year'>date and year of the artwork</p><br />
                        </div>
                        <div id="userInteractionButtons">
                            <button id='likebtn'>Like</button>
                            <button id='sharebtn'>Share</button>
                            <button id='commentbtn'>Comment</button>
                            <button id='savebtn'>Save</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id='knowMore'>
                <button id='knowMorebtn'>Explore More!</button>
            </div>
        </>
    )
}
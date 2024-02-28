import React from 'react';
import './ArtWorksPage.css';
import Subnav from '../Components/SubNav';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ArtWorksPage(){
    const [artworks, setArtworks] = useState([])
    useEffect(()=>{
      axios.get('http://localhost:3001/getArtworks')
      .then(artworks => setArtworks(artworks.data))
      .catch(err => console.log(err))
    }, [])
    return(
        <>
        <Navbar />
        <Subnav />
        <div>
            {
                artworks && artworks.map((artwork, id) => (
                    <div className='contentDisplay' key={id}>
                        <h2>Artist: {artwork.artist}</h2>
                        <h2>Artwork: {artwork.artwork}</h2>
                        <p>Description: {artwork.description}</p>
                    </div>
                ))
            }
        </div>
        <Footer />
        </>
    )
}

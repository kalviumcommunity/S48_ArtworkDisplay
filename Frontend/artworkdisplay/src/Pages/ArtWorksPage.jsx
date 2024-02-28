import React from 'react';
import './ArtWorksPage.css';
import Subnav from '../Components/SubNav';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

export default function ArtWorksPage(props){
    const { artworks } = props;
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

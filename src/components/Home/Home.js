import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div>
            <h1 className='h1-title-style'>Guiter review !!!</h1>
            <div className="container">
                <div className="container-info">
                    <h2>Your next Guiter</h2>
                    <h2 className='h2-style'>Your Best Guiter</h2>
                    <p>The Epiphone J200 EC Studio pays homage to its Gibson counterpart, with stunning vintage correct stylings. The moustache bridge, decorative tortoiseshell-style pickguard and pearloid crown inlays add a level of class to this instrument and we must say, it sounds as good as it looks, as well. The sound is balanced rather than boomy, giving strummed chords the fullness that made the J-200's reputation. Expect articulate highs and a warm foundation in the bottom end. </p>
                </div>
                <div className="">
                    <img src="https://m.media-amazon.com/images/I/71jQsSC3ovL._AC_SX679_.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;
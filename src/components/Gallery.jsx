
import { useState } from 'react';
import '../styles/gallery.css';
import { videoList, images} from '../assets/images.js';
import ShowAlert from './ShowAlert.jsx';
import icons from '../assets/icons.js';


const Gallery = () => {

    const [isVisible, setIsVisible] = useState(false);

    const handleToggle = () => {
        setIsVisible(prev => !prev);
    };

    return (
        <section className="gallery-section" id="gallery">
            <div className="gallery__head-text">
                <h3>Video</h3>
                <span>See all</span>
            </div>

            <div className="gallery">

                {videoList.map((video, index) => (
                    <div className="gallery-item" key={index} onClick={handleToggle}>
                        <img
                            src={video.image}
                            alt={video.title}
                        />
                        <div className="item__text-area">
                            <span className="item-heading">
                                {video.title}
                            </span>

                            <p className="season-description">
                                Season {video.season} ({video.episodes})
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Video Container Section */}
            {isVisible && (
                <div className="video-container">
                    {/* List All the videos from my drive */}
                    <h2>Anime Title</h2>
                    <img src={icons.close} alt="close" onClick={() => setIsVisible(false)}/>

                    <div className="episode-container">

                        <div className="episode">
                            <p>Episode Number - Anime Title</p>
                        </div>
                        <hr />
                        <div className="episode">
                            <p>Episode Number - Anime Title</p>
                        </div>
                        <hr />
                        <div className="episode">
                            <p>Episode Number - Anime Title</p>
                        </div>
                        <hr />
                        <div className="episode">
                            <p>Episode Number - Anime Title</p>
                        </div>
                        <hr />
                        <div className="episode">
                            <p>Episode Number - Anime Title</p>
                        </div>
                        <hr />
                        <div className="episode">
                            <p>Episode Number - Anime Title</p>
                        </div>
                        <hr />
                        <div className="episode">
                            <p>Episode Number - Anime Title</p>
                        </div>
                        <hr />
                        <div className="episode">
                            <p>Episode Number - Anime Title</p>
                        </div>
                        <hr />
                        <div className="episode">
                            <p>Episode Number - Anime Title</p>
                        </div>
                        <hr />
                        <div className="episode">
                            <p>Episode Number - Anime Title</p>
                        </div>
                        <hr />
                        
                    </div>
                </div>
            )}

        </section>
    );
};

export default Gallery;

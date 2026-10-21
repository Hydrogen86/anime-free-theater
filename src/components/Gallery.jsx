
import React from 'react';
import '../styles/gallery.css';
import { videoList, images} from '../assets/images.js';
import ShowAlert from './ShowAlert.jsx';


const Gallery = () => {

    const handleClick = () => {
        ShowAlert(
            "Update in progress",
            "This video are not been updated yet",
            "warning"
        )
    }

    return (
        <section className="gallery-section" id="gallery">
            <div className="gallery__head-text">
                <h3>Video</h3>
                <span>See all</span>
            </div>

            <div className="gallery">

                {videoList.map((video, index) => (
                    <div className="gallery-item" key={index} onClick={handleClick} data-set ={video.video-id}>
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

            <div className="video-container">
                {/* List All the videos from my drive */}
                <h2>Anime Title</h2>

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

        </section>
    );
};

export default Gallery;

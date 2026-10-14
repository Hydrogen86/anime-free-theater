
import React from 'react';
import '../styles/gallery.css';
import { videos, images} from '../assets/images.js';

const Gallery = () => {
    return (
        <section className="gallery-section" id="gallery">
            <div className="gallery__head-text">
                <h3>Video</h3>
                <span>See all</span>
            </div>

            <div className="gallery">

                {videos.map((video, index) => (
                    <div className="gallery-item" key={index}>
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

        </section>
    );
};

export default Gallery;

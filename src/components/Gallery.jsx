
import React from 'react';
import '../styles/gallery.css';
import { videos } from '../assets/images.js';

const Gallery = () => {
    return (
        <section className="gallery" id="gallery">

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

        </section>
    );
};

export default Gallery;

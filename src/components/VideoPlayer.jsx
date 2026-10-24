import React from 'react'
import '../styles/video-player.css'
import icons from '../assets/icons.js';


function VideoPlayer({ videoUrl, title, onClose }) {
    
    if (!videoUrl) {
        return (
        <div className="video-player__empty">
            <p>No video available for this episode.</p>
        </div>
        );
    }

    return (
        <div className="video-player">

            <h4 className="video-player__title">{title}</h4>

            <div className="video-player__screen">
                <button
                    className="video-close"
                    onClick={onClose}
                    aria-label="Close video"
                >
                    <img src={icons.backIcon} alt="back-icon" />
                </button>

                <video
                    src={videoUrl}  
                    controls
                    playsInline
                    preload="metadata"
                />
            </div>
        </div>
    )
}

export default VideoPlayer

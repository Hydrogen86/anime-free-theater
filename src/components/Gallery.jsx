
import { useState, useEffect } from 'react'
import '../styles/gallery.css'
import { videoList} from '../assets/images.js'
import animeEpisodes from '../assets/videos.js'
import ShowAlert from './ShowAlert.jsx'
import icons from '../assets/icons.js'


const Gallery = () => {

    const [isVisible, setIsVisible] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [videoId, setVideoId] = useState('')
    const [animeTitle, setAnimeTitle] = useState('')

    const handleOpen = (id, title) => {
        setIsVisible(true)
        setIsOpen(true)
        setVideoId(id)
        setAnimeTitle(title)
    }

    const handleClose = () => {
        setIsVisible(false)
        setIsOpen(false)
        setVideoId('')
    }

    useEffect(() => {
        if (isOpen && isVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = ''
        }

        return () => {
            document.body.style.overflow = ''
        };
    }, [isOpen, isVisible])


    return (
        <section className="gallery-section" id="gallery">
            <div className="gallery__head-text">
                <h3>Video</h3>
                <span>See all</span>
            </div>

            <div className="gallery">

                {videoList.map((video, index) => (
                    <div className="gallery-item" key={index} onClick={() => handleOpen(video.videoId, video.title)}>
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
            {isVisible && ( <div className="overlay"></div> )}
            { isVisible && isOpen && (

                <div className="video-container">
                    
                    <h2>{animeTitle}</h2>
                    <img src={icons.close} alt="close" onClick={handleClose}/>

  
                    {Object.entries(animeEpisodes).filter(([animeName]) => animeName === videoId)
                    .map(([animeName, anime]) => (
                        <div className="episode-container">
                            {anime.episodes.map((episode) => (
                                <div className="episode">
                                    <p>{episode.title} - {anime.title}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                

                </div>
            )}

        </section>
    );
};

export default Gallery;


import { useState, useEffect, useRef } from 'react'
import '../styles/gallery.css'
import { videoList, images} from '../assets/images.js'
import animeEpisodes from '../assets/videos.js'
import ShowAlert from './ShowAlert.jsx'
import icons from '../assets/icons.js'
import VideoPlayer from './VideoPlayer.jsx'


const Gallery = () => {

    const [isVisible, setIsVisible] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [videoId, setVideoId] = useState('')
    const [animeTitle, setAnimeTitle] = useState('')
    const [selectedEpisode, setSelectedEpisode] = useState(null)
    const [episodeOnStream, setEpisodeOnStream] = useState(false)   
    const [currentImage, setCurrentImage] = useState(images.miniGojo)

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
        setEpisodeOnStream(false)
        setSelectedEpisode(null);
    }

    const handleCloseVideo = () => {
        setSelectedEpisode(null);
        setEpisodeOnStream(false);
    };

    const onStream = (episode) => {
        setSelectedEpisode(episode)
        setEpisodeOnStream(true)
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

    const searchAnime = Object.hasOwn(animeEpisodes, videoId)
    
    const timeRef = useRef(null)
    const handleChangeImage = () => {
        setCurrentImage(images.miniGojoTwo)

        clearTimeout(timeRef.current)

        timeRef.current = setTimeout(() => {
            setCurrentImage(images.miniGojo)
        }, 3000)
    }

    useEffect (() => {
        return () => clearTimeout(timeRef.current)
    }, [])

    const handleAlert = () => {
        ShowAlert(
            "Coming Soon", 
            "The developer still on progress be patient Anime Fam.",
            "question"
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
                    <img src={icons.close} className='close-video__container' alt="close" onClick={handleClose}/>
                    
                    {searchAnime ? (Object.entries(animeEpisodes).filter(([animeName]) => animeName === videoId)
                    .map(([animeName, anime]) => (

                        !episodeOnStream && 
                        (<div className="episode-container" key={animeName}>

                            {anime.episodes.map((episode) => (
                                <div 
                                    className="episode"  
                                    onClick={() => onStream(episode)}
                                    key={episode.id}
                                >
                                    <p>{episode.title} - {anime.title}</p>
                                </div>
                            ))}

                        </div>)

                    ))) : (

                       <div className="episode-container no-data">

                            <div className="text-area">
                                    <span className='bold-txt'>SORRY</span>
                                    <div className="small-txt">
                                        <span>The Developer</span>
                                        <span>is too lazy</span>
                                        <span>to upload</span>
                                    </div>
                            </div>
                            <img src={currentImage} alt="minigojo" onClick={handleChangeImage}/>

                        </div> 
                    )}
                    
                    {selectedEpisode && (
                        <VideoPlayer
                            videoUrl={selectedEpisode.driveId.replace(
                                /\/view(\?.*)?$/,
                                "/preview"
                                )}
                            title={selectedEpisode.title}
                            onClose={handleCloseVideo}
                        />
                    )}

                </div>
            )}



        </section>
    );
};

export default Gallery;

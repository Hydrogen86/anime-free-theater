import React from 'react'
import '../styles/gallery.css'


//Images
import bleach from '../assets/images/bleach.jpg'
import haikyuu2 from '../assets/images/haikyuu 2.jpg'
import haikyuu from '../assets/images/haikyuu.jpg'
import acientMagnus from '../assets/images/acient-magnus-bride.jpg'
import onePiece from '../assets/images/one-piece.jpg'
import onePunchMan from '../assets/images/one-punch-man.jpg'


const Gallery = () => {
  return (
    <div className='gallery'>
      <div className="gallery-item">
        <img src={haikyuu} alt="item-1" />

        <div className="item__text-area">
            <span className='item-heading'>Haikyu</span>
            <p className='season-description'>Season 1 (24 Episodes)</p>
        </div>
      </div>

      <div className="gallery-item">
        <img src={haikyuu2} alt="item-1" />

        <div className="item__text-area">
            <span className='item-heading'>Haikyu</span>
            <p className='season-description'>Season 2 (24 Episodes)</p>
        </div>
      </div>

      <div className="gallery-item">
        <img src={onePunchMan} alt="item-1" />

        <div className="item__text-area">
            <span className='item-heading'>One Punch Man</span>
            <p className='season-description'>Season 1 (12 Episodes)</p>
        </div>
      </div>

      <div className="gallery-item">
        <img src={onePiece} alt="item-1" />

        <div className="item__text-area">
            <span className='item-heading'>One Piece</span>
            <p className='season-description'>Season 1 (1200 Episodes)</p>
        </div>
      </div>

      <div className="gallery-item">
        <img src={acientMagnus} alt="item-1" />

        <div className="item__text-area">
            <span className='item-heading'>The Acient Magnus Bride</span>
            <p className='season-description'>Season 1 (12 Episodes)</p>
        </div>
      </div>

    </div>
  )
}

export default Gallery

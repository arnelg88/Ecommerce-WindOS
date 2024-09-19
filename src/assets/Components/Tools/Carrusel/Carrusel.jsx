import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import './Carrucel.css'

export const EmblaCarousel = () =>{
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

  return (
    <div className="embla center" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <img className='img_banner' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/2560px-Spotify_logo_with_text.svg.png" alt="Banner_Spotify" />
          </div>
        <div className="embla__slide">
          <img className='img_banner' src="https://cdn.pixabay.com/photo/2021/11/11/12/41/facebook-6786210_960_720.png" alt="Faceboo_Banner" />
        </div>
        <div className="embla__slide">
          <img className='img_banner' src="https://arkonestudios.com/wp-content/uploads/2020/04/netflix1-e1589571386735.png" alt="Banner_Netflix" />
        </div>
      </div>
    </div>
  )
}

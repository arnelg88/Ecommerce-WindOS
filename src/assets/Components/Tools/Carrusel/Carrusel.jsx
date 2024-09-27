import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import './Carrucel.css'

export const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

  const banners = [
    "src/assets/Components/Source/img/banner1.jpg",
    "src/assets/Components/Source/img/banner2.jpg",
    "src/assets/Components/Source/img/banner3.jpg",
  ]
  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {banners.map((src, index) => (
          <div className="embla__slide" key={index}>
            <img className='img_banner' src={src} alt={`Banner_${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

'use client'

import 'swiper/css'
import { Autoplay, Keyboard } from 'swiper/modules'
import 'swiper/css/autoplay'
import { Swiper, SwiperSlide } from 'swiper/react'

import type { StaticImageData } from 'next/image'
import Image from 'next/image'

import Slide0 from '@/assets/jne/slide0.jpg'
import Slide1 from '@/assets/jne/slide1.png'
import Slide2 from '@/assets/jne/slide2.png'
import Slide3 from '@/assets/jne/slide3.png'
import Slide4 from '@/assets/jne/slide4.jpg'
import Slide5 from '@/assets/jne/slide5.jpg'
import Slide6 from '@/assets/jne/slide6.png'
import Slide7 from '@/assets/jne/slide7.png'

import type { FC } from 'react'

const slideImages: StaticImageData[] = [
  Slide0,
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7
]

const Slider: FC = () => {
  const renderSlideImages = () =>
    slideImages.map((slideImage, index) => (
      <SwiperSlide key={index}>
        <Image src={slideImage} alt="Imagem" className="max-h-screen w-full" />
      </SwiperSlide>
    ))

  return (
    <Swiper
      className="h-full w-full"
      modules={[Autoplay, Keyboard]}
      slidesPerView={1}
      autoplay={{
        delay: 10 * 1000, // 10 seconds
        disableOnInteraction: false
      }}
      keyboard
    >
      {renderSlideImages()}
    </Swiper>
  )
}

export default Slider

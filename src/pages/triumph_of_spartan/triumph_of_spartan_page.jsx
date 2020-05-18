import React, { useState, useEffect } from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import TosCard from '../../components/tos-card/tos-card.component';
import Dokumentasi from '../../components/tos-doc/tos-doc.component';
import './tos-page.styles.scss';

import Swiper from 'react-id-swiper';
import 'swiper/swiper.scss';

import imgParade from '../../assets/images/Parade.JPG';
import imgOlim from '../../assets/images/Olim UI.jpg';
import imgUIAW from '../../assets/images/UI Art War.jpg';
import imgOIM from '../../assets/images/OIM UI.jpg';

import dok1 from '../../assets/images/Dokumentasi 1JPG.jpg';
import dok2 from '../../assets/images/Dokumentasi 2.JPG';
import dok3 from '../../assets/images/Dokumentasi 3JPG.jpg';
import dok4 from '../../assets/images/Dokumentasi 4JPG.jpg';

import tos1 from '../../assets/images/tos1.jpg';
import tos2 from '../../assets/images/tos-resize2.png';

import TosCarousel from '../../components/tos-carousel/tos-carousel.component';

const tosEvent = [
  {
    imgUrl: imgParade,
    title: 'Parade',
    desc: 'Pembukaan event Pesta Rakyat UI (OLIM, OIM, UI Art War)'
  },
  {
    imgUrl: imgOlim,
    title: 'OLIM UI',
    desc: 'Kompetisi Mahasiswa UI di bidang Olahraga'
  },
  {
    imgUrl: imgUIAW,
    title: 'UI Art War',
    desc: 'Kompetisi mahasiswa UI di bidang Seni Budaya'
  },
  {
    imgUrl: imgOIM,
    title: 'OIM UI',
    desc: 'Kompetisi mahasiswa UI di bidang Keilmuan'
  }
];

const dokum = [
  {
    id: 1,
    imgUrl: dok1
  },
  {
    id: 2,
    imgUrl: dok2
  },
  {
    id: 3,
    imgUrl: dok3
  },
  {
    id: 4,
    imgUrl: dok4
  }
];

const tosImg = [
  {
    imgUrl: tos1
  },
  {
    imgUrl: tos2
  }
];

const Triumph = () => {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setIndex] = useState(2);

  useEffect(() => {
    if (swiper !== null) {
      setSwiper(swiper);
    }
  }, [swiper]);

  useEffect(() => {
    if (swiper !== null) {
      swiper.on('slideChange', () => {
        setIndex(swiper.activeIndex);
      });
    }
  });

  const params = {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    initialSlide: 0,
    navigation: {
      el: '.swiper-navigation',
      clickable: true
    },
    updateOnWindowResize: true
  };

  const slideNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const slidePrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  return (
    <article className="tos-page">
      <Header color="tos" />
      <main>
        <div className="tos-carousel">
          <Swiper getSwiper={setSwiper} {...params}>
            {tosImg.map(({ id, ...tosImgProps }) => (
              <div>
                <TosCarousel {...tosImgProps} active={id === activeIndex} />
              </div>
            ))}
          </Swiper>
          <div onClick={slideNext} className="arrowTos__right" />
          <div onClick={slidePrev} className="arrowTos__left" />
        </div>

        <section className="tos-event">
          <div className="tos-event__tambahan">
            <h1
              className="heading-primary text-align-center"
              style={{ color: '#fff' }}
            >
              Triumph Of Spartan
            </h1>
          </div>
          <h2
            style={{ color: 'tos', marginTop: '4rem', marginBottom: '4rem' }}
            className="heading-secondary text-align-center"
          >
            Triumph Of Spartan merupakan ruang apresiasi bagi mahasiswa dan
            kontingen Vokasi UI yang berlaga dalam OLIM UI, UI Art War, dan OIM
            UI. Triumph Of Spartans bergerak didasari oleh rasa cinta dan
            kebanggaan terhadap Vokasi UI.
          </h2>
          <div className="tos-event-card-container">
            {tosEvent.map(({ id, ...tosEventProps }) => (
              <TosCard {...tosEventProps} key={id} />
            ))}
          </div>
        </section>
        <section className="tos-doc">
          <h1
            className="heading-primary text-align-center"
            style={{ color: 'tos', marginBottom: '5rem' }}
          >
            Dokumentasi
          </h1>
          <div className="tos-doc__container">
            {dokum.map(({ id, ...dokumProps }) => (
              <Dokumentasi {...dokumProps} key={id} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </article>
  );
};

export default Triumph;

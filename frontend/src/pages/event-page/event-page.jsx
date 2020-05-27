import React, { useState, useEffect } from 'react';
import Swiper from 'react-id-swiper';
import './event-page.styles.scss';

import 'swiper/swiper.scss';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import EventCard from '../../components/event-card/event-card';

const EventPage = () => {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setIndex] = useState(2);
  const [events, setEvents] = useState([]);
  const [isFetching, setFetching] = useState(true);

  const url = 'https://api.vokasiconnect.id';

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

  useEffect(() => {
    fetch(`${url}/events`)
      .then((res) => res.json())
      .then((data) => {
        setEvents(data.data);
        setFetching(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const event = [
    {
      icon: '',
      name: 'Bina Desa'
    },
    {
      icon: '',
      name: 'Bina Desa'
    },
    {
      icon: '',
      name: 'Bina Desa'
    },
    {
      icon: '',
      name: 'Bina Desa'
    },
    {
      icon: '',
      name: 'Bina Desa'
    }
  ];

  const params = {
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      320: {
        slidesPerView: 1
      },
      480: {
        slidesPerView: 2
      },
      640: {
        slidesPerView: 3
      },
      800: {
        slidesPerView: 4
      },
      1000: {
        slidesPerView: 5
      }
    },
    slidesPerView: 5,
    spaceBetween: 50,
    centeredSlides: true,
    initialSlide: 2,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
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
    <article className="event-page">
      <Header color="yellow" />
      <main>
        <div className="event-page__container">
          <h1
            style={{ color: 'var(--color-green-1)', fontSize: '4.8rem' }}
            className="heading-primary text-align-center mb-sm"
          >
            Event Vokasi UI
          </h1>
          {isFetching ? null : (
            <div className="event-page__swiper">
              <Swiper getSwiper={setSwiper} {...params}>
                {events?.map((item, i) => {
                  return (
                    <div key={i}>
                      <EventCard {...item} active={i === activeIndex} />
                    </div>
                  );
                })}
              </Swiper>
              <div onClick={slideNext} className="arrow__right" />
              <div onClick={slidePrev} className="arrow__left" />
            </div>
          )}
        </div>
        <div className="event-page__tambahan" />
      </main>
      <Footer />
    </article>
  );
};

export default EventPage;

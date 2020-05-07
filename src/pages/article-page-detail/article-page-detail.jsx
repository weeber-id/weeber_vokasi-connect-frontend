import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

const ArticlePageDetail = () => {
  const [state, setState] = useState({
    title: '',
    author: '',
    date_created: '',
    date_modified: '',
    content: '',
    id: '',
    time_created: '',
    time_modified: ''
  });
  const [isLoading, setLoading] = useState(true);

  const { id } = useParams();
  const { title, author, date_created, content } = state;

  useEffect(() => {
    const url = 'http://35.240.223.151:8003';

    setLoading(true);
    fetch(`${url}/article?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setState(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const date = new Date(date_created).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <>
      <Header />
      <main>
        {isLoading ? (
          <>
            <div className="artikel-detail__cover artikel-detail__cover--skeleton" />
            <div className="artikel-detail">
              <div className="artikel-detail__title artikel-detail__title--skeleton text-align-center" />
              <div className="artikel-detail__text-skeleton artikel-detail__text-skeleton--author" />
              <div className="artikel-detail__content mt-sm mb-md">
                <div className="artikel-detail__text-skeleton artikel-detail__text-skeleton--1" />
                <div className="artikel-detail__text-skeleton artikel-detail__text-skeleton--2" />
                <div className="artikel-detail__text-skeleton artikel-detail__text-skeleton--3" />
                <div className="artikel-detail__text-skeleton artikel-detail__text-skeleton--2" />
                <div className="artikel-detail__text-skeleton artikel-detail__text-skeleton--1" />
                <div className="artikel-detail__text-skeleton artikel-detail__text-skeleton--2" />
              </div>
              <div className="artikel-detail__img-skeleton mb-md" />
              <div className="artikel-detail__content mt-sm">
                <div className="artikel-detail__text-skeleton artikel-detail__text-skeleton--1" />
                <div className="artikel-detail__text-skeleton artikel-detail__text-skeleton--3" />
                <div className="artikel-detail__text-skeleton artikel-detail__text-skeleton--1" />
                <div className="artikel-detail__text-skeleton artikel-detail__text-skeleton--2" />
                <div className="artikel-detail__text-skeleton artikel-detail__text-skeleton--1" />
                <div className="artikel-detail__text-skeleton artikel-detail__text-skeleton--3" />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="artikel-detail__cover" />
            <div className="artikel-detail">
              <h1 className="artikel-detail__title text-align-center mb-xs">
                {title}
              </h1>
              <h4
                style={{ fontSize: '2rem' }}
                className="text text-align-center"
              >
                {author}
              </h4>
              <h4 className="text text-align-center mb-sm">{date}</h4>
              <div
                dangerouslySetInnerHTML={{ __html: content }}
                className="artikel-detail__content"
              />
            </div>
          </>
        )}
      </main>
      <Footer />
    </>
  );
};

export default ArticlePageDetail;

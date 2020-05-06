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

  const { id } = useParams();
  const { title, author, date_created, content } = state;

  useEffect(() => {
    const url = 'http://35.240.223.151:8003';

    fetch(`${url}/article?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setState(data.data);
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
      <div className="artikel-detail__cover" />
      <main className="artikel-detail">
        <h1 className="artikel-detail__title text-align-center mb-xs">
          {title}
        </h1>
        <h4 style={{ fontSize: '2rem' }} className="text text-align-center">
          {author}
        </h4>
        <h4 className="text text-align-center mb-sm">{date}</h4>
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className="artikel-detail__content"
        />
      </main>
      <Footer />
    </>
  );
};

export default ArticlePageDetail;

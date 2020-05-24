import React, { useState, useEffect } from 'react';

import { Link, useHistory } from 'react-router-dom';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import ArtikelCard from '../../components/artikel-card/artikel-card';

const ArticlePage = () => {
  const [articles, setArticles] = useState([{ id: '' }]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  const history = useHistory();

  useEffect(() => {
    const url = 'http://35.240.223.151:8003';

    setLoading(true);
    fetch(`${url}/articles`)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.data);
        // setTimeout(() => {
        setLoading(false);
        setError(false);
        // }, 1000);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        window.location.reload();
      });

    return () => {
      setArticles([{ id: '' }]);
      setLoading(false);
    };
  }, []);

  return (
    <>
      <Header />
      <main className="article">
        <h1
          style={{ color: 'var(--color-light-blue-1)' }}
          className="heading-primary text-align-center mb-md"
        >
          ARTIKEL
        </h1>

        <section className="article__container">
          {isLoading ? (
            <>
              <ArtikelCard type="skeleton" />
              <ArtikelCard type="skeleton" />
              <ArtikelCard type="skeleton" />
              <ArtikelCard type="skeleton" />
              <ArtikelCard type="skeleton" />
              <ArtikelCard type="skeleton" />
              <ArtikelCard type="skeleton" />
              <ArtikelCard type="skeleton" />
              <ArtikelCard type="skeleton" />
              <ArtikelCard type="skeleton" />
              <ArtikelCard type="skeleton" />
            </>
          ) : isError ? (
            <span>Oops Error, Please Reload or Comeback again later!</span>
          ) : (
            articles?.map((article) => (
              <ArtikelCard
                onClick={() => {
                  history.push(`/artikel/${article.id}`);
                }}
                key={article.id}
                {...article}
              />
            ))
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ArticlePage;

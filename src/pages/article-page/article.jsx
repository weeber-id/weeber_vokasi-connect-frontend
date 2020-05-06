import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import ArtikelCard from '../../components/artikel-card/artikel-card';

const ArticlePage = () => {
  const [articles, setArticles] = useState(['']);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const url = 'http://35.240.223.151:8003';

    setLoading(true);
    fetch(`${url}/articles`)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.data);
        // setTimeout(() => {
        setLoading(false);
        // }, 1000);
      })
      .then((err) => {
        console.log(err);
      });

    return () => {
      setArticles([]);
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
          ) : (
            articles.map((article) => (
              <>
                <Link
                  style={{ textDecoration: 'none', color: 'inherit' }}
                  to={`/artikel/${article.id}`}
                >
                  <ArtikelCard key={article.id} {...article} />
                </Link>
              </>
            ))
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ArticlePage;

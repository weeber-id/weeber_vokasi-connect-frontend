import React from 'react';

const ArtikelCard = ({
  title = 'judulnya ini cukup panjang tambah panjang 2020',
  date_created = new Date(),
  content = '',
  type = '',
  onClick
}) => {
  let slicedContent = content;

  if (content.length > 300) {
    slicedContent = slicedContent.slice(0, 299) + '...';
  }

  const date = new Date(date_created);

  if (type === 'skeleton') {
    return (
      <div className="artikel-card">
        <div className="artikel-card__thumbnail artikel-card__thumbnail--skeleton" />
        <div className="artikel-card__preview">
          <div className="artikel-card__title artikel-card__title--skeleton-1" />
          <div className="artikel-card__title artikel-card__title--skeleton-2" />
          <div className="artikel-card__date  artikel-card__date--skeleton" />
          <div className="artikel-card__content">
            <p className="artikel-card__text-skeleton artikel-card__text-skeleton--1" />
            <p className="artikel-card__text-skeleton artikel-card__text-skeleton--2" />
            <p className="artikel-card__text-skeleton artikel-card__text-skeleton--3" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div onClick={onClick} className="artikel-card">
      <div className="artikel-card__thumbnail"></div>
      <div className="artikel-card__preview">
        <h3 className="artikel-card__title">{title}</h3>
        <h4 className="artikel-card__date">
          {date.toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          })}
        </h4>
        <p
          dangerouslySetInnerHTML={{ __html: slicedContent }}
          className="artikel-card__content"
        />
      </div>
      <h4 className="artikel-card__cta">Lihat Selengkapnya &rarr;</h4>
    </div>
  );
};

export default ArtikelCard;

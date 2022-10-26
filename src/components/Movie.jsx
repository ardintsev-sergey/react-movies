import React from 'react';

function Movie(props) {
  const {
    Title: title,
    Year: year,
    imdbID: id,
    Poster: poster,
    Type: type,
  } = props;
  return (
    <div
      id={id}
      className='card movie'
    >
      <div className='card-image waves-effect waves-block waves-light'>
        {poster === 'N/A' ? (
          <img
            className='activator'
            src={`https://via.placeholder.com/300x400?text=${title}`}
            alt={`Movie ${title} poster`}
          />
        ) : (
          <img
            className='activator'
            src={poster}
            alt={`Movie ${title} poster`}
          />
        )}
      </div>
      <div className='card-content'>
        <span className='card-title activator grey-text text-darken-4'>
          {title}
        </span>
        <p>
          {year}
          <span className='right'>{type}</span>
        </p>
      </div>
    </div>
  );
}

export { Movie };

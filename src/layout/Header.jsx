import React from 'react';

function Header() {
  return (
    <nav className='green darken-3'>
      <div className='nav-wrapper'>
        <a
          href='https://ardintsev-sergey.github.io/react-movies/'
          className='brand-logo'
        >
          React Movies
        </a>
        <ul
          id='nav-mobile'
          className='right hide-on-med-and-down'
        >
          <li>
            <a
              href='https://github.com/ardintsev-sergey/react-movies'
              target='_blank'
              rel='noreferrer'
            >
              Repo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };

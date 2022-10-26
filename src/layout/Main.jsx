import React from 'react';
import { Movies } from '../components/Movies';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';
// import { env } from '../../.env.local';

const API_KEY = process.env.REACT_APP_API_KEY;
console.log(API_KEY);

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      loading: true,
    };
  }

  async componentDidMount() {
    console.log('componentDidMount');
    try {
      const respons = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`
      );
      const data = await respons.json();
      // .then((response) => response.json())
      // .then((data) => console.log(data))
      // .then((data) => {
      this.setState({ movies: data.Search || [], loading: false });
      // })
      // .then(console.log(this.state.movies));
    } catch (err) {
      console.error(err);
      this.setState({ loading: false });
    }
  }

  searchMovies = (str, type = 'all') => {
    this.setState({ loading: true });
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
        type !== 'all' ? `&type=${type}` : ''
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ movies: data.Search || [], loading: false });
      })
      .catch((err) => {
        console.error(err);
        this.setState({ loading: false });
      });
  };

  render() {
    const { movies, loading } = this.state;
    return (
      <main className='container content'>
        <Search searchMovies={this.searchMovies} />
        {loading ? <Preloader /> : <Movies movies={movies} />}
      </main>
    );
  }
}

export { Main };

import React from "react";
import MovieList from "./MovieList";
import Test from "./test";
import Navbar from "./Navbar";
import { movies } from "./moviesData";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: movies,
      cartCount: 0,
    };
  }
  increaseStar = (movie) => {
    const { movies } = this.state;
    const movieID = movies.indexOf(movie);

    if (movies[movieID].star >= 5) {
      return;
    }
    movies[movieID].star += 0.5;
    this.setState({ movies: movies });
  };

  decreaseStars = (movie) => {
    const { movies } = this.state;
    const movieID = movies.indexOf(movie);
    if (movies[movieID].star <= 0) {
      return;
    }
    movies[movieID].star -= 0.5;
    this.setState({
      movies: movies,
    });
  };

  handleFavorite = (movie) => {
    const { movies } = this.state;
    const movieID = movies.indexOf(movie);
    movies[movieID].fav = !movies[movieID].fav;
    this.setState({ movies: movies });
  };

  handleCart = (movie) => {
    let { movies, cartCount } = this.state;
    const movieID = movies.indexOf(movie);
    movies[movieID].isInCart = !movies[movieID].isInCart;
    if (movies[movieID].isInCart) {
      cartCount += 1;
    } else {
      cartCount -= 1;
    }
    this.setState({
      movies: movies,
      cartCount: cartCount,
    });
  };

  render() {
    const { movies, cartCount } = this.state;
    return (
      <>
        <Navbar cartCount={cartCount} />
        <MovieList
          movies={movies}
          increaseStar={this.increaseStar}
          decreaseStars={this.decreaseStars}
          handleFavorite={this.handleFavorite}
          handleCart={this.handleCart}
        />
      </>
    );
  }
}

Test.defaultProps = {
  name: "User",
};

import { Component } from "react";
import { MovieCard } from "./Moviecard";

export default class MovieList extends Component {
  render() {
    const { movies, increaseStar, decreaseStars, handleFavorite, handleCart } =
      this.props;
    return (
      <>
        {movies.map((movie, index) => (
          <MovieCard
            movie={movie}
            key={index}
            increaseStar={increaseStar}
            decreaseStars={decreaseStars}
            handleFavorite={handleFavorite}
            handleCart={handleCart}
          />
        ))}
      </>
    );
  }
}

import React from "react";
import "./index.css";

/*
Alternate Way

import {Component} from "react";
export class MovieApp extend Component{}
 */

export class MovieCard extends React.Component {
  render() {
    const { title, plot, price, rating, star, fav, isInCart, poster } =
      this.props.movie;

    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img src={poster} alt={title} />
          </div>
          <div className="right">
            <div className="title">{title}</div>
            <div className="plot">{plot}</div>
            <div className="price">Rs. {price}</div>
            <div className="footer">
              <div className="rating">{rating}</div>
              <div className="star-dis">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828901.png"
                  className="str-btn"
                  alt="decrease"
                  onClick={() => {
                    this.props.decreaseStars(this.props.movie);
                  }}
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                  className="stars"
                  alt="stars"
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png"
                  className="str-btn"
                  alt="increase"
                  onClick={() => {
                    this.props.increaseStar(this.props.movie);
                  }}
                />
                <span>&nbsp;{star}</span>
              </div>

              <button
                className={fav ? "unfavourite-btn" : "favourite-btn"}
                onClick={() => {
                  this.props.handleFavorite(this.props.movie);
                }}
              >
                {fav ? "Unfavourite" : "Favourite"}
              </button>
              <button
                className={isInCart ? "remove-btn" : "cart-btn"}
                onClick={() => {
                  this.props.handleCart(this.props.movie);
                }}
              >
                {isInCart ? "Remove from Cart" : "Add to cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

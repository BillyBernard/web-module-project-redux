import React from "react";
import { useParams } from "react-router";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteFavorite } from "../actions/favoriteActions";

const FavoriteMovieList = (props) => {
  const handleFavoriteDelete = (item, index) => {
    props.deleteFavorite(item[index]);
    console.log(props.favorites);
  };
  return (
    <div className="col-xs savedContainer">
      <h5>Favorite Movies</h5>
      {props.favorites.map((movie) => {
        return (
          <div key={movie.id}>
            <Link
              className="btn btn-light savedButton"
              to={`/movies/${movie.id}`}
            >
              {movie.title}
              <span>
                <span onClick={handleFavoriteDelete} class="material-icons">
                  remove_circle
                </span>
              </span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.movieState.movies,
    favorites: state.favoriteState.favorites,
  };
};

export default connect(mapStateToProps, { deleteFavorite })(FavoriteMovieList);
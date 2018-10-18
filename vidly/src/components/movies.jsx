import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
class Movies extends Component {
  state = {
    movies: getMovies()
  };
  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  render() {
    let count = this.state.movies.length;
    if (count <= 0) return "There are no movies in the database";
    else
      return (
        <React.Fragment>
          <div>
            <table className="table">
              <thead>
                <p>We have {count} movies in the database</p>
                <tr>
                  <th>Title</th>
                  <th>Genre</th>
                  <th>Stock</th>
                  <th>Rate</th>
                </tr>
              </thead>

              <tbody>
                {this.state.movies.map(movie => (
                  <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td>
                      <button
                        onClick={() => this.handleDelete(movie)}
                        className="bg bg-warning bg-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </React.Fragment>
      );
  }
}

export default Movies;

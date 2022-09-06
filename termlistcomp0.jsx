import React from "react";

const MovieItem = ({id, name,  year, image }) => {
  return (
    <div className="tc bg-light-blue dib br4 pa3 ma2 grow">

    <img src={image} height='200'/> 
      
      <div>
        <h2>Title: {name}</h2>
        <p>Year: {year}</p>
        <p>Item_id: {id}</p>
      </div>
    </div>
  );
};


//export default Terminator;

const MovieList = ({ movies }) => {
  return (
    <div>
      {movies.map((movie) => {
        return (
          <MovieItem
            key={movie.imdbID}
            id={movie.imdbID}
            name={movie.Title}
            Year={movie.Year}
            image={movie.Poster}
/*
            key={model.id}
            id={model.id}
            name={model.name}
            serialNumber={model.phone}
            */
          />
        );
      })}
    </div>
  );
};

export default MovieList;
// 2022.04.30 19.00
import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { styled } from '@mui/material/styles';
import MovieList from "./components/termlistcomp";
import SearchBox from "./components/searchboxcomp";

import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchfield, setSearchfield] = useState("");
  const [loading, setLoading] = useState(true);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const movies_url =
    "http://www.omdbapi.com/?i=tt3896198&apikey=86fa3341&s=superman&type=movie&page=1";
  //const url1 = "https://jsonplaceholder.typicode.com/users";

  /* ------------------------------------------------------------------------------
  const getMovies = async () => {
    try {
      const res = await fetch(movies_url);
      const movies = await res.json();
      setModels(movies.Search);
    } catch (error) {
      console.error(error);
    } finally {
     setLoading(false);
    }
 }
 useEffect(() => {
   getMovies();
 }, []);
 */
  //-----------------------------------------------------------------------------------

  
  const getMovies = async () => {
    const movie_container = [];
    try {
      let page = 1;
      while (page <= 3) {
        const res = await fetch(
          `http://www.omdbapi.com/?i=tt3896198&apikey=86fa3341&s=superman&type=movie&page=${page}`
          //`http://www.omdbapi.com/?i=tt3896198&apikey=86fa3341&y=2022&page=${page}`
        );
        const moviejson = await res.json();
        moviejson.Search.forEach((movietemp) => movie_container.push(movietemp));
        page++;
      }
      setMovies(movie_container);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
    //console.log({ moviesList });
  };

  useEffect(() => {
    getMovies();
  }, []);

  /* --------------------------------------------------------------------------------------
  useEffect(() => {
    fetch(movies_url)
      .then((response) => response.json())
      .then((users) => setModels(users.Search));
  }, []);
*/
  //-----------------------------------------------------------------------------------

  const filteredMovies = movies.filter((movie) => {
    return movie.Title.toLowerCase().includes(searchfield.toLowerCase()); //model.Title
  });

  if (movies.length === 0) {
    return <h1>Betöltés folyamatban...</h1>;
  }

  const StyledMainGrid = styled(Grid, {
    name: "StyledMainGrid",
    //slot: "Wrapper"
  })({
    padding: 10,
    //display: "flex",
    alignItems: "center",
    justifyContent: "center",
    //".MuiButton-root": { color: "#FF0000" }
  });

  return (
    

    <Grid container justifyContent="center">
      <Grid container justifyContent="center">
      <h1>Terminator modellek</h1>
      </Grid>
      
      <SearchBox searchChange={onSearchChange}/>
      
      <MovieList movies={filteredMovies} />
     
      </Grid>
/*
    <Grid container alignitems="center">
      <Grid>
      <h1>Terminator modellek</h1>
      <SearchBox searchChange={onSearchChange}/>
      
      <MovieList movies={filteredMovies} />
     
      </Grid>
      </Grid>
      */
  );
}

export default App;

//<SearchBox searchChange={onSearchChange} />
//<TerminatorList models={models} />
// <MovieList movies={filteredMovies} />
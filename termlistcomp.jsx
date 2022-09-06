//2022.05.01  19.00
import React from "react";
/*import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { Container } from "@material-ui/core";*/
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
//import Button from "@mui/material/Button";
//import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { ClassNames } from "@emotion/react";


const StyledGrid = styled(Grid, {
  name: "StyledGrid",
  //slot: "Wrapper"
})({
    padding: 10,
});

const StyledCardHeader = styled(CardHeader, {
  name: "StyledCardHeader",
  //slot: "Wrapper"
})({
  title: {
    color: 'red',
    //padding: 60,
    fontSize: 300,
    //variant: 'h5',
  },
  height: 70,
});


const StyledCard = styled(Card, {
  name: "StyledCard",
  //slot: "Wrapper"
})({
  color: "ablue",
  //backgroundImage: `url("https://picsum.photos/200/300")`,
  backgroundColor: "aqua",
  margin: "auto",
  borderRadius: 10,
  //widtht: 300,
  padding: 10,
  //display: "flex",
  //alignItems: "center",
  //justifyContent: "center",
  ".MuiButton-root": { color: "#FF0000" }
});
/*
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
*/
const MovieListCard = ({ movie }) => {
  return (
    <Container>
       <StyledCard sx={{ maxWidth: 300 }}>
        <CardHeader //title={movie.Title}/> 

        title={<Typography sx={{fontSize: 15, color: 'blue',}}>{movie.Title}</Typography>}

        />
             
        <CardMedia
        component="img"
        height="100"
        //width="100"
        image={movie.Poster}
        //alt="Paella dish"
      />
       <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 7,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      </StyledCard>
    </Container>
  );
};
//const movies = [];
//{(movies || []).map((movie) => (
const MovieList = ({ movies }) => {
  //const movies = [];
  return (
    <Grid container>
        {movies.map((movie) => (
          <StyledGrid item key={movie.imdbID} xs={3}>
            <MovieListCard movie={movie} />
          </StyledGrid>
        ))}
      </Grid>
    
  );
};

export default MovieList;

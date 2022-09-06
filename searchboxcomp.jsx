import React from "react";
import { styled } from '@mui/material/styles';
import Grid from "@mui/material/Grid";

const StyledSearchbox = styled(Grid, {
  name: "StyledSearchBox",
  //slot: "Wrapper"
})({
  //padding: 10,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  //".MuiButton-root": { color: "#FF0000" }
});

const SearchBox = ({ searchChange }) => {
  return (
    <StyledSearchbox>
      <input
        type="search"
        placeholder="model keresés..."
        onChange={searchChange}
      />
    </StyledSearchbox>
  );
};

export default SearchBox;
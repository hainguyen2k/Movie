import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import axios from "axios";
import { REACT_APP_API_KEY } from "../../../constants/key.js";

function ListMovie() {
  const [listMovie, setListMovie] = useState([]);
  const getListMovie = async () => {
    try {
      const result = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${REACT_APP_API_KEY}&language=en-US&page=1`
      );
      setListMovie(result.data.results);
    } catch (err) {}
  };
  console.log(listMovie);
  useEffect(() => {
    getListMovie();
  }, []);
  return (
    <>
      <Box
        sx={{
          pl: "100px",
          pt: "100px",
          textAlign: "left",
          backgroundColor: "#000C66",
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          sx={{ fontWeight: "bold", color: "white" }}
        >
          Movie
        </Typography>
      </Box>
      <Grid
        container
        justifyContent={"center"}
        sx={{ backgroundColor: "#000C66", pt: "50px" }}
      >
        {/* {Array.from(Array(54)).map((_, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
            <MovieCard />
          </Grid>
        ))} */}
        {listMovie.length > 0 &&
          listMovie.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <MovieCard item={item} />
            </Grid>
          ))}
      </Grid>
    </>
  );
}

export default ListMovie;

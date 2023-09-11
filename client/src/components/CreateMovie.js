import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateMovie() {
  const [movie, setMovie] = useState({
    title: "",
    rating: "",
    releaseDate: "",
    poster: "",
  });

  const Navigate = useNavigate();

  const result = [];

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
    // console.log(movie);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    result.push(movie);
    setMovie({
      title: "",
      rating: "",
      releaseDate: "",
      poster: "",
    });
    // console.log("result", result);
    axios
      .post("http://localhost:5000/create", {
        Title: movie.title,
        ReleaseDate: movie.releaseDate,
        Rating: movie.rating,
        Poster: movie.poster,
      })
      .then((res) => console.log("res", res));
  };
  //   console.log("result", result);
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100%"
    >
      <form onSubmit={(e) => submitHandler(e)}>
        {/* <InputLabel htmlFor="my-input">Email address</InputLabel> */}
        <Box m={2}>
          <TextField
            id="outlined-basic"
            value={movie.title}
            name="title"
            label="Title"
            type="text"
            variant="outlined"
            onChange={(e) => changeHandler(e)}
            required
          />
        </Box>
        <Box m={2}>
          <TextField
            id="outlined-basic"
            value={movie.rating}
            name="rating"
            label="Rating"
            type="number"
            variant="outlined"
            onChange={(e) => changeHandler(e)}
            required
          />
        </Box>
        <Box m={2}>
          <TextField
            fullWidth
            id="outlined-basic"
            name="releaseDate"
            // label="ReleaseDate"
            type="date"
            value={movie.releaseDate}
            variant="outlined"
            onChange={(e) => changeHandler(e)}
            required
          />
        </Box>
        <Box m={2}>
          <TextField
            id="outlined-basic"
            value={movie.poster}
            type="url"
            name="poster"
            label="Image Url"
            variant="outlined"
            onChange={(e) => changeHandler(e)}
            required
          />
        </Box>
        <Box m={2}>
          <Button fullWidth variant="contained" type="submit">
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default CreateMovie;

import { useEffect, useState } from "react";
import Cards from "./components/Cards";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";
import CreateMovie from "./components/CreateMovie";
import { Box, Button } from "@mui/material";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/", {}).then((res) => setMovies(res));
  }, [movies]);

  return (
    <div className="App">
      <div style={{textAlign: 'center', color: 'orange'}}><h1>Movie Reviews App</h1></div>
      <Box display="flex">
        <Box margin={2}>
          <Link to="/">
            <Button variant="outlined">Get Movies</Button>
          </Link>
        </Box>
        <Box margin={2}>
          <Link to="/create">
            <Button variant="outlined">Create Movie</Button>
          </Link>
        </Box>
      </Box>
      {/* <Cards movies={movies} /> */}
      <Routes>
        <Route path="/" element={<Cards movies={movies} />}></Route>
        <Route path="/create" element={<CreateMovie />}></Route>
      </Routes>
    </div>
  );
}

export default App;

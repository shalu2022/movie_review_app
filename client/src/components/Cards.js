import * as React from "react";
import Grid from "@mui/material/Grid";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
// import HighlightedCode from "docs/src/modules/components/HighlightedCode";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import Paper from "@mui/material/Paper";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";

function Cards({ movies }) {
  const [spacing, setSpacing] = React.useState(2);
  console.log("movies", movies);

  const cardItems = [{}];

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  const jsx = `
      <Grid container spacing={${spacing}}>
      `;

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={spacing}>
          {movies?.data?.map((value) => (
            <Grid key={value} item>
              <Card sx={{ minWidth: 275 }}>
                <CardMedia component="img" height="200" image={value.Poster} />
                <CardContent>
                 
                  <Rating
                    name="simple-controlled"
                    value={value.Rating}
                
                  />
                  <Typography variant="h5" component="div">
                    {value.Title}
                  </Typography>

                  <Typography variant="body2">{value.ReleaseDate}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Cards;

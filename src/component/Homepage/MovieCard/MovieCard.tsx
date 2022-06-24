import { Star } from "@mui/icons-material";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";

interface CardMovieProps {
  item: {
    original_title: String;
    poster_path: String;
  };
}
function MovieCard(props: CardMovieProps) {
  const image = props.item.poster_path;
  const title = props.item.original_title;
  return (
    <Card
      sx={{
        minWidth: "200px",
        minHeight: "500px",
        m: "20px",
        borderRadius: "20px",
        border: 5,
      }}
    >
      <CardActions sx={{ position: "absolute", zIndex: 1 }}>
        <IconButton aria-label="star">
          <Star />
        </IconButton>
      </CardActions>

      <CardMedia
        component="img"
        width={"100%"}
        height="90%"
        image={`https://image.tmdb.org/t/p/w500${image}`}
        alt="green iguana"
        sx={{ position: "relative", zIndex: 2 }}
      />
      <CardContent>
        <Typography component="p" sx={{ fontSize: "15px", fontWeight: "bold" }}>
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default MovieCard;

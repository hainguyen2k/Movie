import { Box } from "@mui/material";

function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        height: "8rem",
        width: "100%",
        backgroundColor: "#050A30",
      }}
    >
      <Box
        sx={{
          display: "block",
          width: "100px",
          height: "100px",
          backgroundImage: "../src/assets",
        }}
      >
        {/* <img src="https://w7.pngwing.com/pngs/725/684/png-transparent-movie-time-graphic-film-cinema-logo-film-elements-cdr-food-text.png" /> */}
      </Box>
    </Box>
  );
}

export default Header;

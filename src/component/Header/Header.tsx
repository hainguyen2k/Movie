import { ArrowBackIosNew } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";

import { Link, useLocation } from "react-router-dom";

function Header() {
  const { pathname } = useLocation();
  if (pathname === "/")
    return (
      <Box
        sx={{
          display: "flex",
          height: "80px",
          width: "100%",
          backgroundColor: "#050A30",
          alignItems: "center",
          top: 0,
          position: "fixed",
          zIndex: "1",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "100px",
          }}
        >
          <img
            src="https://raw.githubusercontent.com/Isaac-alencar/moviebox/main/src/assets/logo.svg"
            alt=""
            style={{
              display: "block",
              width: "60px",
              height: "60px",
            }}
          />
        </Box>
        <Link to={pathname.includes("favorite") ? "/" : "/favorite"}>
          <Typography
            component="p"
            sx={{
              position: "absolute",
              color: "white",

              right: "100px",
              fontWeight: "bold",
            }}
          >
            Favorites
          </Typography>{" "}
        </Link>
      </Box>
    );
  else
    return (
      <Box
        sx={{
          display: "flex",
          height: "80px",
          width: "100%",
          backgroundColor: "#050A30",
          alignItems: "center",
          top: 0,
          position: "fixed",
          zIndex: "1",
        }}
      >
        <Link to={pathname.includes("favorite") ? "/" : "/favorite"}>
          <Box
            sx={{
              display: "block",
              width: "60px",
              height: "60px",
              position: "absolute",
              left: "100px",
              color: "white",
            }}
          >
            <IconButton component={Link} to="/">
              <ArrowBackIosNew />
            </IconButton>
          </Box>
        </Link>
        <Box
          sx={{
            position: "absolute",
            right: "100px",
          }}
        >
          <img
            src="https://raw.githubusercontent.com/Isaac-alencar/moviebox/main/src/assets/logo.svg"
            alt=""
            style={{
              display: "block",
              width: "60px",
              height: "60px",
            }}
          />
        </Box>
      </Box>
    );
}

export default Header;

import React from "react";
import { Link, Typography, Box } from "@mui/material";
import Container from "@mui/material/Container";
import GitHubIcon from "@mui/icons-material/GitHub";
const Footer = () => {
  const thisYear = new Date().getFullYear();
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "20px 40px",
        bgcolor: "#d2fccf",
      }}
    >
      <Box sx={{ width: "200px" }}>
        <Typography variant="h5"> Booking Contact</Typography>
      </Box>
      <Typography variant="body1">
        &#169; {thisYear} Linh Nguyen - Write code with love!
        <Link
          href="https://github.com/linhngkh/xuka-thuyan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon style={{ color: "black" }} />
        </Link>
      </Typography>
    </Container>
  );
};

export default Footer;

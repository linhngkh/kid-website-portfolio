import React from "react";
import { Link, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import GitHubIcon from "@mui/icons-material/GitHub";
const Footer = () => {
  const thisYear = new Date().getFullYear();
  return (
    <Container
      maxWidth="lg"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        padding: "40px",
      }}
    >
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

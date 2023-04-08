import React from "react";
import { Link, Typography, Box, Divider } from "@mui/material";
import Container from "@mui/material/Container";
import GitHubIcon from "@mui/icons-material/GitHub";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import FacebookIcon from "@mui/icons-material/Facebook";
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
      <Box
        sx={{
          height: "15vh",
        }}
      >
        <Typography variant="h6"> Booking Contact: Mẹ Trần Như Hoa </Typography>
        <Typography variant="body2">
          {" "}
          <SmartphoneIcon /> 0978 702552
          <Divider />
          <Link href="https://www.facebook.com/hoa.an.9003">
            {" "}
            <FacebookIcon />
            Hoa Su Kien
          </Link>{" "}
        </Typography>
      </Box>
      <Typography variant="body2">
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

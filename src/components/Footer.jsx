import React from "react";
import { Link, Typography, Box, Container } from "@mui/material";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
const Footer = () => {
  const thisYear = new Date().getFullYear();
  return (
    <Container
      maxWidth="2xl"
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
          height: "20vh",
          display: "flex",
        }}
      >
        {/* Nhu Hoa info */}
        <Box sx={{ width: "50%", mr: "100px", margin: "20px" }}>
          <Typography
            variant="h6"
            sx={{ lineHeight: "1.5", fontWeight: "bold" }}
          >
            {" "}
            Booking Contact: Mẹ Trần Như Hoa{" "}
          </Typography>
          <Typography variant="body2">
            {" "}
            <PhoneCallbackIcon sx={{ verticalAlign: "middle" }} /> 0978 702552{" "}
          </Typography>
          <Link
            href="https://www.facebook.com/hoa.an.9003"
            sx={{ textDecoration: "none", color: "black" }}
          >
            {" "}
            <FacebookIcon sx={{ verticalAlign: "middle" }} />
            Hoa Su Kien
          </Link>{" "}
        </Box>
        {/* xuka info */}
        <Box sx={{ width: "60%", ml: "100px", margin: "20px" }}>
          <Typography variant="h6">Xuka's Social Media</Typography>
          <Link href="https://www.facebook.com/hoatran.event">
            {" "}
            <FacebookIcon sx={{ verticalAlign: "middle", color: "black" }} />
          </Link>{" "}
          <Link href="https://www.youtube.com/channel/UCCnspEmHAiDQSEwwONcbIMQ">
            <YouTubeIcon
              sx={{ verticalAlign: "middle", mr: "7px", color: "black" }}
            />
          </Link>
          <Link href="https://www.facebook.com/hoatran.event">
            <InstagramIcon sx={{ verticalAlign: "middle", color: "black" }} />
          </Link>
        </Box>
      </Box>
      <Box sx={{ position: "sticky" }}>
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
      </Box>
    </Container>
  );
};

export default Footer;

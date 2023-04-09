import React from "react";
import { Link, Typography, Box, Container } from "@mui/material";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Wave from "react-wavify";

const Footer = () => {
  const thisYear = new Date().getFullYear();
  return (
    <div style={{ position: "fixed", width: "100%", bottom: 0 }}>
      <Wave
        style={{ position: "relative", bottom: "-35px" }}
        fill="#B0E0E6"
        paused={false}
        options={{
          height: 40,
          amplitude: 40,
          speed: 0.45,
          points: 3,
        }}
      />
      <Container
        maxWidth="2xl"
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "space-between",
          paddingBottom: "10px",
          paddingTop: "10px",
          bgcolor: "#B0E0E6",
        }}
      >
        <Box
          sx={{
            height: "17vh",
            display: "flex",
            marginTop: "10px",
          }}
        >
          {/* Nhu Hoa info */}
          <Box sx={{ width: "50%", mr: "100px" }}>
            <Typography variant="h6" sx={{ lineHeight: "1.5" }}>
              {" "}
              <mark
                style={{
                  background:
                    "linear-gradient(180deg, transparent 60%, rgb(255, 253, 160) 60%)",
                }}
              >
                Booking Contact: Mẹ Trần Như Hoa
              </mark>
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
          <Box sx={{ width: "60%", ml: "100px" }}>
            <Typography variant="h6">
              <mark
                style={{
                  background:
                    "linear-gradient(180deg, transparent 60%, rgb(255, 253, 160) 60%)",
                }}
              >
                Xuka's Social Media
              </mark>
            </Typography>
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
        <Box sx={{}}>
          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
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
    </div>
  );
};

export default Footer;

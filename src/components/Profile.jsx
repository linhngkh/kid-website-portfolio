import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          bgcolor: "#cfe8fc",
          
        }}
      >
        <Box
          sx={{
            background: "red",
            height: "400px",
            width: "50%",
          }}
        >
          <Typography padding={3}>toi la xuka xin chao cac ban!</Typography>
        </Box>

        <Box
          sx={{
            height: "400px",
            width: "50%",
            maxWidth: 300,
          }}
        >
          <video controls width="300" autoPlay loop muted>
            {" "}
            <source
              src="/src/assets/video/xuka-shortvideo.mp4"
              type="video/mp4"
            />
          </video>
        </Box>
      </Container>
    </React.Fragment>
  );
}

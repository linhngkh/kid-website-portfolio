import React from "react";
import { Container, Box, Typography } from "@mui/material";
import Model from "./Model";
import Dancer from "./Dancer";
const Images = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h4" sx={{ paddingBottom: "10px" }}>
          {" "}
          Người Mẫu Nhí 🌼 Model Kid
        </Typography>
        <Model />
      </Box>
      <Box sx={{ flexGrow: 1, paddingBottom: "20px" }}>
        <Typography
          variant="h4"
          sx={{ paddingTop: "40px", paddingBottom: "10px" }}
        >
          {" "}
          Vũ Công 🌼 Diễn Viên Múa 🌼 Dancer
        </Typography>
        <Dancer />
      </Box>
    </Container>
  );
};

export default Images;

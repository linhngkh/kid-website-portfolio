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
          Model Kid
        </Typography>
        <Model />
      </Box>
      <Box sx={{ flexGrow: 1, paddingBottom: "90px" }}>
        <Typography
          variant="h4"
          sx={{ paddingTop: "10px", paddingBottom: "10px" }}
        >
          {" "}
          Dancer
        </Typography>
        <Dancer />
      </Box>
    </Container>
  );
};

export default Images;

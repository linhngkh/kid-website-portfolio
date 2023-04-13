import React from "react";
import { Container, Box, Typography } from "@mui/material";
import Model from "./Model";
import Dancer from "./Dancer";
const Images = () => {
  return (
    <Container
      sx={{
        display: { xs: "block", md: "flex" },
        alignItems: "center",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h4" sx={{ paddingBottom: "10px" }}>
          {" "}
          Model Kid
        </Typography>
        <Model />
      </Box>
      <Box sx={{ flexGrow: 2, paddingBottom: "10px" }}>
        <Typography variant="h4"> Dancer</Typography>
        <Dancer />
      </Box>
    </Container>
  );
};

export default Images;

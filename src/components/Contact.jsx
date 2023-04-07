import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CardMedia from "@mui/material/CardMedia";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl, FormLabel } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
const Contact = () => {
  return (
    <React.Fragment>
      <Container maxWidth="lg" sx={{ padding: "60px" }}>
        <Box
          sx={{
            bgcolor: "#fcfacf",
            height: "80vh",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Box
            sx={{
              maxWidth: 345,
              width: "100%",
            }}
          >
            <CardMedia
              component="img"
              height="500"
              image="/src/assets/IMG_0346.jpeg"
              alt="xuka"
              sx={{
                borderRadius: "10px",
              }}
            />
          </Box>
          <Box sx={{ maxWidth: 345, width: "100%" }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lien lac voi Xuka nhe!
              </Typography>
              <FormControl>
                <FormLabel>Ho va ten</FormLabel>
                <TextField required />
                <FormLabel>dia chi email</FormLabel>
                <TextField required />
                <Button variant="contained" sx={{ marginTop: "10px" }}>
                  gui
                </Button>
              </FormControl>
            </CardContent>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Contact;

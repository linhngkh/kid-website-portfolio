import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CardMedia from "@mui/material/CardMedia";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Textarea from "@mui/joy/Textarea";
const Contact = () => {
  return (
    <React.Fragment>
      <Container maxWidth="lg" sx={{ padding: "60px" }}>
        <Box
          sx={{
            bgcolor: "#fcfacf",
            borderRadius: "20px",
            height: "70vh",
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
          <Box
            sx={{
              maxWidth: 345,
              width: "100%",
              height: "500px",
              background: "white",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            <CardContent sx={{}}>
              <Typography gutterBottom variant="h5" component="div">
                Lien lac voi Xuka nhe!
              </Typography>
              <FormControl>
                <TextField required placeholder="Họ và tên" />
                <TextField
                  required
                  placeholder="Địa chỉ email"
                  sx={{ mt: "10px" }}
                />
                <Textarea placeholder="Viết tin nhắn cho Xuka..." sx={{ mt: "10px" }} />
                <Button variant="contained" sx={{ mt: "10px" }}>
                  Gửi
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

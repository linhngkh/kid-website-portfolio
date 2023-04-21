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

import Image from "../assets/IMG_3450.jpeg";

const Contact = () => {
  return (
    <Container maxWidth="lg" sx={{ paddingBottom: "60px" }}>
      <Box
        sx={{
          // bgcolor: "#fcfbcf",
          height: "80vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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
            height="500px"
            image={Image}
            alt="xuka"
            sx={{
              borderTopLeftRadius: "12px",
              borderBottomLeftRadius: "12px",
              boxShadow: 3,
            }}
          />
        </Box>
        <Box
          sx={{
            maxWidth: 345,
            width: "100%",
            height: "500px",
            background: "white",
            borderTopRightRadius: "12px",
            borderBottomRightRadius: "12px",
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
            boxShadow: "0 8px 8px -4px lightblue",
          }}
        >
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ fontFamily: "Lobster" }}
            >
              Kết Nối với Xuka nhé!
            </Typography>
            <FormControl>
              <TextField required placeholder="Họ và tên" />
              <TextField
                required
                placeholder="Địa chỉ email"
                sx={{ mt: "10px" }}
              />
              <Textarea
                placeholder="Viết tin nhắn cho Xuka..."
                sx={{ mt: "10px" }}
                minRows={3}
              />
              <Button
                variant="contained"
                sx={{
                  mt: "10px",
                  background: "black",
                  "&:hover": { background: "#35363a" },
                }}
              >
                Gửi
              </Button>
            </FormControl>
          </CardContent>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;

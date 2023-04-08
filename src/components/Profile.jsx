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
            maxWidth: "100%",
            maxHeight: "100%",
          }}
        >
          <Typography padding={3}>
            Xin chào các bạn! Mình tên là Xuka Thuỳ An. Ngoài việc học trên lớp,
            mình còn có sở thích và đam mê là vẽ, nhảy, múa, ca hát, và làm
            người mẫu ảnh. Cảm ơn các bạn luôn theo dõi và yêu mến mình nhé!{" "}
          </Typography>
        </Box>

        <Box
          sx={{
            maxWidth: "100%",
            maxHeight: "100%",
          }}
        >
          <video controls width="300" autoPlay loop muted>
            {" "}
            <source
              src="../assets/video/xuka-shortvideo.mp4"
              type="video/mp4"
            />
          </video>
        </Box>
      </Container>
    </React.Fragment>
  );
}

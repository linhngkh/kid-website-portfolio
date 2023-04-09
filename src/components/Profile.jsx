import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography, Grid } from "@mui/material";

import Video from "../assets/video/xuka-shortvideo.mp4";

const message = `Xin chào các bạn!
            Mình tên là Xuka Thuỳ An. Ngoài việc học trên lớp,
            mình còn có sở thích và đam mê là vẽ, nhảy, múa, ca hát, và làm
            người mẫu ảnh. Mẹ mình luôn là người đồng hành, cổ vũ mình tham gia
            các sự kiện văn hoá và nghệ thuật, cũng từ đó mình làm quen được với
            rất nhiều bạn nhỏ khác có cùng sở thích đó. Cảm ơn các bạn luôn theo
            dõi và yêu mến mình nhé!`;

export default function Profile() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        bgcolor: "#cffce2",
      }}
    >
      <Box
        sx={{
          maxWidth: "100%",
          maxHeight: "100%",
        }}
      >
        <Typography variant="h5" marginX={9} paddingBottom={2}>
          <mark
            style={{
              background:
                "linear-gradient(180deg, transparent 60%, rgb(255, 253, 160) 60%)",
            }}
          >
            Profile-Giới thiệu về bản thân
          </mark>{" "}
        </Typography>

        <Grid container wrap="nowrap" spacing={2}>
          <Typography padding={2} marginX={9} variant="body1" paragraph={true}>
            {message}
          </Typography>
        </Grid>
      </Box>

      <Box sx={{ display: "flex", mr: "-24px" }}>
        <video controls width="300" autoPlay loop muted>
          {" "}
          <source src={Video} type="video/mp4" />
        </video>
      </Box>
    </Container>
  );
}

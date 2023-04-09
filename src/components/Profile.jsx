import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

import Video from "../assets/video/xuka-shortvideo.mp4";

export default function Profile() {
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
          <Typography variant="h5">
            <mark
              style={{
                background:
                  "linear-gradient(180deg, transparent 60%, rgb(255, 253, 160) 60%)",
              }}
            >
            Profile-Giới thiệu về bản thân
            </mark>{" "}
          </Typography>
          <Typography padding={2} variant="body1">
            Xin chào các bạn!
            <br />
            Mình tên là <strong> Xuka Thuỳ An</strong>. Ngoài việc học trên lớp,
            mình còn có sở thích và đam mê là vẽ, nhảy, múa, ca hát, và làm
            người mẫu ảnh. Mẹ mình luôn là người đồng hành, cổ vũ mình tham gia
            các sự kiện văn hoá và nghệ thuật, cũng từ đó mình làm quen được với
            rất nhiều bạn nhỏ khác có cùng sở thích đó. Cảm ơn các bạn luôn theo
            dõi và yêu mến mình nhé!{" "}
          </Typography>
        </Box>

        <Box sx={{ display: "flex" }}>
          <video controls width="300" autoPlay loop muted>
            {" "}
            <source src={Video} type="video/mp4" />
          </video>
        </Box>
      </Container>
    </React.Fragment>
  );
}

import * as React from "react";
import { Typography, Grid } from "@mui/material";
import { useTransform, useMotionValue, motion } from "framer-motion";

import Video from "../assets/video/xuka-shortvideo.mp4";

const message = `Xin chào các bạn!
            Mình tên là Xuka Thuỳ An. Ngoài việc học trên lớp,
            mình còn có sở thích và đam mê là vẽ, nhảy, múa, ca hát, và làm
            người mẫu ảnh. Mẹ mình luôn là người đồng hành, cổ vũ mình tham gia
            các sự kiện văn hoá và nghệ thuật, cũng từ đó mình làm quen được với
            rất nhiều bạn nhỏ khác có cùng sở thích đó. Cảm ơn các bạn luôn theo
            dõi và yêu mến mình nhé!`;

export default function Profile() {
  // set initial state to track the state and velocity
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [100, -100], [-30, 30]);

  return (
    <div style={{ perspective: 2000 }}>
      <motion.div
        style={{
          x,
          y,
          rotateX,
          rotateY,
          z: 100,
          position: "relative",
          cursor: "grab",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        drag
        dragElastic={0.18}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: "grabbing" }}
        maxWidth="lg"
      >
        <div
          style={{
            position: "relative",
            maxWidth: "620px",
            maxHeight: "100%",
            backgroundColor: "#cffce2",
            border: "4px solid #fff",
            borderRadius: "30px",
            top: "70px",
            right: "-300px",
            boxShadow: "0 8px 8px -4px lightblue",
          }}
        >
          <Typography
            variant="h5"
            marginX={7}
            padding={2}
            sx={{ fontFamily: "Lobster" }}
          >
            <mark
              style={{
                background:
                  "linear-gradient(180deg, transparent 60%, rgb(255, 253, 160) 60%)",
              }}
            >
              Profile Về Mình
            </mark>{" "}
          </Typography>

          <Grid
            container
            wrap="nowrap"
            spacing={2}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <Typography
              padding={2}
              marginX={9}
              variant="body1"
              paragraph={true}
            >
              {message}
            </Typography>
          </Grid>
        </div>

        <motion.div style={{ x, y, rotateX, rotateY, z: 10000 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              top: "-150px",
              right: "300px",
              width: "400px",
              border: "4px solid #fff",
              borderRadius: "30px",
              background: "#757575",
              boxShadow: "0 8px 8px -4px lightblue",
            }}
          >
            <video controls width="350" autoPlay loop muted>
              {" "}
              <source src={Video} type="video/mp4" />
            </video>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

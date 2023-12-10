import styled from "@emotion/styled";
import {
  Avatar,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";


function Answer({ answer }) {
  const animations = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: "spring", stiffness: 900, damping: 70 },
  };

  const today = new Date();

  return (
    <>
      <motion.div
        {...animations}
        layout
        style={{ display: "flex", alignItems: "center" }}
      >
    
            <Grid
              item
              bgcolor="#374259"
              zeroMinWidth
              sx={{ maxWidth: { xs: 175, md: 300 } }}
             
              padding={2}
              margin={2}
              borderRadius={6}
            >
              <Typography
                style={{ overflowWrap: "break-word" }}
                color="white"
                textAlign="auto"
              >
                {answer}
              </Typography>
            </Grid>
            <Avatar>A</Avatar>
            <Box margin={2}>
              <Box
                sx={{
                  fontWeight: "regular",
                  fontSize: 14,
                  fontStyle: "italic",
                }}
              >
                {`${today.getHours()}.${today.getMinutes()}`}
              </Box>
              <Box
                sx={{
                  fontWeight: "regular",
                  fontSize: 14,
                  fontStyle: "italic",
                }}
              >
                {`${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`}
              </Box>
            </Box>
       
       
      </motion.div>
    </>
  );
}

export default Answer;

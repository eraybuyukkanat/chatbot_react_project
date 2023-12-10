import styled from "@emotion/styled";
import { Avatar, Box, Button, Grid, TextField, Typography } from "@mui/material";
import { motion } from "framer-motion";
const ColorButton = styled(Button)(({ theme }) => ({
  marginY: 1,
  width: "100%",
  color: "#374259",
  backgroundColor: "white",
  "&:hover": {
    backgroundColor: "#374259",
    color: "white",
  },
}));
function Question({quest}) {
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
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {quest === "diğer" ? (
          <>
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
            <Avatar>C</Avatar>
            <Grid
              item
              bgcolor="#374259"
              padding={2}
              margin={2}
              zeroMinWidth
              sx={{ maxWidth: { xs: 175, md: 400 } }}
              borderRadius={6}
            >
              <Box marginY={2}>
                <Typography color="white">
                  Sorulardan örnek bir tanesi?
                </Typography>
                <TextField
                  size="small"
                  sx={{
                    backgroundColor: "white",
                    borderRadius: 3,
                    width: "100%",
                  }}
                />
              </Box>
              <Box marginY={2}>
                <Typography color="white">
                  Mesela başka örnek diğeri?
                </Typography>
                <TextField
                  size="small"
                  sx={{ backgroundColor: "white", width: "100%" }}
                />
              </Box>
              <Box marginY={2}>
                <Typography color="white">Böyle de bir soru var?</Typography>
                <TextField
                  size="small"
                  sx={{ backgroundColor: "white", width: "100%" }}
                />
              </Box>
              <Box marginY={2}>
                <Typography color="white">
                  Uzuuuuun bir soru, bunu cevaplamak lazım?
                </Typography>
                <TextField
                  size="small"
                  sx={{ backgroundColor: "white", width: "100%" }}
                />
              </Box>
              <Box marginY={2}>
                <ColorButton variant="text">Gönder</ColorButton>
              </Box>
              {/* <Typography
            style={{ overflowWrap: "break-word" }}
            color="white"
            textAlign="auto"
          >
            {quest}
          </Typography> */}
            </Grid>
          </>
        ) : (<>
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
        <Avatar>C</Avatar>
        <Grid
          item
          bgcolor="#374259"
          
          padding={2}
          margin={2}
          zeroMinWidth
          sx={{ maxWidth: { xs: 175, md: 300 } }}
          borderRadius={6}
        >
          <Typography
            style={{ overflowWrap: "break-word" }}
            color="white"
            textAlign="auto"
          >
            {quest}
          </Typography>
        </Grid>
        </>)}
      </motion.div>
    </>
  );
}

export default Question;

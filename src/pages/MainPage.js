import styled from "@emotion/styled";
import { Add, Clear, DeleteOutline } from "@mui/icons-material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Skeleton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";

function MainPage() {
  const animations = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: "spring", stiffness: 900, damping: 70 },
  };

  const [isAsked, setIsAsked] = useState(false);

  const [hasError, setHasError] = useState(false);

  const answers = [
    "CEVAP",
    "UZUUUUUUUUUUUUUUUUUN CEVAP",
    "DAHAAAAAAAA UZUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUN CEVAPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP",
  ];

  const today = new Date();

  const [questions, setQuestions] = useState([]);

  function askQuestion(text) {
    if (isAsked) {
      return;
    }
    if (text == "") {
      setHasError(true);
      return;
    }
    if (!hasError) {
      setQuestions((prev) => [...prev, text]);
      setText("");
      console.log(questions);
      setIsAsked(true);
      setTimeout(function () {
        setQuestions((prev) => [
          ...prev,
          answers[Math.floor(Math.random() * 3)],
        ]);
        setIsAsked(false);
      }, 2000);
    }
  }

  function clearChat() {
    setQuestions([]);
    setIsAsked(false);
  }

  const [text, setText] = useState("");

  function textFieldHandler(value) {
    console.log(value);
    setHasError(false);
    setText(value.target.value);
  }

  return (
    <>
      <Grid container paddingBottom={10}>
        <Grid item container>
          <Grid item container sx={{ position: "sticky", zIndex: 1, top: 0 }}>
            <Grid item sx={{ width: "100%", backgroundColor: "#907FA4" }}>
              <List sx={{ paddingTop: 0 }}>
                <ListItem sx={{}}>
                  <ListItemText
                    disableTypography
                    primary={
                      <Typography
                        variant="h4"
                        style={{ color: "#FFFFFF", textAlign: "center" }}
                      >
                        CHATBOT
                      </Typography>
                    }
                  />
                </ListItem>

                <ListItem sx={{ backgroundColor: "#907FA4" }}>
                  <ListItemButton onClick={() => clearChat()}>
                    <ListItemText sx={{ color: "white", textAlign: "center" }}>
                      Sohbeti Temizle
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </List>
            </Grid>

            <Grid
              item
              container
              flexDirection="row"
              sx={{ justifyContent: "center", zIndex: 10 }}
            >
              <Grid
                item
                container
                sx={{
                  paddingTop: 5,
                  backgroundColor: "white",
                  flexDirection: "row",
                  width: "100%",
                }}
              >
                <Container sx={{ display: "flex" }}>
                  <TextField
                    variant="outlined"
                    color="secondary"
                    sx={{
                      width: "95%",
                      backgroundColor: "white",
                      borderWidth: 2,
                      paddingBottom: 2
                    }}
                    value={text}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        askQuestion(text);
                      }
                    }}
                    onChange={textFieldHandler}
                    inputProps={{ minlength: 1, maxLength: 200 }}
                    multiline
                    error={hasError}
                    label="Merak ettiğini sor..."
                    id="fullWidth"
                  />
                  <IconButton
                    disabled={isAsked ? true : false}
                    sx={{
                      marginLeft: 6,
                      color: `${hasError ? "red" : "black"}`,
                    }}
                    aria-label="arrow-upward"
                    onClick={() => {
                      askQuestion(text);
                    }}
                  >
                    <ArrowUpwardIcon />
                  </IconButton>
                </Container>
              </Grid>
            </Grid>
          </Grid>
          <Container>
          {questions.map((quest) => {
            return (
              <Grid
                container
                flexDirection="column"
                sx={{paddingY: {xs: 11,md: 2}}}
                xs={12}
                md={12}
                alignItems={questions.indexOf(quest) % 2 == 1 ? "start" : "end"}
              >
                <Box
                  sx={{
                    height: 50,
                    padding: 2,
                    borderRadius: 5,
                    marginY: 2,
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  {questions.indexOf(quest) % 2 == 1 ? (
                    <>
                      <motion.div
                        {...animations}
                        layout
                        style={{ display: "flex", alignItems: "center",marginTop:10,marginBottom:10 }}
                      >
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
                          bgcolor="#907FA4"
                          padding={2}
                          margin={2}
                          zeroMinWidth
                          sx={{maxWidth: {xs: 150,md: 300}}}
                          borderRadius={6}
                        >
                          <Typography style={{overflowWrap: 'break-word'}} color="white" textAlign="auto">
                            {quest}
                          </Typography>
                        </Grid>
                      </motion.div>
                    </>
                  ) : (
                    <>
                      <motion.div
                        {...animations}
                        layout
                        style={{ display: "flex", alignItems: "center",}}
                      >
                        <Grid
                        item
                          bgcolor="#907FA4"
                          zeroMinWidth
                          sx={{maxWidth: {xs: 150,md: 300}}}
                          padding={2}
                          margin={2}
                          
                          borderRadius={6}
                        >
                          <Typography style={{overflowWrap: 'break-word'}}  color="white" textAlign="auto">
                            {quest}
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
                  )}
                </Box>
              </Grid>
            );
          })}

          <Container>
          {isAsked && (
            <Grid
              container
              flexDirection="column"
              alignItems="start"
            >
              <Box
                sx={{
                  minWidth: 200,
                  maxWidth: 600,
                  height: 50,
                  padding: 1,
                  borderRadius: 5,
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <Box sx={{ width: 300 }}>
                  <Skeleton />
                  <Skeleton animation="wave" />
                  <Skeleton animation={false} />
                </Box>
              </Box>
            </Grid>
            
          )}
          </Container>
          </Container>
        </Grid>
      </Grid>
    </>
  );
}

export default MainPage;

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: "#1A2027",

  maxWidth: 400,
  color: "red",
}));

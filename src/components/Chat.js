import { Box, Grid } from "@mui/material";
import Question from "./Answer";
import Answer from "./Question";

function Chat({ questions }) {

  

  return (
    <>
    <Grid container marginY={0}>
      {questions.map((quest) => {
        return (
          <Grid
            container
            flexDirection="column"
            sx={{
              paddingX: { xs: 1, md: 45 },
              marginY: {xs: 9, md: 2},
              paddingBottom:5
            }}
            xs={12}
            md={12}
            alignItems={questions.indexOf(quest) % 2 === 1 ? "start" : "end"}
          >
            <Box
              sx={{
                height: 50,
                padding: 2,
                marginY: {xs: 3,md:0},
                borderRadius: 5,
                display: "flex",
                alignItems: "center",
              }}
            >
              {questions.indexOf(quest) % 2 === 1 ? (
                <Question quest={quest} />
              ) : (
                <Answer answer={quest} />
              )}
            </Box>
          </Grid>
        );
      })}
      </Grid>
    </>
  );
}

export default Chat;

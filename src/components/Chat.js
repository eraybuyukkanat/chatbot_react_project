import { Box, Grid } from "@mui/material";
import Question from "./Answer";
import Answer from "./Question";

function Chat({ questions }) {

  

  return (
    <>
    <Grid container marginBottom={15} >
      {questions.map((quest) => {
        return (
          <Grid
            container
            flexDirection="column"
            sx={{
              paddingX: { xs: 1, md: 45 },
             
             
            }}
            xs={12}
            md={12}
            alignItems={questions.indexOf(quest) % 2 === 1 ? "start" : "end"}
          >
            <Box
              sx={{
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

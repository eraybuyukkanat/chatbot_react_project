import {  ArrowUpward } from "@mui/icons-material";
import { Container, Grid, IconButton, TextField } from "@mui/material";

function Input({hasError,text,askQuestion,textFieldHandler,isAsked}) {
  return (
    <>
      <Grid item container sx={{ position: "fixed", bottom: 0 }}>
        <Grid
          item
          container
          sx={{
            
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
                paddingBottom: 2,
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
              maxRows={2}
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
              <ArrowUpward />
            </IconButton>
          </Container>
        </Grid>
      </Grid>
    </>
  );
}

export default Input;

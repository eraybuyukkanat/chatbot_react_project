import {
  Button,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

function Navbar({clearChat}) {
  return (
    <Grid item container sx={{ position: "sticky", zIndex: 1, top: 0,marginBottom: {xs: 10,md:8}}}>
      <Grid item sx={{ width: "100%" }}>
        <List sx={{ paddingTop: 0 }}>
          <ListItem sx={{ backgroundColor: "#907FA4"}}>
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

          <ListItem onClick={clearChat} sx={{ justifyContent: "center" }}>
            <Button variant="outlined" color="secondary">
              Sohbeti Temizle
              </Button>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
}

export default Navbar;

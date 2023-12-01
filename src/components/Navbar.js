import {
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
      <Grid item sx={{ width: "100%", backgroundColor: "#907FA4" }}>
        <List sx={{ paddingTop: 0 }}>
          <ListItem>
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
    </Grid>
  );
}

export default Navbar;

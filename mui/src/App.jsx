import { Box, Button, Container, Typography } from "@mui/material";
import { Delete as DeleteIcon, Home as HomeIcon } from "@mui/icons-material";
import DialogComponent from "./components/DialogComponent";
import GridComponent from "./components/GridComponent";
import DarkMode from "./components/DarkMode";

const App = () => {
  return (
    <Container>
      <Typography
        component="h1"
        variant="h2"
        sx={{ fontSize: { xs: "24px", lg: "32px" } }}
      >
        App component
      </Typography>

      <DarkMode />

      <DialogComponent />
      <GridComponent />

      {/* <Button
        variant="outlined"
        startIcon={<DeleteIcon />}
        sx={{ mt: ".5rem" }}
      >
        Delete
      </Button>
      <HomeIcon fontSize="large" color="primary" /> */}
    </Container>
  );
};

export default App;

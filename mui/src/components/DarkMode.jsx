import { Button, useColorScheme } from "@mui/material";

const DarkMode = () => {
  const { mode, setMode } = useColorScheme();

  const handleClick = () => setMode(mode === "light" ? "dark" : "light");

  return (
    <Button variant="contained" sx={{ mt: 2 }} onClick={handleClick}>
      toggle mode
    </Button>
  );
};

export default DarkMode;

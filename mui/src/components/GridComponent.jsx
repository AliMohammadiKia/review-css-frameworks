import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function GridComponent() {
  return (
    <Box sx={{ flexGrow: 1, mt: 4 }}>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <Item sx={{ height: "3rem" }}>size=8</Item>
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <Item>size=4</Item>
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <Item>size=4</Item>
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <Item>size=8</Item>
        </Grid>
      </Grid>
    </Box>
  );
}

import { Container } from "@mui/material";
import { Link } from "@mui/material";
import { Typography } from "@mui/material";
import { AppBar } from "@mui/material";
import { Box } from "@mui/system";
import { Link as RNLink } from "react-router-dom";

export const Header = () => {
  return (
    <AppBar position="relative">
      <Container>
        <Box display="flex" columnGap={2} py={2}>
          <Link to="/home" component={RNLink}>
            <Typography color="white">Home</Typography>
          </Link>
          <Link to="/counter" component={RNLink}>
            <Typography color="white">Counter</Typography>
          </Link>
          <Link to="/fetch" component={RNLink}>
            <Typography color="white">Fetch</Typography>
          </Link>
        </Box>
      </Container>
    </AppBar>
  );
};

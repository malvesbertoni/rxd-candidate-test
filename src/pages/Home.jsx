import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { Container } from "@mui/material";
import { Layout } from "../components/layout/Layout";

export const Home = () => {
  return (
    <Layout>
      <Container>
        <Box
          alignItems="center"
          justifyContent="center"
          display="flex"
          my={8}
          mx="auto"
        >
          <Typography>Home</Typography>
        </Box>
      </Container>
    </Layout>
  );
};

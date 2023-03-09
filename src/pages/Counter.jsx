import { Box } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import { useState } from "react";
import { Layout } from "../components/layout/Layout";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <Layout>
      <Container>
        <Box
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          display="flex"
          my={8}
          mx="auto"
        >
          <Button
            type="button"
            variant="contained"
            onClick={() => setCounter((c) => c + 1)}
          >
            Click me
          </Button>

          <Typography mt={4}>Button as clicked {counter} times</Typography>
        </Box>
      </Container>
    </Layout>
  );
};

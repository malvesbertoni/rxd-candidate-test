import { Button } from "@mui/material";
import { Box } from "@mui/material";
import { ListItem } from "@mui/material";
import { ListItemText } from "@mui/material";
import { Typography } from "@mui/material";
import { List } from "@mui/material";
import { Container } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { Layout } from "../components/layout/Layout";

export const Fetch = () => {
  const [characters, setCharacters] = useState([]);
  const [episodes, setEpisodes] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");

      if (response.status !== 200) {
        throw new Error("Fetch Error: Failed to fetch data");
      }

      const data = await response.json();

      console.log(data.results);

      setCharacters(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchEpisodes = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/episode");

      if (response.status !== 200) {
        throw new Error("Fetch Error: Failed to fetch episodes");
      }

      const data = await response.json();

      console.log(data.results);

      setEpisodes(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchEpisodes();
  }, []);

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
          <Button type="button" variant="contained" onClick={fetchData}>
            Fetch Data
          </Button>

          <Typography>Characters</Typography>

          <Box mt={4}>
            <List>
              {characters.map((character) => (
                <ListItem>
                  <ListItemText primary={character.name} />
                </ListItem>
              ))}
            </List>
          </Box>

          <Typography>Episodes</Typography>

          <Box mt={4}>
            <List>
              {episodes.map((episode) => (
                <ListItem>
                  <ListItemText primary={episode.name} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

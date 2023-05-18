import { useState, useEffect } from "react";
import * as API from "../Data/Data";
import CharacterCard from "./CharacterCard.jsx";

import Stack from "@mui/material/Stack";

export default function BaseCards() {
  const [characters, setCharacters] = useState([]);
  console.log(characters);

  useEffect(() => {
    API.getAPI().then(setCharacters).catch(console.log);
  }, []);
  return (
    <>
      {characters.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <section>
          <Stack
            spacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}
            direction="row"
            useFlexGap
            flexWrap="wrap"
            justifyContent="space-around"
          >
            {characters.map((character) => (
              <CharacterCard
                key={character.id}
                img={character.image}
                name={character.name}
                specie={character.species}
                status={character.status}
                origin={character.origin.name}
              />
            ))}
          </Stack>
        </section>
      )}
    </>
  );
}
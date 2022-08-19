import { useState } from "react";

import { Api } from "../../services/api";
import { Container, Joke, Button } from "./styles";
import { TJokesProps } from "../../types/index";

const Jokes = () => {
  const [jokes, setJokes] = useState<TJokesProps>();

  const getJoke = () => {
    Api.get("/jokes/random")
      .then((response) => setJokes(response.data))
      .catch((err) => err);
  };

  return (
    <Container>
      <Joke>{jokes?.value ?? "Trues about Chuck Norris"}</Joke>
      <Button onClick={getJoke}>Next</Button>
    </Container>
  );
};

export default Jokes;

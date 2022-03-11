import { useState } from "react";
import { GlobalStyle } from "../GlobalStyle/GlobalStyle";

function MyApp({ Component, pageProps }) {
  const [nameOfGame, setNameOfGame] = useState("");
  const [playerNames, setPlayerNames] = useState("");
  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        nameOfGame={nameOfGame}
        setNameOfGame={setNameOfGame}
        playerNames={playerNames}
        setPlayerNames={setPlayerNames}
      />
    </>
  );
}

export default MyApp;

import { GameFormular } from "../components/GameFormular";

export default function Home({ nameOfGame, setNameOfGame, playerNames, setPlayerNames }) {
  return <GameFormular nameOfGame={nameOfGame} setNameOfGame={setNameOfGame} playerNames={playerNames} setPlayerNames={setPlayerNames} />;
}

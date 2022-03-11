import { ActiveGame } from "../components/ActiveGame";

export default function GamePage({
  nameOfGame,
  setNameOfGame,
  playerNames,
  setPlayerNames,
}) {
  return <ActiveGame nameOfGame={nameOfGame} playerNames={playerNames} />;
}

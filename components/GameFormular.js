import styled from "styled-components";
import Link from "next/link";
import Navigation from "./Navigation";

export function GameFormular({ nameOfGame, setNameOfGame, playerNames, setPlayerNames }) {
  return (
    <>
      <form labelText="Name of game">
        <Fieldset>
          <h1>Scorekeeper</h1>
          <h2>Name of Game</h2>
          <label htmlFor="NameOfGame">Name of game</label>
          <input
            required
            id="NameOfGame"
            onChange={(e) => {
              setNameOfGame(e.target.value);
            }}
          ></input>
          <label htmlFor="playerNames">Player names, separated by comma</label>
          <input
            required
            id="playerNames"
            onChange={(e) => {
              setPlayerNames(e.target.value);
            }}
          ></input>
          <Link href="/GamePage" passHref>
            <SubmitA>
              <button>Create game</button>
            </SubmitA>
          </Link>
          <Navigation />
        </Fieldset>
      </form>
    </>
  );
}
export const Fieldset = styled.fieldset`
  padding: 0.7rem;
  border: 1px solid gray;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const SubmitA = styled.a`
  display: flex;
  justify-content: center;
  text-decoration: none;
  button {
    width: 100%;
    background-color: grey;
  }
`;

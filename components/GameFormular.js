import styled from "styled-components";
import Link from "next/link";

export function GameFormular() {
  return (
    <>
      <form labelText="Name of game">
        <Fieldset>
          <h1>Scorekeeper</h1>
          <h2>Create a new game</h2>
          <label htmlFor="NameOfGame">Name of game</label>
          <input id="NameOfGame"></input>
          <label htmlFor="playerNames">Player names, separated by comma</label>
          <input id="playerNames"></input>
          <Link href="/GamePage">
            <SubmitA>
              <button>Create game</button>
            </SubmitA>
          </Link>
          <LinkContainer>
            <Link href="/">
              <a>
                <button>Play</button>
              </a>
            </Link>
            <Link href="/">
              <a>
                <button>History</button>
              </a>
            </Link>
          </LinkContainer>
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

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  a > button {
  }
`;

const SubmitA = styled.a`
  display: flex;
  justify-content: center;
  text-decoration: none;
  button {
    width: 100%;
    background-color: grey;
  }
`;

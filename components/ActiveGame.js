import styled from "styled-components";
import Link from "next/link";
import { Fieldset } from "./GameFormular";

export function ActiveGame({ nameOfGame, playerNames }) {
  return (
    <>
      <Fieldset>
        <h1>Scorekeeper</h1>
        <h3>{nameOfGame}</h3>
        <div>
          {playerNames.split(",").map((player) => (
            <Section key={player}>
              <p>{player}</p>
              <div>
                <button>-</button>
                <span>0</span>
                <button>+</button>
              </div>
            </Section>
          ))}
        </div>
        <FlexGamePageButtons>
          <Link href="/">
            <a>
              <button>Reset Scores</button>
            </a>
          </Link>
          <Link href="/">
            <a>
              <p>End Game </p>
            </a>
          </Link>
        </FlexGamePageButtons>
      </Fieldset>
    </>
  );
}

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const FlexGamePageButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  a {
    width: 100%;
    p {
      width: 100%;
      text-align: center;
    }
    button {
      width: 100%;
    }
  }
`;

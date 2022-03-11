import Link from "next/link";
import { Fieldset, SubmitA } from "../components/GameFormular";
import Navigation from "../components/Navigation";

export default function HistoryPage() {
  return (
    <>
      <h1>Scorekeeper</h1>
      <h2>Previous Game</h2>

      <form labelText="Name of game">
        <Fieldset>
          <h3>Game Name </h3>{" "}
          <Link href="/GamePage" passHref>
            <SubmitA style={{ textDecoration: 'underline', cursor:"pointer" }}>Continue Game</SubmitA>
          </Link>
          <button>Show score</button>
        </Fieldset>
      </form>
      <Navigation />
    </>
  );
}

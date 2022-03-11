import Link from "next/link";
import styled from "styled-components";

export default function Navigation() {
  return (
    <LinkContainer>
      <Link href="/">
        <a>
          <button>Play</button>
        </a>
      </Link>
      <Link href="/HistoryPage">
        <a>
          <button>History</button>
        </a>
      </Link>
    </LinkContainer>
  );
}

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  a > button {
  }
`;

import React, { useContext } from "react";
import { getEllipsisTxt } from "../utils/helpers/formatters";
import styled from "styled-components";
import { Context } from "../context/Context";

export default function Navbar() {
  const { currentAccount, connectWallet, error } = useContext(Context);
  return (
    <Nav>
      <div className="title">
        <h4>Hi, {getEllipsisTxt(currentAccount)}</h4>
        <h1>
          Welcome to <span>G-2069 DASHBOARD</span>
        </h1>
      </div>
      {error && (<h4>{error}</h4>)}
      {!currentAccount && (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  color: white;
  .title {
    h4 {
      font-family: "Orbitron", sans-serif;
    }
    h1 {
      font-family: "Orbitron", sans-serif;
      span {
        margin-left: 0.5rem;
        color: #08ebff;
        font-family: "Permanent Marker", cursive;
        letter-spacing: 0.2rem;
      }
    }
  }
  .search {
    background-color: #212121;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 8rem 1rem 1rem;
    border-radius: 1rem;
    svg {
      color: #08ebff;
    }
    input {
      background-color: transparent;
      border: none;
      color: #08ebff;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
      &:focus {
        outline: none;
      }
      &::placeholder {
        color: #08ebff;
        font-family: "Permanent Marker", cursive;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    .title {
      h1 {
        span {
          display: block;

          margin: 1rem 0;
          /* letter-spacing: 0; */
        }
      }
    }
  }
`;

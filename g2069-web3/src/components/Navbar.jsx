import React, { useContext } from "react";
import { getEllipsisTxt } from "../utils/helpers/formatters";
import styled from "styled-components";
import { Context } from "../context/Context";
import Metamask from "../assets/metamask.svg";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t } = useTranslation();
  const { currentAccount, connectWallet, error } = useContext(Context);
  return (
    <Nav>
      <div className="title">
        <h4>
          {t("hi")}
          {getEllipsisTxt(currentAccount)}
        </h4>
        <h1>
          {t("welcome")}
          <span>G-2069 {t("dashboard")}</span>
        </h1>
      </div>
      <div className="errormsg">{error && <h4>{error}</h4>}</div>
      {!currentAccount && (
        <button className="metamask" onClick={connectWallet}>
          <img src={Metamask} alt="metamask" /> <p>{t("login")}</p>
        </button>
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
  .errormsg {
    h4 {
      align-items: center;
      font-family: "Orbitron", sans-serif;
      color: #ff0000;
    }
  }

  .metamask {
    border: 1px solid;
    border-radius: 0.6rem;
    height: auto;
    padding: 12px 16px;
    align-items: center;
    display: flex;
    text-transform: none;
    background-color: #d37305;
    cursor: pointer;
    p {
      margin-left: 2vh;
      font-size: 1.5vh;
      font-family: "Orbitron", sans-serif;
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
    .metamask {
      align-items: center;
      width: 50%;
      height: 8vh;
    }
  }
`;

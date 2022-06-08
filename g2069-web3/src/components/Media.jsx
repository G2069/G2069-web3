import React from "react";
import styled from "styled-components";
import { cardStyles } from "./ReusableStyles";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useTranslation } from "react-i18next";

export default function Media() {
  const { t } = useTranslation();
  return (
    <Section>
      <div className="title">
        <h2>{t("airdrop")}</h2>
      </div>
      <div className="container">
        <h3>
          {t("airdrop")} {t("amount")} : 1,000,000 $GS
        </h3>
        <a
          href="https://forms.gle/NFoGhn2Gde1PivQt8"
          target="_blank"
          rel="noreferrer"
          className="discord-link"
        >
          <h3>
            {t("airdrop")} {t("details")} <HiArrowNarrowRight />
          </h3>
        </a>
      </div>
      <div className="container">
        <hr></hr>
      </div>
      <div className="container">
        <h3>{t("balance")} :</h3>
      </div>
      <div className="buttonsection">
        <button className="claim" disabled>
          <p>{t("claim")}</p>
        </button>
      </div>
    </Section>
  );
}
const Section = styled.section`
  display: flex;
  flex-direction: column;
  ${cardStyles}
  .title {
    h2 {
      color: #08ebff;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
    }
  }
  .container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
    font-family: "Orbitron", sans-serif;
    .discord-link{
      text-decoration: none;
      color: white;
    }
  }

  .buttonsection {
    display: flex;
    justify-content: center;
    padding-top: 9rem;
    .claim {
      display: flex;
      justify-content: center;
      background-color: grey;
      padding: 0.5rem 0.5rem;
      width: 7rem;
      border: #fd1e2d;
      border-radius: 2rem;
      text-align: center;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: scale(1.1);
      }
      p {
        font-size: 1.5rem;
        font-family: "Orbitron", sans-serif;
        color: black;
      }
    }
  }
`;

import React, { useContext, useState } from "react";
import styled from "styled-components";
import { getEllipsisTxt } from "../utils/helpers/formatters";
import { HiArrowNarrowRight } from "react-icons/hi";
import { cardStyles } from "./ReusableStyles";
import { Context } from "../context/Context";
import token from "../assets/gtoken-logo.png";
import { useTranslation } from "react-i18next";

export default function Transfers() {
  const { t } = useTranslation();
  const { currentAccount, tokenBuyFunction, error, successMsg, isWhitelisted } =
    useContext(Context);
  const [inputFieldChange, setInputFieldChange] = useState("");

  const changeInInputField = (e) => {
    setInputFieldChange(e.target.value);
  };

  const onSubmit = async () => {
    if (parseFloat(inputFieldChange) >= 0.1) {
      await tokenBuyFunction(inputFieldChange);
    } else {
      window.alert("Minumum Purchase is 0.1BNB");
    }
  };

  const tokenAmount = inputFieldChange * 460;

  if (!currentAccount) {
    return (
      <Section>
        <div className="title">
          <h2>{t("buy")} $GS</h2>
        </div>
        <div className="transactions">
          <div className="transaction">
            <div className="transaction__title">
              <div className="transaction__title__details">
                <h3>{t("ticker")} : $GS</h3>
                <h3>{t("rate")} : 1 BNB = 460 $GS </h3>
                <h3>{t("tokenadd")} :</h3>
                <h3>
                  <a
                    href="https://bscscan.com/address/0x215B4AD5d547433Bf7206a3e6cc49d169Fab3387"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {getEllipsisTxt(
                      "0x215B4AD5d547433Bf7206a3e6cc49d169Fab3387"
                    )}
                    <HiArrowNarrowRight />
                  </a>
                </h3>
                <h3>{t("contractadd")} :</h3>
                <h3>
                  <a
                    href="https://bscscan.com/address/0xFf64E5502FAdDD2a5F63242Deaa7409f022B5877"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {getEllipsisTxt(
                      "0xFf64E5502FAdDD2a5F63242Deaa7409f022B5877"
                    )}
                    <HiArrowNarrowRight />
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </Section>
    );
  }
  return (
    <Section>
      <div className="title">
        <h2>{t("buy")} $GS</h2>
      </div>
      <div className="transactions">
        <div className="transaction">
          <div className="transaction__title">
            <div className="transaction__title__details">
              <h3>{t("ticker")} : $GS</h3>
              <h3>{t("rate")} : 1 BNB = 460 $GS </h3>
              <h3>{t("tokenadd")} :</h3>
              <h3>
                <a
                  href="https://bscscan.com/address/0x215B4AD5d547433Bf7206a3e6cc49d169Fab3387"
                  target="_blank"
                  rel="noreferrer"
                >
                  {getEllipsisTxt("0x215B4AD5d547433Bf7206a3e6cc49d169Fab3387")}
                  <HiArrowNarrowRight />
                </a>
              </h3>
              <h3>{t("contractadd")} :</h3>
              <h3>
                <a
                  href="https://bscscan.com/address/0xFf64E5502FAdDD2a5F63242Deaa7409f022B5877"
                  target="_blank"
                  rel="noreferrer"
                >
                  {getEllipsisTxt("0xFf64E5502FAdDD2a5F63242Deaa7409f022B5877")}
                  <HiArrowNarrowRight />
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="tokensection">
        <input
          value={inputFieldChange}
          placeholder="input BNB amount"
          onChange={changeInInputField}
          type="number"
        />
        <p>=</p>
        <img src={token} alt="g2069 token" />
        <p>{tokenAmount} $GS</p>
      </div>
      {isWhitelisted && (
        <div className="button__section">
          <button className="purchase" onClick={onSubmit}>
            <p>{t("buy")}</p>
          </button>
        </div>
      )}
      {!isWhitelisted && (
        <div className="button__section">
          <button className="invalid">
            <p>{t("buy")}</p>
          </button>
        </div>
      )}
      <div className="errormsg">
        {error && <p>{error}</p>}
        {!isWhitelisted && <p>{t("notwhitelisted")}</p>}
      </div>
      <div className="successmsg">
        {successMsg && <p>{successMsg}</p>}
        {isWhitelisted && <p>{t("whitelisted")}</p>}
      </div>
    </Section>
  );
}

const Section = styled.section`
  ${cardStyles};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .title {
    h2 {
      color: #08ebff;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
    }
  }
  .transactions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
    font-family: 'Orbitron', sans-serif;
    .transaction {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      &__title {
        display: flex;
        gap: 1rem;
        }
        h3{
          letter-spacing: 0.1rem;
          margin-bottom: 0.5rem;
        }
        a{
          text-decoration: none;
          color: white;
        }
      }
    }
  }
  .tokensection {
    input{
      float: left;
      height: 3vh;
      border-radius: 15px;
      text-align: center;
      font-family: 'Orbitron', sans-serif;
      width: 18vh;
    }
    p{
      float:left;
      margin-left: 1.25vh;
      font-size: 1.25rem;
      margin-right: 1.25vh;
      font-family: 'Orbitron', sans-serif;

    }
    img {
      margin-left: 0.25vh;
      float: left;
    }
  }
  .purchase {
    display: flex;
    justify-content: center;
    background-color: #fd1e2d;
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
      font-family: 'Orbitron', sans-serif;
      color: black;
    }
  }
  .invalid {
    display: flex;
    justify-content: center;
    background-color: #808080;
    padding: 0.5rem 0.5rem;
    width: 7rem;
    border: #808080;
    border-radius: 2rem;
    text-align: center;
    transition: 0.3s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
    p {
      font-size: 1.5rem;
      font-family: 'Orbitron', sans-serif;
      color: black;
    }
  }

  .button__section {
    display: flex;
    justify-content: flex-end;
  }

  .errormsg {
    text-align: center;
    p{
      color: red;
      font-family: 'Orbitron', sans-serif;
    }
  }

  .successmsg{
    text-align: center;
    p{
      color: green;
      font-family: 'Orbitron', sans-serif;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 375px) {
    .transactions {
      .transaction {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
      }
    }
  }
  .button__section {
    display: flex;
    justify-content: center;
  }
`;

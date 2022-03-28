import React, { useContext, useState } from "react";
import styled from "styled-components";
import { getEllipsisTxt } from "../utils/helpers/formatters";
import { HiArrowNarrowRight } from "react-icons/hi";
import { cardStyles } from "./ReusableStyles";
import { Context } from "../context/Context";
import token from "../assets/gtoken-logo.png";

export default function Transfers() {
  const { currentAccount, tokenBuyFunction, error, successMsg } =
    useContext(Context);
  const [inputFieldChange, setInputFieldChange] = useState("");

  const changeInInputField = (e) => {
    setInputFieldChange(e.target.value);
  };

  const onSubmit = async () => {
    if (parseFloat(inputFieldChange) > 0.67) {
      await tokenBuyFunction(inputFieldChange);
    } else {
      window.alert("Minumum Purchase is 0.67BNB");
    }
  };

  const tokenAmount = inputFieldChange * 400;

  if (!currentAccount) {
    return (
      <Section>
        <div className="title">
          <h2>Buy $G102</h2>
        </div>
        <div className="transactions">
          <div className="transaction">
            <div className="transaction__title">
              <div className="transaction__title__details">
                <h3>Symbol : $G102</h3>
                <h3>Rate : $1 = 1 $G102 </h3>
                <h3>Token Address :</h3>
                <h3>
                  <a
                    href="https://testnet.bscscan.com/address/0x0c6Ce7d7AD2F4b3ba09704e69CB7aB7Ed6556764"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {getEllipsisTxt(
                      "0x0c6ce7d7ad2f4b3ba09704e69cb7ab7ed6556764"
                    )}
                    <HiArrowNarrowRight />
                  </a>
                </h3>
                <h3>Presale Contract :</h3>
                <h3>
                  <a
                    href="https://testnet.bscscan.com/address/0xEA91b782A72d734A81Ec171953301C52e264CfE7"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {getEllipsisTxt(
                      "0xEA91b782A72d734A81Ec171953301C52e264CfE7"
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
        <h2>Buy $G102</h2>
      </div>
      <div className="transactions">
        <div className="transaction">
          <div className="transaction__title">
            <div className="transaction__title__details">
              <h3>Symbol : $G102</h3>
              <h3>Rate : $1 = 1 $G102 </h3>
              <h3>Token Address :</h3>
              <h3>
                <a
                  href="https://testnet.bscscan.com/address/0x0c6Ce7d7AD2F4b3ba09704e69CB7aB7Ed6556764"
                  target="_blank"
                  rel="noreferrer"
                >
                  {getEllipsisTxt("0x0c6ce7d7ad2f4b3ba09704e69cb7ab7ed6556764")}
                  <HiArrowNarrowRight />
                </a>
              </h3>
              <h3>Presale Contract :</h3>
              <h3>
                <a
                  href="https://testnet.bscscan.com/address/0xEA91b782A72d734A81Ec171953301C52e264CfE7"
                  target="_blank"
                  rel="noreferrer"
                >
                  {getEllipsisTxt("0xEA91b782A72d734A81Ec171953301C52e264CfE7")}
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
        <p>{tokenAmount} $G102</p>
      </div>
      <div className="button__section">
        <button className="purchase" onClick={onSubmit}>
          <p>Buy</p>
        </button>
      </div>
      <div className="errormsg">{error && <p>{error}</p>}</div>
      <div className="successmsg">{successMsg && <p>{successMsg}</p>}</div>
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

  .button__section {
    display: flex;
    justify-content: flex-end;
  }

  .errormsg {
    p{
      color: red;
      font-family: 'Orbitron', sans-serif;
    }
  }

  .successmsg{
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

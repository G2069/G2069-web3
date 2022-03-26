import React, { useContext, useState } from "react";
import styled from "styled-components";
import { HiArrowNarrowRight } from "react-icons/hi";
import { cardStyles } from "./ReusableStyles";
import { Context } from "../context/Context";

export default function Transfers() {
  const { currentAccount, tokenBuyFunction,error, successMsg } = useContext(Context);
  const [inputFieldChange, setInputFieldChange] = useState(0);

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
  
  const tokenAmount = (inputFieldChange*400)

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
                  0x0c...66764 <HiArrowNarrowRight />
                </h3>
                <h3>Presale Contract :</h3>
                <h3>
                  0xCF3...8042 <HiArrowNarrowRight />
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
                0x0c...66764 <HiArrowNarrowRight />
              </h3>
              <h3>Presale Contract :</h3>
              <h3>
                0xCF3...8042 <HiArrowNarrowRight />
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div>
        <input
          value={inputFieldChange}
          placeholder="input BNB amount"
          onChange={changeInInputField}
        />
        <p>Token You Will Get: {tokenAmount}</p>
      </div>
      <div className="button__section">
        <button className="purchase" onClick={onSubmit}>
          <p>Buy</p>
        </button>
      </div>
      <div className="message">
        {error && (<p>{error}</p>)}
        {successMsg && (<p>{successMsg}</p>)}
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
      }
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

import React from "react";
import styled from "styled-components";
import { AiFillCalendar } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { VscFlame } from "react-icons/vsc";
import { FaLongArrowAltUp, FaLongArrowAltDown } from "react-icons/fa";
import { cardStyles } from "./ReusableStyles";

export default function FAQ() {
  return (
    <Section>
      <div className="title">
        <h2>Information</h2>
      </div>
      <div className="faqs">
        <div className="faq">
          <div className="info">
            <AiFillCalendar />
            <h4>
              Opening time: 15th April 2022, 00:00 UTC to 30th April 2022, 23:59
              UTC
            </h4>
          </div>
        </div>
        <div className="faq">
          <div className="info">
            <BsFillInfoCircleFill />
            <h4>Current Stage: Presale</h4>
          </div>
        </div>
        <div className="faq">
          <div className="info">
            <FaLongArrowAltDown />
            <h4>Minimum cap: 0.7 BNB</h4>
          </div>
        </div>
        <div className="faq">
          <div className="info">
            <FaLongArrowAltUp />
            <h4>Maximum cap: 135 BNB</h4>
          </div>
        </div>
        <div className="faq">
          <div className="info">
            <VscFlame />
            <h4>Total Supply: 100,000,000</h4>
          </div>
        </div>
      </div>
    </Section>
  );
}
const Section = styled.section`
  ${cardStyles};
  .title {
    h2 {
      color: #08ebff;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
    }
  }
  .faqs {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
    .faq {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-family: "Orbitron", sans-serif;
      letter-spacing: 0.1rem;
      .info {
        display: flex;
        gap: 1rem;
        align-items: center;
      }
      svg {
        font-size: 1.4rem;
      }
      h4 {
        font-size: 0.8rem;
      }
      &:nth-of-type(2) {
        border-top: 0.01rem solid #6c6e6e;
        border-bottom: 0.01rem solid #6c6e6e;
        padding: 0.8rem 0;
      }
      &:nth-of-type(4) {
        border-top: 0.01rem solid #6c6e6e;
        border-bottom: 0.01rem solid #6c6e6e;
        padding: 0.8rem 0;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    svg {
      font-size: 2rem !important;
    }
  }
`;

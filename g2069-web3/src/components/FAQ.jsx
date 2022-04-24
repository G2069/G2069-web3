import React from "react";
import styled from "styled-components";
import { AiFillCalendar } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { VscFlame } from "react-icons/vsc";
import { FaLongArrowAltUp, FaLongArrowAltDown } from "react-icons/fa";
import { cardStyles } from "./ReusableStyles";
import { useTranslation } from "react-i18next";

export default function FAQ() {
  const { t } = useTranslation();
  return (
    <Section>
      <div className="title">
        <h2>{t("information")}</h2>
      </div>
      <div className="faqs">
        <div className="faq">
          <div className="info">
            <AiFillCalendar />
            <h4>
            {t("openingtime")}: {t("openingdesc")}
            </h4>
          </div>
        </div>
        <div className="faq">
          <div className="info">
            <BsFillInfoCircleFill />
            <h4>{t("currentstage")}: {t("stagedesc")}</h4>
          </div>
        </div>
        <div className="faq">
          <div className="info">
            <FaLongArrowAltDown />
            <h4>{t("mincap")}: 0.1 BNB</h4>
          </div>
        </div>
        <div className="faq">
          <div className="info">
            <FaLongArrowAltUp />
            <h4>{t("maxcap")}: 50 BNB</h4>
          </div>
        </div>
        <div className="faq">
          <div className="info">
            <VscFlame />
            <h4>{t("totalsup")}: 100,000,000</h4>
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

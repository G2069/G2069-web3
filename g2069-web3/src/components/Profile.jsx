import React, { useContext } from "react";
import { getEllipsisTxt } from "../utils/helpers/formatters";
import styled from "styled-components";
import image from "../assets/profile.jpg";
import { cardStyles } from "./ReusableStyles";
import { Context } from "../context/Context";
import { useTranslation } from "react-i18next";

export default function Profile() {
  const { t } = useTranslation();
  const { currentAccount, individualTokenPurchased } = useContext(Context);
  if (!currentAccount) {
    return (
      <Section>
        <div className="image">
          <img src={image} alt="g2069 avatar" />
        </div>
        <div className="title">
          <h2>
            {t("connectdesc")}
          </h2>
        </div>
      </Section>
    );
  }
  return (
    <Section>
      <div className="image">
        <img src={image} alt="g2069 avatar" />
      </div>
      <div className="title">
        <h2>{getEllipsisTxt(currentAccount)}</h2>
      </div>
      <div className="info">
        <div className="container">
          <h5>{t("purchased")} :</h5>
          <h3>{individualTokenPurchased} $G102</h3>
        </div>
        <div className="container">
          <h5>{t("vestingadd")} :</h5>
          <h3>{t("vestingdesc")}</h3>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  ${cardStyles};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  .image {
    max-height: 10rem;
    overflow: hidden;
    border-radius: 20rem;
    img {
      height: 10rem;
      width: 10rem;
      object-fit: cover;
      border-radius: 20rem;
      transition: 0.5s ease-in-out;
    }
    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }
  .title {
    text-align: center;
    h2 {
      color: #08ebff;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
    }
    h5 {
      letter-spacing: 0.2rem;
    }
  }
  .info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .container {
      text-align: center;
      h5,
      h3 {
        font-family: "Orbitron", sans-serif;
        letter-spacing: 0.1rem;
        margin-bottom: 0.5rem;
      }
    }
  }
`;

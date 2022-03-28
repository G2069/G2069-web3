import React from "react";
import styled from "styled-components";
import { cardStyles } from "./ReusableStyles";
import thumbnail from "../assets/thumbnail-bighead.jpg";

export default function Media() {
  return (
    <Section>
      <div className="title">
        <h2>Launch Trailer</h2>
      </div>
      <div className="image">
        <a href="https://youtu.be/ohd_AMrgOjI" target="_blank" rel="noreferrer">
          <img className="img1" src={thumbnail} alt="G2069-Thumbnail" />
        </a>
      </div>
    </Section>
  );
}
const Section = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 20rem;
  ${cardStyles}
  .title {
    h2 {
      color: #08ebff;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
    }
  }
  .image {
    position: relative;
    align-items: center;
    margin-top: 5vh;
    .img1 {
      position: relative;
      height: 30vh;
      width: 50vh;
      overflow: hidden;
      z-index: 1;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
  }
`;

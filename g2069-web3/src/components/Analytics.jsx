import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { BsFillCalendar2WeekFill, BsPeopleFill } from "react-icons/bs";
import BnbLogo from "../assets/binance-coin.png";
import GLogo from "../assets/gtoken-logo.png";
import { cardStyles } from "./ReusableStyles";
import { numberWithCommas } from "../utils/helpers/formatters";
import { useTranslation } from "react-i18next";

const Analytics = () => {
  const { t } = useTranslation();
  const [isDesktop, setDesktop] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDesktop(window.innerWidth > 768);
    }
  }, []);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("July 15, 2022 08:00:00").getTime();

    interval.current = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        //stop our timer
        clearInterval(interval.current);
      } else {
        //update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  // componentDidMount
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });
  if (isDesktop) {
    return (
      <Section>
        <div className="analytic ">
          <div className="content">
            <h5>{t("totalcont")}</h5>
            <h3>{numberWithCommas(93)}</h3>
          </div>
          <div className="logo">
            <BsPeopleFill />
          </div>
        </div>
        <div className="analytic">
          <div className="logo">
            <img src={BnbLogo} alt="bnb" />
          </div>
          <div className="content">
            <h5>{t("bnbraised")}</h5>
            <h3>{numberWithCommas(51.8)} / 2,174</h3>
          </div>
        </div>
        <div className="analytic">
          <div className="logo">
            <img src={GLogo} alt="bnb" />
          </div>
          <div className="content">
            <h5>{t("sold")}</h5>
            <h3>{numberWithCommas(23828)} / 1,000,000</h3>
          </div>
        </div>
        <div className="analytic ">
          <div className="content">
            <h5>{t("countdown")}</h5>
            <h3>
              {timerDays}:{timerHours}:{timerMinutes}:{timerSeconds}
            </h3>
          </div>
          <div className="logo">
            <BsFillCalendar2WeekFill />
          </div>
        </div>
      </Section>
    );
  }
  return (
    <Section>
      <div className="analytic ">
        <div className="content">
          <h5>{t("totalcont")}</h5>
          <h3>{t("reqweb")}</h3>
        </div>
        <div className="logo">
          <BsPeopleFill />
        </div>
      </div>
      <div className="analytic">
        <div className="logo">
          <img src={BnbLogo} alt="bnb" />
        </div>
        <div className="content">
          <h5>{t("bnbraised")}</h5>
          <h3>{t("reqweb")}</h3>
        </div>
      </div>
      <div className="analytic">
        <div className="logo">
          <img src={GLogo} alt="bnb" />
        </div>
        <div className="content">
          <h5>{t("sold")}</h5>
          <h3>{t("reqweb")}</h3>
        </div>
      </div>
      <div className="analytic ">
        <div className="content">
          <h5>{t("countdown")}</h5>
          <h3>
            {timerDays}:{timerHours}:{timerMinutes}:{timerSeconds}
          </h3>
        </div>
        <div className="logo">
          <BsFillCalendar2WeekFill />
        </div>
      </div>
    </Section>
  );
};

export default Analytics;

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  .analytic {
    ${cardStyles};
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    transition: 0.5s ease-in-out;
    &:hover {
      background-color: #08ebff;
      color: black;
      svg {
        color: white;
      }
      h5 {
        color: black !important;
      }
    }
    .logo {
      background-color: black;
      border-radius: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1.5rem;
      svg {
        font-size: 1.5rem;
      }
      img {
        width: 25px;
        height: 25px;
      }
    }
    .content {
      h5 {
        font-family: "Permanent Marker", cursive;
        color: #08ebff;
        letter-spacing: 0.2rem;
        margin-bottom: 0.5rem;
      }
      h3 {
        font-family: "Orbitron", sans-serif;
        letter-spacing: 0.1rem;
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    .analytic {
      &:nth-of-type(3),
      &:nth-of-type(4) {
        flex-direction: row-reverse;
      }
    }
  }
`;

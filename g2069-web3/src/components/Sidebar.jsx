import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  MdSpaceDashboard,
  MdOutlineWebAsset,
  MdPeopleAlt,
} from "react-icons/md";
import { RiSwordLine, RiQuestionAnswerLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { BsBook } from "react-icons/bs";
import scrollreveal from "scrollreveal";
import logoimage from "../assets/logo.png";
import { useTranslation } from "react-i18next";

const lngs = {
  en: { nativeName: "English" },
  zh: { nativeName: "Chinese" },
};

export default function Sidebar() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("language");
  const [currentLink, setCurrentLink] = useState(1);
  const [navbarState, setNavbarState] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", () => setNavbarState(false));

  const handleLangChange = (evt) => {
    const lang = evt.target.value;
    console.log(lang);
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    const sr = scrollreveal({
      origin: "left",
      distance: "80px",
      duration: 1000,
      reset: false,
    });

    sr.reveal(
      `
          .brand,
          .links>ul>li:nth-of-type(1),
      .links>ul>li:nth-of-type(2),
      .links>ul>li:nth-of-type(3),
      .links>ul>li:nth-of-type(4),
      .links>ul>li:nth-of-type(5),
      .links>ul>li:nth-of-type(6),
      `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);

  return (
    <>
      <Section>
        <div className="top">
          <div className="brand">
            <img src={logoimage} alt="G2069 logo" />
          </div>
          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu
                onClick={(e) => {
                  e.stopPropagation();
                  setNavbarState(true);
                }}
              />
            )}
          </div>
          <div className="links">
            <ul>
              <li
                className={currentLink === 1 ? "active" : "none"}
                onClick={() => setCurrentLink(1)}
              >
                <a href="/">
                  <MdSpaceDashboard />
                  <span>{t("dashboard")}</span>
                </a>
              </li>
              <li
                className={currentLink === 2 ? "active" : "none"}
                onClick={() => setCurrentLink(2)}
              >
                <a
                  href="https://www.g2069.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MdOutlineWebAsset />
                  <span> {t("website")}</span>
                </a>
              </li>
              <li
                className={currentLink === 3 ? "active" : "none"}
                onClick={() => setCurrentLink(3)}
              >
                <a
                  href="https://www.g2069.com/intro"
                  target="_blank"
                  rel="noreferrer"
                >
                  <RiSwordLine />
                  <span>{t("intro")}</span>
                </a>
              </li>
              <li
                className={currentLink === 4 ? "active" : "none"}
                onClick={() => setCurrentLink(4)}
              >
                <a
                  href="https://docs.g2069.com/fundamentals/introduction"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsBook />
                  <span>{t("whitepaper")}</span>
                </a>
              </li>
              <li
                className={currentLink === 5 ? "active" : "none"}
                onClick={() => setCurrentLink(5)}
              >
                <a
                  href="https://linktr.ee/g2069"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MdPeopleAlt />
                  <span>{t("social")}</span>
                </a>
              </li>
              <li
                className={currentLink === 6 ? "active" : "none"}
                onClick={() => setCurrentLink(6)}
              >
                <a
                  href="https://docs.g2069.com/ido/presale"
                  target="_blank"
                  rel="noreferrer"
                >
                  <RiQuestionAnswerLine />
                  <span>{t("faq")}</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="custom-dropdown">
            <select onChange={handleLangChange} value={language}>
              <option value="en">EN</option>
              <option value="zh">ZH</option>
            </select>
          </div>
        </div>
      </Section>
      <ResponsiveNav state={navbarState} className={navbarState ? "show" : ""}>
        <div className="responsive__links">
          <ul>
            <li
              className={currentLink === 1 ? "active" : "none"}
              onClick={() => setCurrentLink(1)}
            >
              <a href="/">
                <MdSpaceDashboard />
                <span>{t("dashboard")}</span>
              </a>
            </li>
            <li
              className={currentLink === 2 ? "active" : "none"}
              onClick={() => setCurrentLink(2)}
            >
              <a href="https://www.g2069.com/" target="_blank" rel="noreferrer">
                <MdOutlineWebAsset />
                <span> {t("website")}</span>
              </a>
            </li>
            <li
              className={currentLink === 3 ? "active" : "none"}
              onClick={() => setCurrentLink(3)}
            >
              <a
                href="https://www.g2069.com/intro"
                target="_blank"
                rel="noreferrer"
              >
                <RiSwordLine />
                <span>{t("intro")}</span>
              </a>
            </li>
            <li
              className={currentLink === 4 ? "active" : "none"}
              onClick={() => setCurrentLink(4)}
            >
              <a
                href="https://docs.g2069.com/fundamentals/introduction"
                target="_blank"
                rel="noreferrer"
              >
                <BsBook />
                <span>{t("whitepaper")}</span>
              </a>
            </li>
            <li
              className={currentLink === 5 ? "active" : "none"}
              onClick={() => setCurrentLink(5)}
            >
              <a
                href="https://linktr.ee/g2069"
                target="_blank"
                rel="noreferrer"
              >
                <MdPeopleAlt />
                <span>{t("social")}</span>
              </a>
            </li>
            <li
              className={currentLink === 6 ? "active" : "none"}
              onClick={() => setCurrentLink(6)}
            >
              <a
                href="https://docs.g2069.com/ido/presale"
                target="_blank"
                rel="noreferrer"
              >
                <RiQuestionAnswerLine />
                <span>{t("faq")}</span>
              </a>
            </li>
            <li>
              {Object.keys(lngs).map((lng) => (
                <button
                  key={lng}
                  type="submit"
                  onClick={() => i18n.changeLanguage(lng)}
                  className="language-select"
                >
                  {lngs[lng].nativeName}
                </button>
              ))}
            </li>
          </ul>
        </div>
      </ResponsiveNav>
    </>
  );
}
const Section = styled.section`
  position: fixed;
  left: 0;
  background-color: #212121;
  height: 100vh;
  width: 18vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  gap: 2rem;
  font-family: "Orbitron", sans-serif;
  .top {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;

    .toggle {
      display: none;
    }
    .brand {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      img {
        width: 80%;
        height: 80%;
      }
    }
    .links {
      display: flex;
      justify-content: center;
      ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li {
          padding: 0.6rem 1rem;
          border-radius: 0.6rem;
          &:hover {
            background-color: #08ebff;
            a {
              color: black;
            }
          }
          a {
            text-decoration: none;
            display: flex;
            gap: 1rem;
            color: white;
          }
        }
        .active {
          background-color: #08ebff;
          a {
            color: black;
          }
        }
      }
    }
    .custom-dropdown {
      display: flex;
      justify-content: center;
    }
    .custom-dropdown select {
      font-family: "Orbitron", sans-serif;
      background-color: #08ebff;
      color: black;
      font-size: inherit;
      padding: 0.5em;
      padding-right: 2.5em;
      border: 0;
      margin: 0;
      border-radius: 3px;
      text-indent: 0.01px;
      text-overflow: "";
      -webkit-appearance: button; /* hide default arrow in chrome OSX */
    }
  }

  .logout {
    padding: 0.3rem 1rem;
    border-radius: 0.6rem;
    font-family: "Orbitron", sans-serif;
    &:hover {
      background-color: #da0037;
    }
    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: white;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    position: initial;
    width: 100%;
    height: max-content;
    padding: 1rem;
    .top {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0 1rem;
      .toggle {
        display: block;
        color: white;
        z-index: 99;
        svg {
          font-size: 1.4rem;
        }
      }
      .brand {
        gap: 1rem;
        justify-content: flex-start;
        img {
          width: 40%;
        }
      }
      .custom-dropdown {
        display: none;
      }
    }
    .top > .links,
    .logout {
      display: none;
    }
  }
`;

const ResponsiveNav = styled.div`
  font-family: "Orbitron", sans-serif;
  position: fixed;
  right: -10vw;
  top: 0;
  z-index: 10;
  background-color: black;
  height: 100vh;
  width: ${({ state }) => (state ? "60%" : "0%")};
  transition: 0.4s ease-in-out;
  display: flex;
  opacity: 0;
  visibility: hidden;
  padding: 1rem;
  .responsive__links {
    ul {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 3rem;
      li {
        padding: 0.6rem 1rem;
        border-radius: 0.6rem;
        &:hover {
          background-color: #08ebff;
          a {
            color: black;
          }
        }
        a {
          text-decoration: none;
          display: flex;
          gap: 1rem;
          color: white;
        }
        .language-select {
          padding: 0.3rem 1rem;
          border-radius: 0.6rem;
          font-family: "Orbitron", sans-serif;
          background-color: #08ebff;
        }
      }
      .active {
        background-color: #08ebff;
        a {
          color: black;
        }
      }
    }
  }
`;

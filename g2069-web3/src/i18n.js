import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          dashboard: "Dashboard",
          website: "Main Website",
          intro: "Intro",
          whitepaper: "Whitepaper",
          social: "Social Media",
          faq: "FAQ",
          hi: "Hi,",
          welcome: "Welcome to",
          login: "Login with Metamask",
          airdrop: "Airdrop",
          amount: "Amount",
          details: "Details",
          balance: "Balance",
          claim: "Claim",
          buy: "Buy",
          ticker: "Ticker",
          rate: "Rate",
          tokenadd: "Token Address",
          contractadd: "Contract Address",
          inputamount: "Enter BNB Amount",
          connectdesc:
            "Connect Your Wallet to Kick Start Your Journey in G-2069 Metaverse",
          purchased: "Purchased",
          vestingadd: "Vesting Address",
          vestingdesc: "Token will start vesting after seed round end.",
          information: "INFORMATION",
          openingtime: "Opening Time",
          openingdesc: "15th May 2022, 00:00 UTC to 31st May 2022, 23:59 UTC",
          currentstage: "Current Stage",
          stagedesc: "Seed Round",
          mincap: "Minimum Cap",
          maxcap: "Maximum Cap",
          totalsup: "Total Supply",
          totalcont: "TOTAL CONTRIBUTORS",
          bnbraised: "BNB RAISED",
          sold: "$G102 SOLD",
          countdown: "COUNTDOWN TO PRESALE",
          reqweb: "Require Web3 to load"
        },
      },
      zh: {
        translation: {
          dashboard: "面板",
          website: "主页",
          intro: "简介",
          whitepaper: "白皮书",
          social: "社区",
          faq: "常见问题",
          hi: "您好,",
          welcome: "欢迎来到",
          login: "链接钱包",
          airdrop: "空投",
          amount: "数量",
          details: "详情",
          balance: "余额",
          claim: "领取",
          buy: "购买",
          ticker: "代码",
          rate: "比率",
          tokenadd: "代币地址",
          contractadd: "合约地址",
          inputamount: "输入BNB数量",
          connectdesc: "链接钱包以进入G-2069元宇宙",
          purchased: "已购买数量",
          vestingadd: "上锁地址",
          vestingdesc: "上锁地址将在种植投资完成后发布",
          information: "详情",
          openingtime: "时间",
          openingdesc: "2022年5月15日 00:00UTC至2022年5月31日 23:59UTC",
          currentstage: "阶段",
          stagedesc: "种子投资",
          mincap: "最低购买量",
          maxcap: "最大购买量",
          totalsup: "总供应",
          totalcont: "总投资者",
          bnbraised: "已筹得BNB",
          sold: "已售出$G102",
          countdown: "倒计时",
          reqweb: "请链接钱包"
        },
      },
    },
  });

export default i18n;

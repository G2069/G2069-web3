import React, { useEffect, useState } from "react";
import Web3 from "web3";
import { preSeedAbi, preSeedAddress } from "../utils/constants";

export const Context = React.createContext();

const web3 = new Web3(window.ethereum);

export const ContextProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState(0x0);
  const [successMsg, setSuccessMsg] = useState("");
  const [error, setError] = useState("");
  const [preSeedTokenSold, setPreSeedTokenSold] = useState(0);
  const [preSeedContributors, setPreSeedContributors] = useState(0);
  const [fundRaised, setFundRaised] = useState(0);
  const [individualTokenPurchased, setIndividualTokenPurchased] = useState(0);
  const [contractInstance, setContractInstance] = useState({});

  //Check Wallet Connect//
  const checkIfWalletIsConnected = async () => {
    try {
      if (!window.ethereum) return alert("Please install metamask!");
      const accounts = await web3.eth.getAccounts();
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      } else {
        console.log("No account found!");
      }
    } catch (error) {
      console.log(error);
      throw new Error("No window.ethereum object.");
    }
  };
  //----End of Check Wallet Connect-----//

  //Connect Wallet//
  const connectWallet = async () => {
    if (
      typeof window !== "undefined" &&
      typeof window.ethereum !== "undefined"
    ) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        window.location.reload();
      } catch (error) {
        setError(error.message);
      }
    } else {
      console.log("Please Install Metamask!");
    }
  };
  //----End of Connect Wallet-----//

  //Account Handler//
  const logAccounts = (accounts) => {
    console.log(`Accounts:\n${accounts.join("\n")}`);
    window.location.reload();
  };

  //-------End of Account Handler--------//

  //Load BlockChain Data//
  const loadBlockChainData = async () => {
    const accounts = await web3.eth.getAccounts();
    if (accounts.length) {
      setCurrentAccount(accounts[0]);
    } else {
      console.log("No account found!");
    }
    const networkId = await web3.eth.net.getId();
    if (networkId === 97) {
      //Presale Contract//
      const preSeedContract = new web3.eth.Contract(preSeedAbi, preSeedAddress);
      setContractInstance(preSeedContract);
      //-------------End of Presale Contract-------------//

      //Individual Token Purchased//
      let tokenPurchased = await preSeedContract.methods
        .tokenPurchases(accounts[0])
        .call();
      const tokenPurchasedInEth = web3.utils.fromWei(tokenPurchased, "ether");
      setIndividualTokenPurchased(tokenPurchasedInEth);
      //-----------End of Individual Token Purchased---------------//

      //--------End of Presale Contract--------//
    } else {
      window.alert("Please Connect To Binance Smart Chain");
    }
  };
  //--------------------//

  //Smart Contract Call Handler//
  const callHandler = async () => {
    const networkId = await web3.eth.net.getId();
    if (networkId === 97) {
      const preSeedContract = new web3.eth.Contract(preSeedAbi, preSeedAddress);
      //token sold//
      let tokenSold = await preSeedContract.methods
        .totalTokensPurchased()
        .call();
      const tokenSoldInDecimals = web3.utils.fromWei(tokenSold, "ether");
      setPreSeedTokenSold(tokenSoldInDecimals);
      //----End of Token Sold-----//

      //Contributors//
      const contributors = await preSeedContract.methods
        .totalBeneficiaries()
        .call();
      setPreSeedContributors(contributors);
      //-----End of Contributors-------//

      //BNB Raised//
      let bnbRaised = await preSeedContract.methods.weiRaised().call();
      const bnbRaisedInEth = web3.utils.fromWei(bnbRaised, "ether");
      setFundRaised(bnbRaisedInEth);
      //-----End of BNB Raised-----//
    } else {
      window.alert("Please Connect To Binance Smart Chain");
    }
  };
  //------------End of Smart Contract Call Handler---------------//

  //Purchase Function//
  const tokenBuyFunction = async (a) => {
    try {
      const accounts = await web3.eth.getAccounts();
      if (accounts.length === 0) {
        return;
      }
      setCurrentAccount(accounts[0]);
      const amountOfEthInwei = web3.utils.toWei(a.toString());
      await contractInstance.methods
        .buyTokens(accounts[0])
        .send({ from: currentAccount, value: amountOfEthInwei });
      setSuccessMsg("Purchase Success!");
      loadBlockChainData();
    } catch (error) {
      setError(error.message);
    }
  };
  //-----------------//

  useEffect(() => {
    checkIfWalletIsConnected();
    callHandler();
    if (currentAccount) loadBlockChainData();
    window.ethereum.on("accountsChanged", logAccounts);
    const clearAccount = () => {
      console.log(clearAccount);
      setCurrentAccount("0x0");
      window.location.reload();
    };
    window.ethereum.on("disconnect", clearAccount);
    return () => {
      window.ethereum.removeListener("accountsChanged", logAccounts);
    };
  }, [currentAccount, individualTokenPurchased]);
  return (
    <Context.Provider
      value={{
        connectWallet,
        currentAccount,
        preSeedTokenSold,
        individualTokenPurchased,
        preSeedContributors,
        fundRaised,
        loadBlockChainData,
        error,
        tokenBuyFunction,
        successMsg,
      }}
    >
      {children}
    </Context.Provider>
  );
};

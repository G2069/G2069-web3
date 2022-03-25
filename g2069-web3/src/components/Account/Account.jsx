import React, { useState } from "react";
import { useMoralis } from "react-moralis";
import { getEllipsisTxt } from "../../utils/helpers/formatters";
import { connectors } from "./config";

function Account() {
  const { authenticate, isAuthenticated, account, chainId, logout } =
    useMoralis();

  if (!isAuthenticated) {
    return (
      <>
        <button
          onClick={() => authenticate({ signingMessage: "Connect to G2069" })}
        >
          Connect Wallet
        </button>
      </>
    );
  }

  return (
    <>
      <button
        onClick={async () => {
          await logout();
          window.localStorage.removeItem("connectorId");
        }}
      >
        Disconnect Wallet
      </button>
    </>
  );
}

export default Account;

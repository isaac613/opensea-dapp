import "./App.css";
import { ethers } from "ethers";
import { useState } from "react";

function App() {
  const [account, setAccount] = useState("");

  const connect = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    let res = await provider.send("eth_requestAccounts", []);
    setAccount(res[0]);
  };

  const getData = (_account) => {
    const options = { method: "GET", headers: { Accept: "application/json" } };

    fetch(
      `https://api.opensea.io/api/v1/collections?asset_owner=${_account}offset=0&limit=50`,
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };
  return (
    <div className="App">
      <button onClick={connect}>connect</button>
      <button onClick={getData}>Get Data</button>
    </div>
  );
}

export default App;

import "./App.css";
import { ethers } from "ethers";
import { useState } from "react";

function App() {
  const [account, setAccount] = useState("");
  const [data, setData] = useState([]);

  const connect = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    let res = await provider.send("eth_requestAccounts", []);
    setAccount(res[0]);
    getData(res[0]);
  };

  console.log(data);
  const getData = (_account) => {
    const options = { method: "GET", headers: { Accept: "application/json" } };

    fetch(
      `https://api.opensea.io/api/v1/assets?owner=${_account}&order_direction=desc&limit=20&include_orders=false`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setData(response.assets);
        console.log(response);
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="App">
      <p>{account}</p>
      <button onClick={connect}>connect</button>
      <button onClick={getData}>Get Data</button>
    </div>
  );
}

export default App;

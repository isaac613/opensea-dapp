import "./App.css";
import { ethers } from "ethers";
import { useState } from "react";
import Navbar from "./components/Navbar";

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
      <div className="navbar">
        <Navbar />
        <p>{account}</p>
        <button onClick={connect}>connect</button>
      </div>
      {data.map((nft) => {
        return (
          <div className="box">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className="content">
              <img
                alt="nft image"
                src={nft.image_thumbnail_url}
                width="100px"
                height="100px"
              />
              <p>{nft.name}</p>
              <p>{nft.tokenID}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;

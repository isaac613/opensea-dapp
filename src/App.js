import "./App.css";
import { ethers } from "ethers";

const getData = () => {
  const options = { method: "GET", headers: { Accept: "application/json" } };

  fetch("https://api.opensea.io/api/v1/collections?offset=0&limit=50", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};

function App() {
  return (
    <div className="App">
      <button onClick={getData}>Get Data</button>
    </div>
  );
}

export default App;

import "./App.css";

const getData = () => {
  const options = { method: "GET", headers: { Accept: "application/json" } };

  fetch("https://api.opensea.io/api/v1/collections?offset=0&limit=300", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};

function App() {
  return (
    <div className="App">
      <button onClick={getData}></button>
    </div>
  );
}

export default App;

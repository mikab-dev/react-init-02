import React, { useEffect, useState } from "react";
import axios from "axios";
import SimpsonCard from "./components/SimpsonCard";
import "./App.css";

function App() {
  const [simpson, setSimpson] = useState([]);
  const [loading, setLoading] = useState(false);

  const nextSimpson = () => {
    const apiUrl = "https://simpsons-quotes-api.herokuapp.com/quotes";
    setLoading(true);

    axios
      .get(apiUrl)
      .then((response) => response.data)
      .then((data) => {
        setSimpson(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(nextSimpson, []);

  return (
    <div className="wrapper">
      {loading && <p>Loading....</p>}
      {<SimpsonCard simpson={simpson} />}
      <button className="btn" onClick={nextSimpson}>
        Next
      </button>
    </div>
  );
}

export default App;

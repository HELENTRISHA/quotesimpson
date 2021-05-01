import "./styles.css";

import { useState } from "react";
import "./App.css";

function App() {
  const [quote, setquote] = useState("");

  const getSimpsonQuote = () => {
    fetch("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then((res) => res.json())
      .then((data) => setquote(data[0]));
  };

  return (
    <div className="App">
      <button onClick={getSimpsonQuote}>Click here</button>
      <h1>{quote.quote}</h1>
      <h2>{quote.character}</h2>
      <img src={quote.image} alt="simpson" />
    </div>
  );
}

export default App;

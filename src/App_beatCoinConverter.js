import { useState, useEffect } from "react";

function App() {
  const [isLoading, setLodingState] = useState(true);
  const [coins, setCoins] = useState([]);
  const [amount, setAmount] = useState(0);
  const [coinRate, setCoinRate] = useState(0);
  const [coinYouGet, setCoinYouGet] = useState(0);

  useEffect(() => {
    fetch("http://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLodingState(false);
      });
  }, []);

  const onChange = (e) => {
    setAmount(e.target.value);
  };

  const onSlect = (e) => {
    setCoinRate(e.target.value);
  };

  console.log(amount);
  useEffect(() => {
    if (coinRate === -1) {
      return;
    }
    setCoinYouGet(amount / coinRate);
  }, [amount]);

  console.log(coinRate);
  useEffect(() => {
    if (coinRate === 0) {
      return;
    }
    setCoinYouGet(amount / coinRate);
  }, [coinRate]);
  return (
    <div>
      <h1>The Coins({coins.length})</h1>
      {isLoading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={onSlect}>
          <option value={0} key={-1}>
            선택
          </option>
          {coins.map((coin, index) => (
            <option value={coin.quotes.USD.price} key={index}>
              {coin.name}({coin.symbol}): ${Math.round(coin.quotes.USD.price)}
              USD
            </option>
          ))}
        </select>
      )}
      <input
        type="number"
        value={amount}
        placeholder="How much money you invest"
        onChange={onChange}
      />
      <label htmlFor="coinYouGet">You get appromixemtly : </label>
      <input
        type="number"
        id="coinYouGet"
        value={Math.round(coinYouGet)}
        disabled
      />
      EA
    </div>
  );
}

export default App;

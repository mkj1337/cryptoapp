import './style.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';

// Components
import { SingleCrypto } from './components/SingleCrypto/SingleCrypto';

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchCrypto = async () => {
      const { data } = await axios.get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      );
      setCoins(data);
    };
    fetchCrypto();
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };


  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <div className="container">
        <div className="search">
          <h1>Search a Currency</h1>
          <input type="text" onChange={handleChange} />
        </div>
        <div className="headers">
          <div className="name">
            name
          </div>
          <div className="symbol">symbol</div>
          <div className="price">price</div>
          <div className="volume">24h volume</div>
          <div className="day">day</div>
          <div className="market">market cap</div>
        </div>
        <div className="cryptoTable">
          {filteredCoins.map((coin) => (
            <SingleCrypto coin={coin} key={coin.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

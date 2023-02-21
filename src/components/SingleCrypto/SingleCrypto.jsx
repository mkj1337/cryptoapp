import './SingleCrypto.scss';

export const SingleCrypto = ({ coin }) => {
  const {
    id,
    image,
    name,
    symbol,
    current_price,
    total_volume,
    price_change_percentage_24h,
    market_cap,
  } = coin;
  return (
    <div className="singleCrypto">
      <div className="name">
        <img src={image} alt="" />
        <a href={`https://www.coingecko.com/en/coins/${id}`} target="_blank">
          <h2>{name}</h2>
        </a>
      </div>
      <span className="symbol">{symbol}</span>
      <span className="price">${current_price}</span>
      <span className="volume">${total_volume.toLocaleString()}</span>
      <span
        className={`priceChange ${
          price_change_percentage_24h > 0 ? 'profit' : 'loss'
        }`}
      >
        {price_change_percentage_24h.toFixed(2)}%
      </span>
      <span className="marketCap">{market_cap.toLocaleString()}</span>
    </div>
  );
};

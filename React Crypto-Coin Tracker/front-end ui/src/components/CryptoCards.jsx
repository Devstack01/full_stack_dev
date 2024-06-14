import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

/* {
    Name: "Bitcoin",
    Price: "$59789.00",
    MarketCap: "$1,175,931,107,572",
    Volume: "$34,395,407,507",
    Change: "-6.25%",
    Icon: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=032"
} */
const CryptoCards = (props) => {
    const handleAddWatchlist = () => {
        alert(`Add to Watchlist`)
    }
 console.log(`card data ${JSON.stringify(props)}`);
 return <>
  <div className="coin-menu"> 
                    <img 
                    src= {`https://s2.coinmarketcap.com/static/img/coins/64x64/${props.id}.png`}
                    alt={props.name} 
                    width="50" 
                    height="50"/>
                    <h2>{props.name}</h2>
                     {/* <p>Current Price: {props.Price}</p>
                     <p>Market Cap: ${props.MarketCap}</p>
                     <p>24th Volume: ${props.Volume}</p>
                     <p>24th Change: ${props.Change}</p> */}
                     <p>Current Price: ${props.quote.USD.price.toFixed(2)}</p>
                     <p>Market Cap: ${props.quote.USD.market_cap.toLocaleString()}</p>
                     <p>24th Volume: ${props.quote.USD.volume_24h.toLocaleString()}</p>
                     <p>24th Change: {props.quote.USD.percent_change_24h.toFixed(2)}%</p>
                     <button style={{height:40, width:40}} onClick={handleAddWatchlist}><i class="fa-solid fa-heart"></i></button>
                     </div>
                     </>
}

export default CryptoCards;
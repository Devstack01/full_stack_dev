import React from 'react'

/* {
    Name: "Bitcoin",
    Price: "$59789.00",
    MarketCap: "$1,175,931,107,572",
    Volume: "$34,395,407,507",
    Change: "-6.25%",
    Icon: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=032"
} */
const CryptoCards = (props) => {
/*   console.log(`card data ${JSON.stringify(props)}`)
*/  return <>
  <div className="coin-menu"> 
                    { <img src={props.Icon} alt={props.name}></img> }
                    <h2>{props.name}</h2>
                     <p>Current Price: {props.Price}</p>
                     <p>Market Cap: ${props.MarketCap}</p>
                     <p>24th Volume: ${props.Volume}</p>
                     <p>24th Change: ${props.Change}</p>
                     </div>
                     </>
}

export default CryptoCards;
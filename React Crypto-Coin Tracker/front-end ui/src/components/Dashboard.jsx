import React,{useState, useEffect} from "react"; 
import { coinMarketCapApiKey, coinMarketCapApiUrl } from "../common/constants";
import CryptoSearchPanel from "./CryptoSearchPanel";
import CryptoCards from "./CryptoCards";

/* const cryptoCoins = [
    {
    Name: "Bitcoin",
    Price: "$59789.00",
    MarketCap: "$1,175,931,107,572",
    Volume: "$34,395,407,507",
    Change: "-6.25%",
    Icon: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=032"
},
{
    Name: "Ethereum",
    Price: "$2981.53",
    MarketCap: "$363,893,889,865",
    Volume: "$19,349,023,571",
    Change: "-6.53%",
    Icon: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=032"
},
{
    Name: "Tether",
    Price: "$1.00",
    MarketCap: "$110,503,849,633",
    Volume: "$43,404,519,853",
    Change: "-0.06%",
    Icon: "https://cryptologos.cc/logos/tether-usdt-logo.png?v=032"
},
{
    Name: "BNB",
    Price: "$568.22",
    MarketCap: "$87,344,440,730",
    Volume: "$2,030,004,641",
    Change: "-4.32%",
    Icon: "https://cryptologos.cc/logos/bnb-bnb-logo.png?v=032"
},
{
    Name: "Solana",
    Price: "$125.16",
    MarketCap: "$56,090,533,555",
    Volume: "$3,814,576,230",
    Change: "-8.69%",
    Icon: "https://cryptologos.cc/logos/solana-sol-logo.png?v=032"
},
{
    Name: "USDC",
    Price: "$1.00",
    MarketCap: "$33,117,668,058",
    Volume: "$9,142,246,288",
    Change: "-0.05%",
    Icon: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=032"
},
{
    Name: "Lido Staked Ether",
    Price: "$2979.29",
    MarketCap: "$27,809,872,091",
    Volume: "$190,667,935",
    Change: "-6.59%",
    Icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/8085.png"
},
{
    Name: "XRP",
    Price: "$0.05",
    MarketCap: "$27,600,286,993",
    Volume: "$1,264,709,986",
    Change: "-2.62%",
    Icon: "https://s3.coinmarketcap.com/static-gravity/image/79ada5fd9cb048f799ed40d4d24c1f92.png"
},
{
    Name: "Dogecoin",
    Price: "$0.13",
    MarketCap: "$18,691,929,494",
    Volume: "$1,458,672,036",
    Change: "-9.63%",
    Icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/74.png"
},
{
    Name: "Toncoin",
    Price: "$5.06",
    MarketCap: "$17,598,887,507",
    Volume: "264,974,720",
    Change: "-5.64%",
    Icon: "https://s3.coinmarketcap.com/static/img/portraits/6304d4f7dcf54d0fb59743ba.png"
},
{
    Name: "Cardano",
    Price: "$0.44",
    MarketCap: "$15,516,248,443",
    Volume: "$419,167,968",
    Change: "-4.20%",
    Icon: "https://s3.coinmarketcap.com/static-gravity/image/4aec70f6f1254e4f89650cc68ae49f3c.png"
},
{
    Name: "Shiba Inu",
    Price: "$0.00",
    MarketCap: "$12,814,447,478",
    Volume: "$846,846,402",
    Change: "-9.46%",
    Icon: "https://s3.coinmarketcap.com/static-gravity/image/9dac2cd700b746fda0444282ff49dd32.png"
},
{
    Name: "Avalanche",
    Price: "$32.46",
    MarketCap: "$12,306,085,737",
    Volume: "$530,066,236",
    Change: "-7.17%",
    Icon: "https://s3.coinmarketcap.com/static-gravity/image/dcbda7884cf04dbeb498ba96cd7180a2.jpeg"
},
{
    Name: "TRON",
    Price: "$0.12",
    MarketCap: "$10,507,109,220",
    Volume: "$593,569,452",
    Change: "0.85%",
    Icon: "https://s3.coinmarketcap.com/static/img/portraits/62837c68ab0e763d5f77e9a6.png"
},
{
    Name: "Wrapped Bitcoin",
    Price: "$59695.00",
    MarketCap: "$9,267,254,036",
    Volume: "$323,496,308",
    Change: "-6.34%",
    Icon: "https://s3.coinmarketcap.com/static-gravity/image/243faa6d13484faf9e0f5e4af10993a2.png"
},
{
    Name: "Polkadot",
    Price: "$6.43",
    MarketCap: "$8,714,266,561",
    Volume: "$304,425,760",
    Change: "-2.32%",
    Icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/6636.png"
},
{
    Name: "Bitcoin Cash",
    Price: "$424.11",
    MarketCap: "$8,363,601,270",
    Volume: "$456,932,589",
    Change: "1.89%",
    Icon: "https://s3.coinmarketcap.com/static-gravity/image/26bd6cbf3c074ac2bb04d4d6ba2a8e34.png"
},
]; */
 
// const bitCoin = cryptoCoins[0]; 

const Dashboard = () => {
    const[coinData, setCoinData] = useState([]);
    const[filterData, setFilterData] = useState([]);
    const[sortType, setSortType] = useState('market_cap');
    const[isLoading, setIsLoading] = useState(true);
    const[error, setError] = useState(null); 
    const handleSortType = (sortType) => {
        console.log(`sort type changed...${sortType}`);
        setSortType(sortType);
    }
    const handleSearch = (searchText) =>{
        if (searchText === ""){
            alert(`Enter a crypto coin to search`)
            setFilterData(coinData);
            return;
        } 
        const filterCoin = coinData?.filter(coin => coin.name.toLowerCase().includes(searchText.toLowerCase()))
                                    .sort((a,b) =>{
                                        const aValue = a.quote.USD[sortType];
                                        const bValue = b.quote.USD[sortType];
                                        return bValue - aValue;
                                    });
                                    
        console.log(filterCoin);
        setFilterData(filterCoin);
    }
    useEffect(() => {
        console.log(`component mounted...`);
        fetchCoinData();
    },[])
const fetchCoinData = async() =>{
        console.log(`fetach data...`);
        try {
            const response = await fetch(coinMarketCapApiUrl,{
                headers: {
                    'X-CMC_PRO_API_KEY': coinMarketCapApiKey
                },
                params: {
                    start: 1,
                    limit: 10,
                    convert: 'USD'
                },
            });
            if (!response.ok){
                throw new Error(`There was an error loading data...`);
            }
        const rawData = await response.json();
        console.log(`coin maeket data: ${JSON.stringify(rawData)}`)
        setCoinData(rawData.data);
        setFilterData(rawData.data);
        } catch (error) {
            setError(error);
        }
        finally {
            setIsLoading(false);
        }
        
    }
    if (isLoading) {
        return <p style={{textAlign: "center"}}>Loading...</p>
    }
    if (error) {
        return <p style={{textAlign: "center"}}>{error.message}</p>
    }
    return <>
              <div className="wrapper">
               <h1>Crypto Coin Tracker</h1>
               <CryptoSearchPanel 
               searchCallback={handleSearch}
               sortTypeCallback={handleSortType}
               />
        <div className="coinsmenu1-item">
            {
                filterData?.map((currentCoin) =>{
                   return <CryptoCards {...currentCoin} />
                })
            }
            </div>       
            </div>
     </>
}

export default Dashboard;
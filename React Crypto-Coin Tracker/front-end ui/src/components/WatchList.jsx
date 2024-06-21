import React,{useState, useEffect} from "react"; 
import { coinMarketCapApiKey, coinMarketCapApiUrl } from "../common/constants";
import CryptoCards from "./CryptoCards";

const WatchList = () => {
  const [watchItems, setWatchItems] = useState([]);
  const[filterData, setFilterData] = useState([]);
  const[coinData, setCoinData] = useState([]);
    const[isLoading, setIsLoading] = useState(true);
    const[error, setError] = useState(null); 

  useEffect(() => {
    const fetchWatchList = async () => {
      console.log(`watchitems fetched...`);
      try {
        const response = await fetch('http://localhost:3000/watchlist')
        if (!response.ok) {
          throw new Error("There was an error fetching watchlist")
        }
        const rawData = await response.json();
        console.log(`watchlist data ${JSON.stringify(rawData)}`);
        setWatchItems(rawData);
      }
      catch (error) {
        console.error(error);
      }
    }
    fetchWatchList();
  }, []);

  useEffect(() => {
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
      const watchSymbols = watchItems.map(item => item.symbol);
      const filterData  = rawData.data.filter(coin => watchSymbols.includes(coin.symbol));
      setFilterData(filterData);
      } catch (error) {
          setError(error);
      }
      finally {
          setIsLoading(false);
      }
      
  }
  fetchCoinData();
  }, [ watchItems]);


if (isLoading) {
    return <p style={{textAlign: "center"}}>Loading...</p>
}
if (error) {
    return <p style={{textAlign: "center"}}>{error.message}</p>
}

  return <>
  <div className="app">
  <h1 style={{ textAlign: 'center' }}> WatchList</h1> 
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

export default WatchList;
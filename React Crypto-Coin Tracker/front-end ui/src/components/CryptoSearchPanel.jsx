import React, { useState } from 'react'

const CryptoSearchPanel = (props) => {
  const [searchText, setSearchText] = useState('');
  const handleClick = () => {
    props.searchCallback(searchText)
  }
  const handleSortTypeChange = (event) => {
    //alert(`sort type change`)
    props.sortTypeCallback(event.target.value)
  }
  const handleKeyDown = (e) => {
    if (e.keyCode === 13){
      /* alert(`enter key pressed = perform search!`) */
      props.searchCallback(searchText)
    }
       
  }
  const handleOnChange = (e) =>{
    setSearchText(e.target.value);
  }
  return <>
  <input onKeyDown={handleKeyDown}
  onChange={handleOnChange}
  type="text" 
  placeholder="Search Cryptocurrency" 
  value={searchText}/>
                    <select onChange={handleSortTypeChange}>
                    <option value='price'>Price</option>
                    <option value='market_cap'>Market Cap</option>
                    <option value='volume_24h'>24th Volume</option>
                    <option value='percent_change_24h'>24th Change</option>
                  </select>
                  <button style={{height: 40, width: 100}} onClick={handleClick}>Search</button>
  </>
}

export default CryptoSearchPanel;
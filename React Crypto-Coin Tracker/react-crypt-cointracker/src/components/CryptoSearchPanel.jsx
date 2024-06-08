import React, { useState } from 'react'

const CryptoSearchPanel = (props) => {
  const [searchText, setSearchText] = useState('');
  const handleClick = () => {
    props.searchCallback(searchText)
  }
  const handleSelectChange = () => {
    alert(`select change`)
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
                    <select onChange={handleSelectChange}>
                    <option value="Price">Price</option>
                    <option value="Market Cap">Market Cap</option>
                    <option value="Volume">24th Volume</option>
                    <option value="Charge">24th Charge</option>
                  </select>
                  <button onClick={handleClick}>Search</button>
  </>
}

export default CryptoSearchPanel;
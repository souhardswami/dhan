import React, { useState, useEffect } from "react";
import ElogDateTime from "../ElogDateTime/elogDateTime";


const Stock = () => {


  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [stockName, setName] = useState("20MICRONS");
  const [closePrices, setClosePrice] = useState([{"date":"2010-10-10", "closed_price":"34"}, {"date":"2010-10-10", "closed_price":"34"}]);
  


  
  
  


  function fetchStockDetails() {
    const url = `http://localhost:8000/stocks/${stockName}/start/${startDate}/end/${endDate}`
    
    fetch(
      url
    )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
        setClosePrice(data);
    })
  }


  return (
      <div className="container">


            <label>Start Date</label>
                <br />
                <ElogDateTime
                    handleChange={(val) => {
                    setStartDate(val);
                    }}
                />

                <br />
                <br />
                <small>
                    <i>Date you set: {startDate}</i>
                </small>

            <label>End</label>
                <br />
                <ElogDateTime
                    handleChange={(val) => {
                    setEndDate(val);
                    }}
                />

                <br />
                <br />
                <small>
                    <i>Date you set: {endDate}</i>
                </small>

            <div className="wrapper">
                <div className="search">
                <input
                    type="text"
                    value={stockName}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter location"
                    className="location_input"
                />
                <button className="location_searcher" onClick={fetchStockDetails}>
                    Fetch Stock Detail
                </button>
                </div>
                <div className="app__data">{
                    closePrices.map(function(stockDetail){
                        
                    return <h2> {stockDetail.date} as the {stockDetail.closed_price}  </h2>
                    })
                }
                </div>
            </div>
        </div>
  )
}

export default Stock;
import React, { useState, useEffect } from "react";
import ElogDateTime from "../ElogDateTime/elogDateTime";
import FillDetail from "../FillDetail/fillDetail";
import ShowStockDetail from "../ShowStockDetail/showStockDetail";


const Stock = () => {
    const [stockName, setName] = useState("20MICRONS");
    const [displayName, setDisplayName] = useState(stockName);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    // Dummy Data to show on screen.
    const [closePrices, setClosePrice] = useState([
        {"date":"2010-10-10", "closed_price":"34"},
        {"date":"2010-10-11", "closed_price":"102"},
        {"date":"2010-10-12", "closed_price":"210"},
        {"date":"2010-10-13", "closed_price":"114"},
        {"date":"2010-10-14", "closed_price":"24"},
        {"date":"2010-10-17", "closed_price":"124"},
        {"date":"2010-10-18", "closed_price":"34"}]);

    const _fetchStockDetails = () => {
        const url = `http://localhost:8000/stocks/${stockName}/start/${startDate}/end/${endDate}`
        fetch(
        url
        )
        .then((res) => {
        return res.json();
        })
        .then((data) => {
            setClosePrice(data);
            setDisplayName(stockName);
        })
    }

    return (
            <>
                <section className="text-gray-600 body-font .h-48 ">
                    <div className="container px-5 py-24 mx-auto flex flex-wrap">
                        <FillDetail handleStockDetailsChange={(upStockName, upStartDate, upEndDate) => {


                                                    setName(upStockName);
                                                    setStartDate(upStartDate);
                                                    setEndDate(upEndDate);
                                                    _fetchStockDetails();
                                                }}/>
                        <ShowStockDetail stocksClosePrice={closePrices} displayName={displayName}/> 
                    </div>
                </section>
            </>

      
  )
}

export default Stock;

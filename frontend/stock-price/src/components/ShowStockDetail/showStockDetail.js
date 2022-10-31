import React, { useState, useEffect } from "react";


const ShowStockDetail = ({stocksClosePrice, displayName}) => {
    return (
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 md:ml-auto w-full ">
            <div className="flex flex-col text-center w-full mb-12">
                {/* <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"> Details of {displayName}</h1> */}
                <p className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-300"> Stock Price Details of - <span className="text-gray-700">``{displayName}`` </span> </p>
                </div>
            <div className="lg:w-4/5 w-full mx-auto md:w-5/12" id="table">
                <table className="table-auto w-full text-left whitespace-no-wrap ">
                    <thead>
                        <tr>
                        <th className="px-20 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                            Date
                        </th>
                        <th className="px-14 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                            Closed Price
                        </th>
                        </tr>
                    </thead>
                    <tbody> {
                                stocksClosePrice.map(function({date, closed_price}){  
                                    return <tr className="hover:bg-gray-100" key={date}>
                                                <td className="px-14 py-6">{date}</td>
                                                <td className="px-14 py-6">{closed_price} ₹</td>
                                            </tr>
                                })      
                            } 
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default ShowStockDetail;
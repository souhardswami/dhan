import React, { useState, useEffect } from "react";
import ElogDateTime from "../ElogDateTime/elogDateTime";

const FillDetail = ({handleStockDetailsChange}) => {

    const [stockName, setName] = useState("20MICRONS");
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const  _detailSubmit = () => {
        handleStockDetailsChange(stockName, startDate, endDate)
    }
    return (
        <div className=" lg:w-2/6 md:w-1/2  ">
                        <div className="bg-gray-100 rounded-lg p-8 flex flex-col  mt-10 md:mt-0 ">
                        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
                        🙏 Please Fill Up Stock Details 
                        </h2>
                        <div className="relative mb-4">
                            <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">
                            Name
                            </label>
                            <input
                            type="text"
                            id="full-name"
                            name="full-name"
                            value={stockName}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter location"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label className="leading-7 text-sm text-gray-600">Start Date</label>
                                            <br />
                                            <ElogDateTime
                                                handleChange={(val) => {
                                                setStartDate(val);
                                                }}
                                            />

                        </div>
                        <div className="relative mb-4">
                            <label className="leading-7 text-sm text-gray-600">End Date</label>
                                            <br />
                                            <ElogDateTime
                                                handleChange={(val) => {
                                                    setEndDate(val);
                                                }}
                                            />

                                            
                        </div>
                        <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={_detailSubmit}>
                                Submit
                            </button>
                        <p className="text-xs text-gray-500 mt-3">
                            Check again have you choose the right Stock name?.....
                        </p>
                        </div>
                        </div>
    )
}

export default FillDetail;
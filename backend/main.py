from fastapi import FastAPI, HTTPException
from datetime import date
from pydantic import BaseModel
from typing import List


app = FastAPI()


class Stock(BaseModel):
    close_price: float
    date: date


class Stocks(BaseModel):
    stocks: List[Stock]


def validate_dates(start_date: date, end_date: date):
    return start_date <= end_date


@app.get("/stocks/{name}/start/{start_date}/end/{end_date}", response_model=Stocks)
def get_stock_prices(name: str, start_date: date, end_date: date):
    if(not validate_dates(start_date, end_date)):
        raise HTTPException(
            status_code=422, detail="Start Date & End Date is Not Valid")

    entry1 = {"close_price": 100.00, "date": start_date}
    entry2 = {"close_price": 123.30, "date": end_date}

    resp = {"stocks": [entry1, entry2]}
    return resp

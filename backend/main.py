from fastapi import FastAPI, HTTPException
from datetime import date

app = FastAPI()

def validate_dates(start_date : date, end_date : date):
    return start_date <= end_date
    
@app.get("/stocks/{name}/start/{start_date}/end/{end_date}")
def get_stock_prices(name: str, start_date: date, end_date: date):
    if(not validate_dates(start_date, end_date)):
        raise HTTPException(status_code=422, detail="Start Date & End Date is Not Valid")

    return {"jio": "1$", "relience": "2$", "twitter": "1$"}

from fastapi import FastAPI
from datetime import date

app = FastAPI()

@app.get("/stocks/{name}/start/{start_date}/end/{end_date}")
def get_stock_prices(name: str, start_date: date, end_date: date):
    
    return {"jio": "1$", "relience": "2$", "twitter": "1$"}

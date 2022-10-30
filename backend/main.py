from fastapi import FastAPI

app = FastAPI()

@app.get("/stocks")
def get_stock_prices():
    return {"jio": "1$", "relience": "2$", "twitter": "1$"}

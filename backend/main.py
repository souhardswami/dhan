from typing import List
import fastapi as _fastapi
import sqlalchemy.orm as _orm
import services as _services, schemas as _schemas

import datetime as _dt

app = _fastapi.FastAPI()


def validate_dates(start_date: _dt.date, end_date: _dt.date):
    return start_date <= end_date

_services.create_database()

@app.get("/stocks/{name}/start/{start_date}/end/{end_date}", response_model=List[_schemas.Stock])
def get_stock_prices(name: str, start_date: _dt.date, end_date: _dt.date, db: _orm.Session = _fastapi.Depends(_services.get_db)):
    if(not validate_dates(start_date, end_date)):
        raise _fastapi.HTTPException(
            status_code=422, detail="Start Date & End Date is Not Valid")
    return _services.get_stocks(db, name, start_date, end_date)

@app.post("/stock/", response_model=_schemas.Stock)
def insert_stock_prices(stock: _schemas.StockCreate, db: _orm.Session = _fastapi.Depends(_services.get_db)):
    return _services.insert_stock(db, stock)

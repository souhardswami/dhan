from typing import List
import datetime as _dt
import pydantic as _pydantic


class _StockBase(_pydantic.BaseModel):
    name: str
    closed_price: float
    date: _dt.date


class StockCreate(_StockBase):
    ...


class Stock(_StockBase):
    id: int

    class Config:
        orm_mode = True

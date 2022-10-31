import datetime as _dt
import sqlalchemy as _sql
import sqlalchemy.orm as _orm

import database as _database


class Stock(_database.Base):
    __tablename__ = "stock_details"
    id = _sql.Column(_sql.Integer, primary_key=True, index=True)
    name = _sql.Column(_sql.String, index=True)
    closed_price = _sql.Column(_sql.Float, default=0)
    date = _sql.Column(_sql.Date, index=True)

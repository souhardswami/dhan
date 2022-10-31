import sqlalchemy.orm as _orm

import models as _models
import schemas as _schemas
import database as _database
import datetime as _dt
import utils as _utils



def create_database():
    return _database.Base.metadata.create_all(bind=_database.engine)


def get_db():
    db = _database.SessionLocal()
    try:
        yield db
    finally:
        db.close()


def get_stocks(db: _orm.Session, name: str, start_date: _dt.date, end_date: _dt.date):
    # Fill the Stock - data in DB, for all the dates of [start to end]
    _utils.fetch_all_data_from_nse(db, start_date, end_date)
    return db.query(_models.Stock).filter(_models.Stock.name == name, _models.Stock.date >= start_date, _models.Stock.date <= end_date).all()

def get_all_stocks(db: _orm.Session):
    return db.query(_models.Stock).all()

def insert_stock(db: _orm.Session, stock: _schemas.StockCreate):
    db_stock = _models.Stock(
        name=stock.name, date=stock.date, closed_price=stock.closed_price)
    db.add(db_stock)
    db.commit()
    db.refresh(db_stock)

    return db_stock


def is_present(db, date: _dt.date):
    return not db.query(_models.Stock).filter(_models.Stock.date == date).count() == 0


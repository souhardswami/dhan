import csv
import services as _services
import schemas as _schemas

def process_line(db, line, date):
    stock_create = _schemas.StockCreate(name=line[0],closed_price=float(line[5]),date=date )
    _services.insert_stock(db, stock_create)

def file_to_db_insert(db, file_name, date):
    try:
        temp_file_path = file_name
        with open(temp_file_path, 'rU') as file:
            reader = csv.reader(file)
            # To skip Header.
            next(reader)
            for idx, line in enumerate(reader):
                process_line(db, line, date)
    except Exception as exp:
        print(exp)
import datetime as _dt
import services as _services
import jugaad_data.nse as _jd
import file_reader as _file_reader

from datetime import date
from jugaad_data.nse import bhavcopy_save


def fetch_data(date: _dt.date):
    try:
        file_name = bhavcopy_save(date, "media")
        print(file_name)
        return file_name
    except Exception as exp:
        print (exp)
        raise FileExistsError
        


def fetch_all_data_from_nse(db, start_date: _dt.date, end_date: _dt.date):
    single_day_incrementer = _dt.timedelta(days=1)
    while (start_date <= end_date):
        if(not _services.is_present(db, start_date)):
            try:
                file_name = fetch_data(start_date)
                _file_reader.file_to_db_insert(db, file_name, start_date)
            except FileExistsError as e:
                print("File is not present")

        start_date += single_day_incrementer
    
    
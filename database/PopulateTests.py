import pymysql
import sshtunnel
import uuid
import os
import pandas as pd
import random
import re
import datetime


from dotenv import load_dotenv

load_dotenv()

SQL_HOSTNAME = os.environ.get("SQL_HOSTNAME")
SQL_USERNAME = os.environ.get("SQL_USERNAME")
SQL_PASSWORD = os.environ.get("SQL_PASSWORD")
SQL_MAIN_DATABASE = "EHR"
SQL_PORT = 3306

SSH_HOSTNAME = os.environ.get("SSH_HOSTNAME")
SSH_USERNAME = os.environ.get("SSH_USERNAME")
SSH_KP_PATH = os.environ.get("SSH_KP_PATH")
SSH_PORT = 22


tunnel = sshtunnel.SSHTunnelForwarder(
    (SSH_HOSTNAME, SSH_PORT),
    ssh_username = SSH_USERNAME,
    ssh_pkey = SSH_KP_PATH,
    remote_bind_address=(SQL_HOSTNAME, 3306)
)

tunnel.start()

conn = pymysql.connect(
  host = "127.0.0.1",
  user = SQL_USERNAME,
  password = SQL_PASSWORD,
  port = tunnel.local_bind_port,
  database = "EHR"
)

cursor = conn.cursor()



##### --------------------- DATA PROCESSING --------------------- #####


def random_date(start_date, end_date):
    """Generate a random date between start_date and end_date"""
    time_between_dates = end_date - start_date
    days_between_dates = time_between_dates.days
    random_number_of_days = random.randrange(days_between_dates)
    random_date = start_date + datetime.timedelta(days=random_number_of_days)
    return random_date



# patients = pd.read_csv("./data/Patients.csv")
query = """SELECT * FROM Patients"""
cursor.execute(query)
patients = cursor.fetchall()

for patient in patients:
  patient_binary_uuid = patient[0]
  patient_uuid_obj = uuid.UUID(bytes=bytes(patient_binary_uuid))

  patient_hex_uuid = str(patient_uuid_obj)

  numberOfTests = random.randint(3, 10)

  for i in range(3, numberOfTests):  
    lab_id = random.randint(1, 15)
    start_date = datetime.date(2022, 1, 1)
    end_date = datetime.date(2023, 1, 1)
    date = random_date(start_date, end_date)
    
    print(date)

    query = """INSERT INTO Tests (test_id, patient_id, laboratory_id, date)
    VALUES (UNHEX(REPLACE('{}', '-', '')), UNHEX(REPLACE('{}', '-', '')), {}, STR_TO_DATE('{}', '%Y-%m-%d'))
    """.format(uuid.uuid4(), patient_hex_uuid, lab_id, date)

    cursor.execute(query)

conn.commit()
    
    


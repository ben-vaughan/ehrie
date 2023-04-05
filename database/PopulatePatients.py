import pymysql
import sshtunnel
import uuid
import os
import pandas as pd
import random
import re

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



df = pd.read_csv("./data/Patients.csv")

for row in df.itertuples():
    

    query = """INSERT INTO Patients (patient_id, gp_id, first_name, last_name, date_of_birth, sex, address)
    VALUES (UNHEX(REPLACE('{}', '-', '')), {}, '{}', '{}', STR_TO_DATE('{}', '%m/%d/%Y'), '{}', '{}')
    """.format(uuid.uuid4(), random.randint(1, 50), re.sub("'", '"', row.first_name), re.sub("'", '"', row.last_name), row.date_of_birth, row.sex, row.address)

    print(query)
    cursor.execute(query)

conn.commit()
    
    
    


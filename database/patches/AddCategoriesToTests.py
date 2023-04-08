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



# patients = pd.read_csv("./data/Patients.csv")
query = """SELECT * FROM Tests"""
cursor.execute(query)
tests = cursor.fetchall()

for test in tests:
  testId = str(uuid.UUID(bytes=bytes(test[0])))

  query = """SELECT * FROM TestResults WHERE test_id = UNHEX(REPLACE('{}', '-', ''))
  """.format(testId)
  print(query)
  cursor.execute(query)
  testResult = cursor.fetchone()

  query = """SELECT * FROM TestComponents WHERE component_id = {}
  """.format(testResult[2])
  print(query)
  cursor.execute(query)
  testComponent = cursor.fetchone()

  query = """UPDATE Tests SET category_id = {} WHERE test_id = UNHEX(REPLACE('{}', '-', ''))
  """.format(testComponent[1], testId)
  print(query)
  cursor.execute(query)


conn.commit()
    
    


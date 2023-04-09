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


query = """SELECT * FROM Patients"""
cursor.execute(query)
patients = cursor.fetchall()

for patient in patients:
  patientId = str(uuid.UUID(bytes=bytes(patient[0])))

  bloodTypes = ["O-", "O+", "B-", "B+", "A-", "A+", "AB-", "AB+"]

  randomHeight = random.randint(150, 200)
  randomWeight = random.randint(50, 100)
  randomBloodType = bloodTypes[random.randint(0, 7)]

  query = """UPDATE Patients SET height = {}, weight = {}, blood_type = '{}' WHERE patient_id = UNHEX(REPLACE('{}', '-', ''))
  """.format(randomHeight, randomWeight, randomBloodType, patientId)
  print(query)
  cursor.execute(query)


conn.commit()
    
    


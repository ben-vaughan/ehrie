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

query = """SELECT * FROM Tests"""
cursor.execute(query)
tests = cursor.fetchall()

for test in tests:
  patient_id_bin = test[1]
  patient_id_obj = uuid.UUID(bytes=bytes(patient_id_bin))
  patient_id_hex = str(patient_id_obj)
  patient_sex = -1

  test_id_bin = test[0]
  test_id_obj = uuid.UUID(bytes=bytes(test_id_bin))
  test_id_hex = str(test_id_obj)

  query = """SELECT * FROM Patients WHERE patient_id = UNHEX(REPLACE('{}', '-', ''))""".format(patient_id_hex)
  cursor.execute(query)
  patient = cursor.fetchone()

  if patient[5] == 'male':
    patient_sex = 1
  elif patient[5] == 'female':
    patient_sex = 2
  else:
    patient_sex = 0

  testCategory = random.randint(1, 6)
  query = """SELECT * FROM TestComponents WHERE category_id = {}""".format(testCategory)
  cursor.execute(query)
  components = cursor.fetchall()

  for component in components:
    component_id = component[0]

    query = """SELECT * FROM ReferenceRanges WHERE component_id = {} AND sex_id = {}
    """.format(component[0], patient_sex)
    print(query)
    cursor.execute(query)
    refRange = cursor.fetchone()

    lowerLimit = refRange[4]
    upperLimit = refRange[5]

    query = """INSERT INTO TestResults (test_result_id, test_id, component_id, value)
    VALUES (UNHEX(REPLACE('{}', '-', '')), UNHEX(REPLACE('{}', '-', '')), {}, {})""".format(uuid.uuid4(), test_id_hex, component_id, random.uniform((((lowerLimit * 100) - lowerLimit) / 100),(((upperLimit * 100) + upperLimit) / 100)))
    print(query)

    cursor.execute(query)

conn.commit()
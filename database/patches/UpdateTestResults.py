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
    patient_uuid = uuid.UUID(bytes=bytes(test[1]))
    query = """SELECT sex_id FROM Patients WHERE patient_id = UNHEX(REPLACE('{}', '-', ''))""".format(patient_uuid)
    cursor.execute(query)
    patient_sex_id = cursor.fetchone()[0]


    test_uuid = uuid.UUID(bytes=bytes(test[0]))
    query = """SELECT * FROM TestResults WHERE test_id = UNHEX(REPLACE('{}', '-', ''))""".format(test_uuid)
    cursor.execute(query)
    test_results = cursor.fetchall()

    for test_result in test_results:
      test_result_uuid = uuid.UUID(bytes=bytes(test_result[0]))

      query = """SELECT * FROM ReferenceRanges WHERE component_id = {} AND sex_id={}""".format(test_result[2], patient_sex_id)
      cursor.execute(query)
      reference_range = cursor.fetchone()

      mean = reference_range[6]
      stdev = reference_range[7]

      value = random.normalvariate(mean, stdev)

      query = """UPDATE TestResults SET value = {} WHERE test_result_id = UNHEX(REPLACE('{}', '-', ''))""".format(value, test_result_uuid)
      cursor.execute(query)

conn.commit()


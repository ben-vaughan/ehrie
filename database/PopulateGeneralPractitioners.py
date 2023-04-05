import pymysql
import sshtunnel
import os
import pandas as pd
import re
import random

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

def format_email(name):
    name = name.lower()
    name = re.sub(r'[^\w\s]','',name) # remove all non-word and non-whitespace characters
    name = re.sub(r'\s+','',name) # remove all whitespace characters
    email = name + "@mail.com"
    return email



df = pd.read_csv("./data/GeneralPracticioners.csv")

for row in df.itertuples():

    query = """INSERT INTO GeneralPractitioners (gp_id, clinic_id, name, email) VALUES ({}, '{}', '{}', '{}')
    """.format(row.gp_id, random.randint(1, 15), re.sub("'", '"', row.name), format_email(row.name))

    print(query)
    cursor.execute(query)

conn.commit()
    
    
    


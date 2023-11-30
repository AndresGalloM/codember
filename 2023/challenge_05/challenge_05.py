import os
import csv
import re

def read_file():
  path = os.path.dirname(__file__)
  with open(os.path.join(path, 'challenge_05.csv'), encoding='UTF-8') as file:
    filed_names = ['id', 'username', 'email', 'age', 'location']
    return list(csv.DictReader(file, fieldnames=filed_names))

def validate_id(user_id):
  return user_id and user_id.isalnum()

def validate_username(username):
  return username and username.isalnum()

def validate_email(email):
  return email and re.match(r'[^@]+@[^@]+\.[^@]+', email)

def validate_age(age):
  return not age or age.isdigit()

def validate_location(location):
  return not location or re.match(r'^[\w\s]+$', location)

def run():
  message = ''
  users = read_file()
  
  for user in users:
    if not (validate_id(user['id']) and \
        validate_username(user['username']) and \
        validate_email(user['email']) and \
        validate_age(user['age']) and \
        validate_location(user['location'])):
      message += user['username'][0]
    
  return message

if __name__ == "__main__":
  print(run())
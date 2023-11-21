import os
import sys

def read_file():
  with open(
    os.path.join('2023', 'challenge_03', 'challenge_03.txt'),
    encoding='UTF-8'
  ) as file:
    return file.read()
  
def run():
  try:
    param = int(sys.argv[1])
  except:
    print('⭕ Error: no se proporciono el parametro')
    sys.exit(1)

  content = read_file().splitlines()
  count = 0

  for index, info_password in enumerate(content):
    info, password = info_password.split(':')
    limit, word = info.split(' ')
    minimum, maximum = limit.split('-')

    if password.count(word) not in range(int(minimum), int(maximum)):
      count += 1
      # sys.argv[1]: parametro al ejecutar el script
      # py 2023/challenge_03/challenge_03.py 13
      if count == param: return content[index]

if __name__ == '__main__':
  print(run())
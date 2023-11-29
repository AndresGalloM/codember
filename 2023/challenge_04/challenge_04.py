import os
import sys

def read_file():
  path = os.path.dirname(__file__)
  with open(os.path.join(path, 'challenge_04.txt'), encoding='UTF-8') as file:
    return file.read().splitlines()

def run():
  try:
    param = int(sys.argv[1])
  except:
    print('⭕ Eror: No se proporciono el parametro')
    sys.exit(1)

  file_names = read_file()
  count = 0

  for name in file_names:
    name, checksum = name.split('-')
    correct_checksum = ''.join(list(filter(lambda x: name.count(x) == 1, name)))

    if correct_checksum == checksum:
      count += 1
      if count == param:
        return correct_checksum

  return '❗ No se encontro el archivo'

if __name__ == '__main__':
  print(run())
  
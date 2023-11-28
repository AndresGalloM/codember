def run():
  input_value = '&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&'
  value = 0
  result = '' 

  for caracter in input_value:
    match caracter:
      case '#':
        value += 1
      case '@':
        value -= 1
      case '*':
        value *= value
      case '&':
          result += str(value)
  
  return result

if __name__ == '__main__':
  print(run())
function run() {
  const MESSAGE = '&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&';
  let value = 0;
  let result = '';
  const CASES = {
    '#': () => value += 1,
    '@': () => value -= 1,
    '*': () => value *= value,
    '&': () => result = result.concat(value)
  }

  MESSAGE.split('').forEach(element => CASES[element]?.());
  return result;
}

console.log(run())
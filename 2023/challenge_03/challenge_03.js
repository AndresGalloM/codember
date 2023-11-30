const fs = require('node:fs/promises');
const path = require('node:path');

async function read_file() {
  const text = await fs.readFile(
    path.join(__dirname, 'challenge_03.txt'),
    'utf8'
  );
  return text.split('\n');
}

async function run() {
  const arg = Number(process.argv[2] ?? 13);
  const passwords = await read_file();
  let count = 0;

  for (const pass of passwords) {
    const [policy, password] = pass.split(':');
    const [range, letter] = policy.split(' ');
    const [min, max] = range.split('-');
    const letterCount = password.split('').filter(l => l === letter).length;
    
    if (!(min <= letterCount && letterCount <= max)) {
      count++;
      if (count === arg) {
        return password;
      }
    }
  }

  return '❗ No se encontro la contraseña';
}

run().then(console.log);
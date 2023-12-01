const fs = require('node:fs/promises')
const path = require('node:path')

async function read_file() {
  const list = await fs.readFile(path.join(__dirname, 'challenge_04.txt'), 'utf8');
  return list.split('\n');
}

async function run() {
  const listFiles = await read_file();
  const arg = Number(process.argv[2] ?? 1);
  let count = 0;

  for (const file of listFiles) {
    const [filename, checksum] = file.trim().split('-');
    const correctChecksum = filename.split('').reduce((acc, letter, index, arr) => {
      if (arr.filter(elem => elem === letter).length > 1) return acc;
      return acc += letter;
    }, '');

    if (correctChecksum === checksum) {
      count++;
      if (count === arg) return checksum;
    }
  }

  return '❗ No se encontro el archivo';
}

run().then(console.log)
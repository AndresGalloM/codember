const fs = require('node:fs/promises')
const path = require('node:path')

async function read_file() {
  const text = await fs.readFile(path.join(__dirname, 'challenge_05.csv'), 'utf8');
  return text.split('\n');
}

const VALIDATIONS = {
  0: id => id && /^[a-zA-Z0-9]+$/.test(id),
  1: username => username && /^[a-zA-Z0-9]+$/.test(username),
  2: email => email && /\w+@\w+\.\w+/.test(email),
  3: age => !age || /^[0-9]+$/.test(age),
  4: location => !location || /^[\w\s]+$/.test(location)
}

async function run() {
  const users = await read_file();
  let message = '';

  users.forEach(user => {
    const userInfo = user.trim().split(',');
    let wrongUser = false;
  
    for (let i = 0; i < userInfo.length; i++) {
      if (!VALIDATIONS[i](userInfo[i])) {
        wrongUser = true;
        break;
      }
    }
    
    if (wrongUser) message += userInfo[1][0];
  });

  return message
}

run().then(console.log)
import inquirer from 'inquirer';
import fs from 'node:fs/promises';

async function askQus() {
  const bufferData = await fs.readFile('./data.json');
  const content = JSON.parse(bufferData.toString());
  const { question, answer } = content[0];
  const ans = await inquirer.prompt([
    {
      type: 'input',
      name: 'pyramids',
      message: question,
    },
  ]);
  if (ans.pyramids === answer) console.log('thats right');
  else console.log('better luck next time');
}
askQus();

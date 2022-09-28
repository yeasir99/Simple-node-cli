import inquirer from 'inquirer';

async function askQus() {
  const answer = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'list',
      name: 'live',
      message: 'Where do you live?',
      choices: ['Dhaka', 'Tangail', 'Madhupur', 'Ghatail'],
    },
  ]);
  console.log(answer.name);
  console.log(answer.live);
}
askQus();

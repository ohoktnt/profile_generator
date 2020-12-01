// Fun Profile Generator

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :) ', (name) => {
  rl.question('What\'s an activity you like doing for fun?', (activity) => {
    rl.question('What do you listen to while doing that?', (listen) => {
      rl.question('Which meal is your favourite? (eg. dinner, brunch,etc.)', (meal) => {
        rl.question('What\'s your favorite thing to eat for that meal?', (food) => {
          rl.question('What\'s your absolute favorite sport?', (sport) => {
            rl.question('What is your superpower? In a few words, tell us what your amazing at!', (superpower) => {
              console.log(`${name} loves listening to ${listen} while ${activity}, munching on ${food} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superpower}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});


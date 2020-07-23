const readline = require('readline');
const input = require('./utils/input');

module.exports = () => {
    // Example taken from NodeJS docs for readline
    // https://nodejs.org/dist/latest-v12.x/docs/api/readline.html#readline_example_tiny_cli
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: '> ',
        terminal: true
    });
    
    // Prompt the user for input initially
    rl.prompt();
    
    // Add event listeners
    rl.on('line', (cmd) => {
        const trimmedCmd = cmd.trim();
        // exit if the user types 'exit'
        if (trimmedCmd == 'exit') process.exit(1);
        input(trimmedCmd);
        rl.prompt();
    }).on('close', () => {
        console.log('Quitting!');
        process.exit(1);
    });
};
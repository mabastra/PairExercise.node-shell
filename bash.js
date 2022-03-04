const ls = require("./ls");
const pwd = require("./pwd");

//output a prompt
process.stdout.write('prompt > ');

// stdin data event fires after a user types in a line
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim(); // remove newline char
    if (cmd === 'pwd')
        pwd();
    else if (cmd === 'ls')
        ls();
    else if (cmd === 'cat')
        
    else {
        process.stdout.write('You typed: ' + cmd);
        process.stdout.write('\nprompt > ');    
    }
});
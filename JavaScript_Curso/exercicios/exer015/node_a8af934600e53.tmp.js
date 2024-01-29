const rl = require('readline')
const util = require('util')
const CreateUser = require('./module/AsyncModule.js')
const terminal = rl.createInterface({
    input:process.stdin,
    output:process.stdout
})
const AsyncTerminal = util.promisify(terminal.question).bind(terminal)
console.log(AsyncTerminal)

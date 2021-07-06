const path = require('path'), // Help build path (directory) from the current file to inbox sol file (cross platforn compatiblity)
        fs = require('fs'), //file system module (for reading contents of a file)
      solc = require('solc') // solidity compiler

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol') // path of project  (C:// ..... /First_Project) and read contracts/Inobx.sol
const source = fs.readFileSync(inboxPath, 'utf8')

module.exports = solc.compile(source,1).contracts[':Inbox'] //compile code of sol file

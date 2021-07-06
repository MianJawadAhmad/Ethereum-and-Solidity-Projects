const assert = require('assert'), // make assertion about tests
     ganache = require('ganache-cli'),// serve as local ethereum test network
        Web3 = require('web3'), //COnstructor instance of Web3
    provider = ganache.provider(),
        web3 = new Web3(provider)
 

let accounts
let inbox

beforeEach(async () => {
    // Get a list of all accounts (uses ethereum module)
    accounts = await web3.eth.getAccounts()
    //Use one of those accounts to deploy the contract
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: bytecode, arguments: ['Hi there'] })
        .send({from: accounts[0], gas:'1000000'})
})

describe('Inbox', ()=>{
    it('deploys a contract', () =>{
        assert.ok(inbox.options.address)
    })
    
     it('has a default message', async () =>{
        const message = await inbox.methods.message().call()
        assert.equal(message, 'Hi there')
    })
    
    it('can change the message', async () =>{
        await inbox.methods.setMessage('Bye!').send({from: accounts[0]})
        const message = await inbox.methods.message().call();
        assert.equal(message, 'Bye!')
    })
})



// class Car {
//     park(){
//         return 'stopped'
//     }
    
//     drive(){
//         return 'vroom'
//     }
// }

// let car;

// beforeEach(()=>{
//   car = new Car();
// })

// describe('Car',()=>{
//     it('can park',()=>{
//         assert.equal(car.park(), 'stopped')
//     })
    
//     it('can drive',()=>{
//         assert.equal(car.drive(),'vroom')
//     })
// })
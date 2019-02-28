const SHA256 = require("crypto-js/sha256")

class Block {
    constructor(timestamp,data,previousHash=''){  
        this.previousHash = previousHash  
        this.timestamp = timestamp
        this.data = data

        this.hash = this.calculateHash()

    }
    calculateHash(){
        let hash = SHA256(
            this.previousHash +
            this.timestamp +
            JSON.stringify(this.data)
        )

    }
    
}

class Blockchain{
    constructor() {

        let genesisBlock = this.createGenesisBlock()

        this.chain = []

        this.chain.push(genesisBlock)
    }
    createGenesisBlock() {
    return new Block("12:00", "Hello")
    }
    
    getLatestBlock(){
        return this.chain[this.chain.length-1]
    }

    addBlock(newBlock){

        newBlock.previousHash = this.getLatestBlock().hash
        newBlock.hash = newBlock.calculateHash()
        
        this.chain.push(newBlock)
    }
}

let blockchain = new Blockchain()
console.log(blockchain.chain)

let secondBlock = new Block("1:00", "Bye")
blockchain.addBlock(secondBlock)

console.log(blockchain.createGenesisBlock())
//The Script 
let firstBlock=new Block("12:00","Hello");
//assigned first block with timestamp and data
console.log(firstBlock.timestamp)         

console.log(firstBlock.calculateHash)
//you have to go to command window and enter in "npm install cryto-js"

let secondBlock = new Block("1:00", "Bye",firstBlock.hash)
# Decentralized Voting Application

This  application is to implement  the voting in solidity smart contract using ReactJS. 



## Installation

After you cloned the repository, you want to install the packages using

```shell
npm install
```
To compile the contract we first need to set our environment variables in the .env file

Copy the Privatekey from  MetaMask and paste in  the .env file also in Metamask add Volta as a token(You can earn volta tokens from volta Faucet)

You first need to compile the contract and upload it to the blockchain network. Run the following commands to compile and upload the contract.

```shell
npx hardhat compile
npx hardhat run --network volta scripts/deploy.js
```
Now after successful compilation you have got contract address, paste it in the constant.js file

Once the contract is uploaded to the blockchain, You can also use another blockchain by writing the blockchain's endpoint in hardhat-config.

Once you have pasted your private key and contract address in the .env file, simply run command

```shell
npm start
```

 
 
 

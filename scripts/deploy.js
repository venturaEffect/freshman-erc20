 // scripts/GLDToken_deploy.js

 const hre = require("hardhat");

 async function main() {
 
   const LW3Token = await hre.ethers.getContractFactory("LW3Token");
   console.log('Deploying LW3Token...');
   const token = await LW3Token.deploy("LW3Token", "LW3");
 
   await token.deployed();
   console.log("LW3Token deployed to:", token.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch((error) => {
     console.error(error);
     process.exit(1);
   });
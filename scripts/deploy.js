// scripts/deploy.js
const { ethers, upgrades } = require("hardhat");

async function main() {
    const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
    const simpleStorage = await upgrades.deployProxy(SimpleStorage, [], { initializer: 'initialize' });
    await simpleStorage.deployed();

    console.log("SimpleStorage deployed to:", simpleStorage.address);
}

main();

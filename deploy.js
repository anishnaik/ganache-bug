const {expect} = require("chai");
const {ethers} = require("hardhat")

describe("Deploy contracts for Echidna", function() {
    it("Deploy", async function() {
        const ComptrollerHarness = await ethers.getContractFactory("ComptrollerHarness");
        // This is where the bug is
        // Before deploy eth_estimateGas will be called
        // But this call will throw an out-of-gas error with ganache@7.3.2
        // It will not throw an error with ganache-cli@6.12.2
        const comptrollerHarness = await ComptrollerHarness.deploy();
        console.log(`comptrollerHarness ${comptrollerHarness.address}`);
    });
});

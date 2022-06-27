const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Dao", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Dao = await ethers.getContractFactory("Dao");
    const dao = await Dao.deploy();
    await dao.deployed();

    expect(await dao.countVotes()).to.equal(0);

    const countVotesTx = await dao.countVotes();

    // wait until the transaction is mined
    await countVotesTx.wait();

    expect(await dao.countVotes()).to.equal(0);
  });
});

const main = async () => {
  try {
      const nftContractFatory = await hre.ethers.getContractFactory(
          "ChainBattles"
      );
      const nftContract = await nftContractFatory.deploy();
      await nftContract.deployed();

      console.log("Contract deployed to:", nftContract.address);
      process.exit(0);
  } catch (error) {
      console.log(error);
      process.exit(1);
  }
};

main();
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/9kCRXm8uUqtCcUkuW4ZpJ2Sz10U6WHzF',
      accounts: ['26aca47ba9a02a66bfdee103baecf7bffccdc7fcbf8fd91fc29afb64f4c5096d'],
    },
  },
};
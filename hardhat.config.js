require("@nomicfoundation/hardhat-toolbox");

config = require('./config.json')

PRIVATE_KEY = config['PRIVATE_KEY_UP'] + config['PRIVATE_KEY_DOWN']
PROVIDER_URL = config['PROVIDER_URL']


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "goerli",
  networks: {
    hardhat: {
    },
    goerli: {
      url: PROVIDER_URL,
      accounts: [PRIVATE_KEY]
    }
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  }
};

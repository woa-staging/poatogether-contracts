const ganache = require("ganache-cli");

module.exports = function ({ unlockedAccounts }) {
  const server = ganache.server({
    fork: process.env.GANACHE_FORK_URL,
    unlocked_accounts: unlockedAccounts
  });
  return new Promise((resolve, reject) => {
    server.listen('8546', function(err, blockchain) {
      if (err) { reject(err) }
      if (blockchain) { resolve(blockchain) }
    })
  })
}

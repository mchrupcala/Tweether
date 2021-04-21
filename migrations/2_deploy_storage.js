const UserStorage = artifacts.require('UserStorage');
const TweetStorage = artifacts.require('TweetStorage');

// !IMPORTANT: this migration file will only run ONCE. If I re-deploy my contracts, then all
// the stored data will be deleted and replaced!

module.exports = (deployer) => {
    deployer.deploy(UserStorage);
    deployer.deploy(TweetStorage);
}
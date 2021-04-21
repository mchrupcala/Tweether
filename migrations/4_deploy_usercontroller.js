const UserController = artifacts.require('UserController');
const UserStorage = artifacts.require('UserStorage');
const ContractManager = artifacts.require('ContractManager');

// 1. deploy my UserController contract
// 2. set ContractManager's address in my UserController contract
// 3. set UserController's address in the contract manager & the user sstorage contract

module.exports = (deployer) => {
    deployer.deploy(UserController)
    .then(() => {
        return UserController.deployed()
    })
    .then(userCtrl => {
        userCtrl.setManagerAddr(ContractManager.address)

        return Promise.all([
            ContractManager.deployed(),
            UserStorage.deployed(),
        ])
    })
    .then(([manager, storage]) => {
        return Promise.all([
            manager.setAddress("UserController", UserController.address),
            storage.setControllerAddr(UserController.address),
        ])
    })
}
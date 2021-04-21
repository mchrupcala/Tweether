pragma solidity ^0.8.0;

contract Owned {
    address public ownerAddr;

    // runs once when the contract's deployed, and never again
    constructor() public {
        ownerAddr = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == ownerAddr);
        _;
    }

    function transferOwnership(address _newOwner) public onlyOwner {

        //the new address can't be null (address(0) is the same thing as an empty address '0x0')
        require(_newOwner != address(0));

        ownerAddr = _newOwner;
    }
}
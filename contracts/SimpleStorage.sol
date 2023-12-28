// contracts/SimpleStorage.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    string public storedData;

    function storeData(string memory newData) public {
        storedData = newData;
    }

    function retrieveData() public view returns (string memory) {
        return storedData;
    }
}

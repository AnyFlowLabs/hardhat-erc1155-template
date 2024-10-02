// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AnyFlowERC1155 is ERC1155, Ownable {
    constructor(
        address _initialOwner,
        string memory uri_
    ) ERC1155(uri_) Ownable(_initialOwner) {}

    // Add additional logic here
}

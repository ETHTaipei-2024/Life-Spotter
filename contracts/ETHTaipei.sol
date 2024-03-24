// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.0;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract ETHTaipei is Ownable, ERC721 {
    uint256 private _tokenId;

    constructor() ERC721("ETH Taipei", "ETHT") Ownable(msg.sender) {}

    function mint() external {
        unchecked {
            _tokenId++;
        }
        _mint(msg.sender, _tokenId);
    }
}

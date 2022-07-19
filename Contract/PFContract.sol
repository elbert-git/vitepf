// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

contract Letters_Numbers_And_Shapes is ERC721A, Ownable {
    // --- vars
    uint256 MAX_MINTS = 1;                      // max mints per wallet
    uint256 MAX_SUPPLY = 18;                    // max amount of nfts in contract
    uint256 public mintRate = 0 ether;          // mint price
    // uri
    string baseURI = "https://raw.githubusercontent.com/elbert-git/LettersShapesAndNumbers/assetCreation/output/metadataOutput/0";
    // whitelisting
    bytes32 merkleRoot;
    bool whitelistMode = true; 
    // trigger
    bool triggerHasFired = false;
    uint256 triggerNumber = 9; // put number to transition here

    constructor() ERC721A("Letters Shapes and Numbers", "LNS") {}




    function mint(uint256 quantity, bytes32[] memory proof) external payable {
        // checks
        require(quantity + _numberMinted(msg.sender) <= MAX_MINTS, "Exceeded the limit");
        require(totalSupply() + quantity <= MAX_SUPPLY, "Not enough tokens left");
        if(whitelistMode){require(verify(proof, msg.sender), "not in whitelist");}
        // mint actual
        _safeMint(msg.sender, quantity);
        Trigger();
    }




    // --- owner controls
    function withdraw() external payable onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }
    function setURI(string memory _uri) external onlyOwner{
        baseURI = _uri;
    }
    function setMintRate(uint256 _mintRate) public onlyOwner {
        mintRate = _mintRate;
    }
    function setWhitelistMode(bool _mode) public onlyOwner {
        whitelistMode = _mode;
    }
    function setMerkleTreeRoot(bytes32 _root) public onlyOwner {
        merkleRoot = _root;
    }
    function devMint(uint num) public onlyOwner {
        require(totalSupply() + num <= MAX_SUPPLY, "Not enough tokens left");
        _safeMint(msg.sender, num);
        Trigger(); // if you have trigger
    }




    function _baseURI() internal view override returns (string memory) {
        return baseURI;
    }




    // whitelist verify
    function verify(bytes32[] memory proof, address senderAddress) internal view returns (bool){
        // create leaf from msg.sender address
        bytes32 leaf = keccak256(abi.encodePacked(senderAddress));                                                        
        //check if node has is in merckle tree
        return MerkleProof.verify(proof, merkleRoot, leaf);
    }

    // trigger
    function Trigger() internal {
        if(totalSupply() >= triggerNumber && !triggerHasFired){
        // save trigger fire
        triggerHasFired = true;
        // turn off whitelist mode.
        whitelistMode = false;
        }
    }       
}
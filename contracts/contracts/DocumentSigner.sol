// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DocumentSigner {
    struct Document {
        address owner;
        string ipfsHash;
        bool isUploaded;
        uint256 requiredSigners;
        mapping(address => bool) signed;
        mapping(address => User) signers;
    }

    struct User {
        string name;
        string email;
        string mobileNo;
        address signature; // Signature can be wallet address or image hash
        bool signed;
    }

    mapping(uint256 => Document) public documents;
    mapping(address => uint256[]) public userDocuments;
    uint256 public documentCount;

    event DocumentUploaded(uint256 indexed docId, address indexed owner, string ipfsHash);
    event DocumentSigned(uint256 indexed docId, address indexed signer);

    modifier documentExists(uint256 _docId) {
        require(documents[_docId].owner != address(0), "Document does not exist");
        _;
    }

    modifier onlyOwner(uint256 _docId) {
        require(msg.sender == documents[_docId].owner, "Only owner can call this function");
        _;
    }

    modifier documentNotUploaded(uint256 _docId) {
        require(!documents[_docId].isUploaded, "Document is already uploaded");
        _;
    }

    modifier notAlreadySigned(uint256 _docId) {
        require(!documents[_docId].signed[msg.sender], "You have already signed");
        _;
    }

    modifier hasSignerSlotAvailable(uint256 _docId) {
        require(getNumSigners(_docId) < documents[_docId].requiredSigners, "All signer slots are filled");
        _;
    }

    constructor() {
        documentCount = 0;
    }

    function uploadDocument(string memory _ipfsHash, uint256 _requiredSigners) external {
    documentCount++;
    Document storage newDocument = documents[documentCount];
    newDocument.owner = msg.sender;
    newDocument.ipfsHash = _ipfsHash;
    newDocument.isUploaded = false;
    newDocument.requiredSigners = _requiredSigners;
    emit DocumentUploaded(documentCount, msg.sender, _ipfsHash);
}

    function signDocument(uint256 _docId, string memory _name, string memory _email, string memory _mobileNo, address _signature) 
        external 
        documentExists(_docId) 
        documentNotUploaded(_docId) 
        notAlreadySigned(_docId) 
        hasSignerSlotAvailable(_docId) 
    {
        documents[_docId].signers[msg.sender] = User(_name, _email, _mobileNo, _signature, true);
        documents[_docId].signed[msg.sender] = true;

        userDocuments[msg.sender].push(_docId);

        emit DocumentSigned(_docId, msg.sender);
    }

    function getDocumentDetails(uint256 _docId) external view returns (address owner, string memory ipfsHash, bool isUploaded, uint256 requiredSigners, uint256 numSigners) {
        require(documents[_docId].owner != address(0), "Document does not exist");

        owner = documents[_docId].owner;
        ipfsHash = documents[_docId].ipfsHash;
        isUploaded = documents[_docId].isUploaded;
        requiredSigners = documents[_docId].requiredSigners;
        numSigners = getNumSigners(_docId);
    }

  function getNumSigners(uint256 _docId) internal view returns (uint256) {
    uint256 count = 0;
    // Iterate over the signers mapping using signer addresses
    for (uint256 i = 0; i < documents[_docId].requiredSigners; i++) {
        address signer = address(uint160(i));
        if (documents[_docId].signed[signer]) {
            count++;
        }
    }
    return count;
}

    function getUserDocuments(address _user) external view returns (uint256[] memory) {
        return userDocuments[_user];
    }
}
x
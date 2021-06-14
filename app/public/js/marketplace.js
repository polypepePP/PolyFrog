// const axios = require('axios');
const web3Instance = new Web3(window['ethereum']);

if (typeof window.ethereum !== 'undefined') {
    console.log('metamaskt is installed!')
} else {
    console.log('install metamask')
    document.querySelector('.enableEthereumButton').innerHTML = '<a href="https://www.metamask.io">Install Metamask</a>'
}

const ethereumButton = document.querySelector('.enableEthereumButton')
const showAccount = document.querySelector('#currentAddress')
const showBalance = document.querySelector('#currentAddressBalance')

let currentUsersLpBalance = 0
let currentUsersDepositedLpBalance = 0
let currentAccount = ''

ethereumButton.addEventListener('click', () => {
    getAccount()
})

function popup() {
    var popup = document.getElementById("Popup");
    popup.classList.toggle("show");
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

async function getAccount() {
    // web3Instance.eth.net.getNetworkType().chainid
    const network = await web3Instance.eth.net.getId()
    console.log("network ID: ",network)
    // console.log(network)
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
    // console.log(accounts[0], 'accounts')
    const account = accounts[0]
    showAccount.innerHTML = account
    currentAccount = account

    const balance = await ethereum
        .request({
            method: 'eth_getBalance',
            params: [account, "latest"]
        })
    const read = parseInt(balance) / 10 ** 18
    // console.log(read.toFixed(5))

    if (network === 137) { // rinkeby=4  matic=137
        getWalletBalanceOfFrogToken(currentAccount)

        document.getElementById('enableMeta').hidden = true
        for (i=0; i <= nft_metadata_array.length -1; i++) {
            // console.log(i)
            const purchaseIDName = ("purchaseID" + [i]).toString()
            const openSeaIDName = ("openSeaID" + [i]).toString()
            const enableMetaCardIDName = ("enableMetaCard" + [i]).toString()
            showBalance.innerHTML = read.toFixed(5)
            // const idName = ("picture" + [i]).toString()
            
            document.getElementById(enableMetaCardIDName).hidden = true
            document.getElementById(purchaseIDName).hidden = false
            document.getElementById(openSeaIDName).hidden = false

            update()
            // getNFTs()
        }

    } else {
        document.getElementById('enableMeta').innerHTML = "Switch to Matic Network and Try Again"
    }
}

const etherscan_tx = "<a target='_blank' href='https://polygonscan.com/tx/"
const reverted = "Transaction reverted :("
const process = "Processing transaction..."
const success = "'>Success! Click to view Transaction</a>"

const nft_metadata_array = [
    {
        "description": "The common Farmer Polypepe relaxing after a hard day of farming frog tokens.",
        "external_url": "https://opensea.io/collection/official-polypepe-nfts",
        "image": "./../images/1nfts/gifs/NORMAL_NFTfarmer.gif",
        "name": "Farmer Polypepe",
        "contract": "0x810735EfC188B79f277a9a0c7b854996Dba4f239",
        "amountSpecial": "10"
    },
    {
        "description": "As an officer of the law, Officer PolyPepe is here to protect and serve the people of the PolyPepe community. Respect his authority.",
        "external_url": "https://www.polypepe.com",
        "image": "./../images/1nfts/gifs/NORMAL_NFTcartman.gif",
        "name": "Officer PolyPepe",
        "contract": "0x02f34506F00558686128c5E655a622eb559ab5c8",
        "amountSpecial": "5"
    },
    {
        "description": "Pepe's face appears to be melting off. Uh oh, looks like Pepe forgot his sunscreen!",
        "external_url": "https://www.polypepe.com",
        "image": "./../images/1nfts/gifs/NORMAL_NFTmelt.gif",
        "name": "Face melting Pepe",
        "contract": "0xB430f494A91bAAe407b2D009563C7a093cc0C5Eb",
        "amountSpecial": "2"
    },
    {
        "description": "The Majestic Dragon Ballz Pepe. He floats amongst the clouds as yet another day passes him by while scratching his testicles.",
        "external_url": "https://www.polypepe.com",
        "image": "./../images/1nfts/gifs/NORMAL_NFTdragon.gif",
        "name": "Dragaon Ballz Pepe",
        "contract": "0x36567b61Be4F71d793F798eb6EAd67668fE9f264",
        "amountSpecial": "1"
    },
    {
        "description": "A polygon frog wearing polygon glasses on a black background.",
        "external_url": "https://www.polypepe.com",
        "image": "./../images/1nfts/gifs/DEV_NORMAL_SHAKE.gif",
        "name": "Frog with glasses",
        "contract": "0x534090897d29C58C6c282f8c2f18328881d4d796",
        "amountSpecial": "6"
    }
]

const NFT_address_abi = JSON.parse('[{"inputs":[{"internalType":"address","name":"_frogToken","type":"address"},{"internalType":"string","name":"_metadata","type":"string"},{"internalType":"string","name":"_firstEditionMetadata","type":"string"},{"internalType":"uint256","name":"_cost","type":"uint256"},{"internalType":"uint256","name":"_maxMintable","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"recipient","type":"address"}],"name":"batchMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"batchMintFirstEdition","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"firstEditionMetadata","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"frogToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isPurchable","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"makePurchable","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"maxMintable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"metadata","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintAfterTokenTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
// const NFT_Contract = new web3Instance.eth.Contract(NFT_address_abi, NFT_address);

// FROG Token
const yield_address = '0xb7BCeAED243fFDCA3a213EeC66d51AcaC8Ae3F3c';
const yield_address_abi = JSON.parse('[{"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"disableMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromBlacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeInBlacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isBlacklisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isMintDisabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
const yield_Contract = new web3Instance.eth.Contract(yield_address_abi, yield_address);

function getNFTs() {
    getContractData(0)
    getContractData(1)
    getContractData(2)
    getContractData(3)
    getContractData(4)
}

function getContractData(contractNumber) {
    const currentContract = nft_metadata_array[contractNumber].contract
    const single_NFT_Contract = new web3Instance.eth.Contract(NFT_address_abi, currentContract);
    single_NFT_Contract.methods.maxMintable().call().then(function (maxMintable) {
        single_NFT_Contract.methods.totalSupply().call().then(function (totalSupply) {
            single_NFT_Contract.methods.cost().call().then(function (cost) {
                yield_Contract.methods.allowance(currentAccount, currentContract).call().then(function (isApprovedFor) {
                    const purchaseID = ("purchaseID" + contractNumber).toString()
                    const mintableID = ("totalMintable" + contractNumber).toString()
                    const priceID = ("priceDiv" + contractNumber).toString()
                    
                    const formattedCost = parseInt(cost) / 10 ** 18
                    const isTrue = parseInt(totalSupply) === parseInt(maxMintable)
                    // console.log(parseInt(totalSupply) === parseInt(maxMintable))

                    if (isTrue && isApprovedFor > parseInt(cost)) {
                        document.getElementById(mintableID).innerHTML = totalSupply + '/' + maxMintable
                        document.getElementById(priceID).innerHTML = formattedCost
                        // document.getElementById(purchaseID).setAttribute("onClick", "purchase('" + currentContract + "')");
                        document.getElementById(purchaseID).innerHTML = "SOLD OUT"
                    } else if (!isTrue && isApprovedFor > parseInt(cost)) {
                        document.getElementById(mintableID).innerHTML = totalSupply + '/' + maxMintable
                        document.getElementById(priceID).innerHTML = formattedCost
                        document.getElementById(purchaseID).setAttribute("onClick", "purchase('" + currentContract + "'," + contractNumber + "," + formattedCost + ")");
                        document.getElementById(purchaseID).innerHTML = 'Purchase for ' + formattedCost + ' Frog Tokens'
                    } else {
                        document.getElementById(mintableID).innerHTML = totalSupply + '/' + maxMintable
                        document.getElementById(priceID).innerHTML = formattedCost
                        document.getElementById(purchaseID).setAttribute("onClick", "approveLP_account('" + currentContract + "', '" + contractNumber + "', '" + formattedCost + "', '" + isTrue + "');");
                        document.getElementById(purchaseID).innerHTML = "Approve this contract"
                    }
                })
            })
        })
    })
}

function getWalletBalanceOfFrogToken(currentAccount) {
    yield_Contract.methods.balanceOf(currentAccount).call().then(function (frogBalance) {
        // console.log(parseInt(frogBalance) / 10 ** 18, "balance Of LP Token In Users Wallet")
        const balance = parseInt(frogBalance) / 10 ** 18
        currentUsersLpBalance = balance
        document.getElementById('currentAddressFrogBalance').innerHTML = Number(balance).toLocaleString()
    })
}

function getTotalSupply(contractNumber) {
    // console.log(contractNumber)
    const currentContract = nft_metadata_array[contractNumber].contract
    const single_NFT_Contract = new web3Instance.eth.Contract(NFT_address_abi, currentContract);
    single_NFT_Contract.methods.totalSupply().call().then(function (totalSupply) {
        const balance = parseInt(totalSupply) / 10 ** 18
        console.log(balance)
        document.getElementById('totalMintable' + contractNumber).innerHTML = Number(balance).toLocaleString()
    })
}

function displayNFTs() {
    for (i = 0; i <= nft_metadata_array.length - 1; i++) {
        const idName = ("picture" + [i]).toString()
        const nftArray = nft_metadata_array[i]
        const { description, name, image, contract, amountSpecial, external_url } = nftArray

        document.getElementById(idName).innerHTML =
            '<div class="card-sl m-3">' +
            '<div class="card-image border-bottom">' +
            '<img src="' + image + '"/>' +
            '</div>' +
            // '<a class="card-action" href="https:"><i class="fa fa-heart"></i></a>' +
            '<div class="card-heading">' +
            name +
            '</div>' +
            '<div class="card-text">' +
            description +
            '</div>' +
            '<div class="card-text">' +
            '<div class="row border-top" style="background-color: white;">' +
            '<div class="col-6">' +
            '<div class="card-text">' +
            'Total Minted' +
            '</div>' +
            '</div>' +
            '<div class="col-6">' +
            '<div class="card-text" id="totalMintable' + [i] +'">' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            // card 2
            '<div class="card-text">' +
            '<div class="row border-top" style="background-color: white;">' +
            '<div class="col-6">' +
            '<div class="card-text">' +
            'Price' +
            '</div>' +
            '</div>' +
            '<div class="col-6">' +
            '<div class="card-text" id="priceDiv' + [i] +'">' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +

            '<div class="card-text">' +
            '<div class="row border-top" style="background-color: white;">' +
            '<div class="col-6">' +
            '<div class="card-text">' +
            'Limited 1st Editions' +
            '</div>' +
            '</div>' +
            '<div class="col-6">' +
            '<div class="card-text">' +
            +amountSpecial+
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<a href="javascript:;" id="enableMetaCard' + [i] +'" class="enableEthereumButton card-button">Enable Metamask</a>' +
            '<a hidden id="purchaseID' + [i] +'" href="javascript:;" class="card-button"></a>' +
            '<a hidden id="openSeaID' + [i] + '" href="https://opensea.io/assets/matic/' + contract + '/1" class="card-button2" target="_blank">Purchase 1/' + amountSpecial +' Signed First Edition NFTs</a>' +
            '</div>'
    }
}

function approveLP_account(currentContract, contractNumber, cost, isTrue) {
    const idName = ("button" + contractNumber).toString()
    yield_Contract.methods.approve(currentContract, "100000000000000000000000000").send({ from: currentAccount })
    .on('transactionHash', tx => {
        // console.log("Transaction: ", tx);
        document.getElementById("purchaseID" + contractNumber).innerHTML = '<a class="card-button"> Awaiting Approval...</a>'
    })
    .then(receipt => {
        console.log('Mined', receipt)
        if (receipt.status == '0x1' || receipt.status == 1) {
            if (isTrue) {
                document.getElementById("purchaseID" + contractNumber).innerHTML = "SOLD OUT"
            } else {
                // console.log("Transaction Successful")
                document.getElementById("purchaseID" + contractNumber).innerHTML = 'Purchase for ' + cost + ' Frog Tokens</a > '
                document.getElementById("purchaseID" + contractNumber).setAttribute("onClick", "purchase('" + currentContract + "',"+ contractNumber +"," + cost + ");");
            }
        }
        else {
            // console.log('Transaction Failed')
            document.getElementById(idName).innerHTML = '<p class="card-button">COULD NOT APPROVE</p>'
        }
    })
    .catch(err => {
        console.log('Error', err)
    })
    .finally(() => {
    })
}

function purchase(contractAddress, contractNumber, cost) {
    const single_NFT_Contract = new web3Instance.eth.Contract(NFT_address_abi, contractAddress)
    single_NFT_Contract.methods.mintAfterTokenTransfer().send({ from: currentAccount })
    .on('transactionHash', tx => {
        console.log("Transaction: ", tx);
    })
    .then(receipt => {
        console.log(reciept.status, "  status ")
    })
    .catch(err => {
        console.log('Error', err)
    })
    .finally(() => {
        getNFTs()
    })
}

displayNFTs()

// auto update stats every 10 seconds
function update() {
    getNFTs()
    setTimeout(function () {
        update()
    }, 10000);
}
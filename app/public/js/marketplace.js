
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

    if (network === 4) { // rinkeby   matic=137
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

const etherscan_tx = "<a target='_blank' href='https://explorer-mainnet.maticvigil.com/tx/"
const reverted = "Transaction reverted :("
const process = "Processing transaction..."
const success = "'>Success! Click to view Transaction</a>"

const nft_metadata_array = [
    {
        "description": "This is the description for GOAT 1 Normal NFT",
        "external_url": "https://www.google.com",
        "image": "./../images/goats/goat1.jpg",
        "name": "Goat 1 Normal",
        "contract": "0x7BE48637375cFa407c296e3e837C950d71480D7f"
    },
    {
        "description": "This is the description for GOAT 2 Normal NFT",
        "external_url": "https://www.google.com",
        "image": "./../images/goats/goat2.jpg",
        "name": "Goat 2 Normal",
        "contract": "0xde86b97Ae608aFDa3658FC0B4E9449C9473C8c52"
    },
    {
        "description": "This is the description for GOAT 3 Normal NFT",
        "external_url": "https://www.google.com",
        "image": "./../images/goats/goat3.jpg",
        "name": "Goat 3 Normal",
        "contract": "0xdb0d15064187Ad54BdcD945203Fcb03C10a847b6"
    },
    {
        "description": "This is the description for GOAT 4 Normal NFT",
        "external_url": "https://www.google.com",
        "image": "./../images/goats/goat4.jpg",
        "name": "Goat 4 Normal",
        "contract": "0x2a1eE0Ae6Ffe15db84a99Ed2B67c1445B8Ecc262"
    }
]
const NFT_address = '0x1A7E8b329C74c802c58A61d2072938C055998732';
const NFT_address_abi = JSON.parse('[{"inputs":[{"internalType":"address","name":"_frogToken","type":"address"},{"internalType":"string","name":"_metadata","type":"string"},{"internalType":"uint256","name":"_cost","type":"uint256"},{"internalType":"uint256","name":"_maxMintable","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"approveTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"recipient","type":"address"}],"name":"batchMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"frogToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"metadata","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mintAfterTokenTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"returnTotalSupplyOfFrogToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
const NFT_Contract = new web3Instance.eth.Contract(NFT_address_abi, NFT_address);

// FROG Token
const yield_address = '0x35436403fa84a8Dacc6139D747f3De77b49959D6';
const yield_address_abi = JSON.parse('[{"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"disableMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromBlacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeInBlacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isBlacklisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isMintDisabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
const yield_Contract = new web3Instance.eth.Contract(yield_address_abi, yield_address);

function getNFTs() {
    getContractData(0)
    getContractData(1)
    getContractData(2)
    getContractData(3)
}

function getContractData(contractNumber) {
    const currentContract = nft_metadata_array[contractNumber].contract
    const single_NFT_Contract = new web3Instance.eth.Contract(NFT_address_abi, currentContract);
    single_NFT_Contract.methods.maxMintable().call().then(function (maxMintable) {
        single_NFT_Contract.methods.totalSupply().call().then(function (totalSupply) {
            single_NFT_Contract.methods.cost().call().then(function (cost) {
                yield_Contract.methods.allowance(currentAccount, currentContract).call().then(function (isApprovedFor) {
                    const formattedCost = parseInt(cost) / 10 ** 18
                    const isTrue = parseInt(totalSupply) === parseInt(maxMintable)
                    // console.log(parseInt(totalSupply) === parseInt(maxMintable))
                    if (isTrue && isApprovedFor > parseInt(cost)) {

                        // if approved for is greater than cost of NFT
                            document.getElementById("totalMintable" + contractNumber).innerHTML = totalSupply + '/' + maxMintable
                            document.getElementById("priceDiv" + contractNumber).innerHTML = formattedCost
                            // document.getElementById("purchaseID" + contractNumber).setAttribute("onClick", "purchase('" + currentContract + "')");
                            document.getElementById("purchaseID" + contractNumber).innerHTML = "SOLD OUT"
                    } else if (!isTrue && isApprovedFor > parseInt(cost)) {
                        document.getElementById("totalMintable" + contractNumber).innerHTML = totalSupply + '/' + maxMintable
                        document.getElementById("priceDiv" + contractNumber).innerHTML = formattedCost
                        document.getElementById("purchaseID" + contractNumber).setAttribute("onClick", "purchase('" + currentContract + "')");
                        document.getElementById("purchaseID" + contractNumber).innerHTML = 'Purchase for ' + formattedCost + ' Frog Tokens'
                    } else {
                        document.getElementById("totalMintable" + contractNumber).innerHTML = totalSupply + '/' + maxMintable
                        document.getElementById("priceDiv" + contractNumber).innerHTML = formattedCost

                        document.getElementById("purchaseID" + contractNumber).setAttribute("onClick", "approveLP_account('" + currentContract + "', '" + contractNumber + "', '" + formattedCost + "');");
                        document.getElementById("purchaseID" + contractNumber).innerHTML = "Approve this contract"
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
    console.log(contractNumber)
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
        const { description, name, image, contract } = nftArray

        document.getElementById(idName).innerHTML =
            '<div class="card-sl m-3">' +
            '<div class="card-image">' +
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
            'Total Sold' +
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
            '<a id="enableMetaCard' + [i] +'" class="enableEthereumButton card-button">Enable Metamask</a>' +
            '<a hidden id="purchaseID' + [i]  +'" href="#" class="card-button"></a>' +
            '<a hidden id="openSeaID' + [i] +'" href="https://testnets.opensea.io/assets/' + contract + '/1" class="card-button2" target="_blank"> Bid on First Edition</a>' +
            '</div>'
    }
}

function approveLP_account(currentContract, contractNumber, cost) {
    const idName = ("button" + contractNumber).toString()
    yield_Contract.methods.approve(currentContract, "100000000000000000000000000").send({ from: currentAccount })
    .on('transactionHash', tx => {
        // console.log("Transaction: ", tx);
        document.getElementById("purchaseID" + contractNumber).innerHTML = '<a class="card-button"> Awaiting Approval...</a>'
    })
    .then(receipt => {
        console.log('Mined', receipt)
        if (receipt.status == '0x1' || receipt.status == 1) {
            // console.log("Transaction Successful")
            document.getElementById("purchaseID" + contractNumber).innerHTML = 'Purchase for ' + cost + ' Frog Tokens</a > '
            document.getElementById("purchaseID" + contractNumber).setAttribute("onClick", "purchase('" + currentContract + "');");
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

function purchase(contractAddress) {
    const single_NFT_Contract = new web3Instance.eth.Contract(NFT_address_abi, contractAddress)
    single_NFT_Contract.methods.mintAfterTokenTransfer().send({ from: currentAccount })
    .on('transactionHash', tx => {
        console.log("Transaction: ", tx);
    })
    .then(receipt => {
        if (receipt.status == '0x1' || receipt.status == 1) {
            console.log('Mined', receipt)
            console.log('Transaction Success')
            // getNFTs()
        }
        else {
            console.log('Transaction Failed')
        }
    })
    .catch(err => {
        console.log('Error', err)
    })
    // .finally(() => {
    // })
}

displayNFTs()

// auto update stats every 10 seconds
function update() {
    getNFTs()
    setTimeout(function () {
        update()
    }, 10000);
}
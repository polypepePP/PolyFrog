
// const axios = require('axios');
const web3Instance = new Web3(window['ethereum']);

if (typeof window.ethereum !== 'undefined') {
    console.log('metamaskt is installed!')
} else {
    console.log('install metamask')
    document.querySelector('.enableEthereumButton').innerHTML = '<a href="https://www.metamask.io">Install Metamask</a>'
}

const ethereumButton = document.querySelector('.enableEthereumButton')
// const showAccount = document.querySelector('.showAccount')
// const showBalance = document.querySelector('.showBalance')

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
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
    // console.log(accounts[0], 'accounts')
    const account = accounts[0]
    // showAccount.innerHTML = account
    currentAccount = account

    const balance = await ethereum
        .request({
            method: 'eth_getBalance',
            params: [account, "latest"]
        })
    const read = parseInt(balance) / 10 ** 18
    // console.log(read.toFixed(5))
    document.getElementById('enableMeta').hidden = true
  
}

const etherscan_tx = "<a target='_blank' href='https://explorer-mainnet.maticvigil.com/tx/"
const reverted = "Transaction reverted :("
const process = "Processing transaction..."
const success = "'>Success! Click to view Transaction</a>"

// NFT Contract
const NFT_address_array = [
    "0xf1aeA86722250Fe57965C3295A70790a606e77AB",
    "0xa7B42A1fC9e171A46D49c39DFaCA06f222d0B59A",
    "0x109F01e0037C3DB2b6BFF3aD692f2e455F9e1156",
    "0x0D5680650A29673047bC8cE9af1bBFcdE4618f34",
    "0x239532f87aa6a3f37a5C17e5136F1734e657FA7F",
    "0xfDe2A0f537a2df3616F192106E3FE7D7a1b060Fa"
]
const NFT_address = '0x1A7E8b329C74c802c58A61d2072938C055998732';
const NFT_address_abi = JSON.parse('[{"inputs":[{"internalType":"address","name":"_frogToken","type":"address"},{"internalType":"string","name":"_metadata","type":"string"},{"internalType":"uint256","name":"_cost","type":"uint256"},{"internalType":"uint256","name":"_maxMintable","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"approveTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"recipient","type":"address"}],"name":"batchMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"frogToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"metadata","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mintAfterTokenTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"returnTotalSupplyOfFrogToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
const NFT_Contract = new web3Instance.eth.Contract(NFT_address_abi, NFT_address);

// FROG Token
const yield_address = '0x35436403fa84a8Dacc6139D747f3De77b49959D6';
const yield_address_abi = JSON.parse('[{"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"disableMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromBlacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeInBlacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isBlacklisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isMintDisabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
const yield_Contract = new web3Instance.eth.Contract(yield_address_abi, yield_address);

function getNFTs() {
    for (i = 0; i <= NFT_address_array.length - 1; i++) {
        getBaseURIFromContract(i)
    }
}

function approveLP_account(currentContract, contractNumber, cost) {
    const idName = ("button" + contractNumber).toString()
    yield_Contract.methods.approve(currentContract, "100000000000000000000000000").send({ from: currentAccount })
        .on('transactionHash', tx => {
            document.getElementById(idName).innerHTML = '<a href="#" class="card-button"> Awaiting Approval...</a>'
            // getBaseURIFromContract(contractNumber)
            console.log("Transaction: ", tx);
            // document.getElementById('attack_transaction').innerHTML = process;
        })
        .then(receipt => {
            console.log('Mined', receipt)
            if (receipt.status == '0x1' || receipt.status == 1) {
                // console.log("Transaction Successful")
                document.getElementById(idName).innerHTML = '<a href="#" class="card-button" onclick="purchase(`' + currentContract + '`)"> Purchase for ' + cost + ' Frog Tokens</a>'
            }
            else {
                // console.log('Transaction Failed')
                document.getElementById(idName).innerHTML = '<a href="#" class="card-button">COULD NOT APPROVE</a>'
            }
        })
        .catch(err => {
            console.log('Error', err)
        })
        .finally(() => {
        })
}

function getBaseURIFromContract(contractNumber) {
    const currentContract = NFT_address_array[contractNumber]
    const single_NFT_Contract = new web3Instance.eth.Contract(NFT_address_abi, currentContract);
    single_NFT_Contract.methods.metadata().call().then(function (returnedURI) {
        single_NFT_Contract.methods.maxMintable().call().then(function (maxMintable) {
            single_NFT_Contract.methods.totalSupply().call().then(function (totalSupply) {
                single_NFT_Contract.methods.cost().call().then(function (cost) {
                    yield_Contract.methods.allowance(currentAccount, currentContract).call().then(function (isApprovedFor) {
                    console.log(isApprovedFor, "is approved for")
                    // if (isApprovedFor < cost) {
                        const approvedForPurchase = isApprovedFor
                    // }
                        console.log(returnedURI)
                        
                        axios.get(returnedURI)
                        .then(function (response) {
                            const idName = ("picture" + contractNumber).toString()
                            const buttonIDName = ("button" + contractNumber).toString()
                            console.log(parseInt(cost))
                            const formattedCost = parseInt(cost) / 10 ** 18
                            const {name, description, image, external_url} = response.data
                            if (isApprovedFor > parseInt(cost)) {
                            document.getElementById(idName).innerHTML =

                                    '<div class="card-sl">' +
                                        '<div class="card-image">' +
                                            '<img src="'+ image + '"/>' +
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
                                                    '<div class="card-text">' +
                                                        totalSupply + '/' + maxMintable +
                                                    '</div>' +
                                                '</div>' +
                                            '</div>' +
                                        '</div>' +
                                        '<a href="#" class="card-button" onclick="purchase(`' + currentContract + '`)"> Purchase for ' + formattedCost + ' Frog Tokens</a>' +
                                        '<a href="https://testnets.opensea.io/assets/' + currentContract + '/1" class="card-button2" target="_blank"> Bid on First Edition</a>' +
                                    '</div>'
                            console.log(response);
                            } else {
                                document.getElementById(idName).innerHTML =
                                    '<div class="card-sl">' +
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
                                    '<div class="card-text">' +
                                    totalSupply + '/' + maxMintable +
                                    '</div>' +
                                    '</div>' +
                                    '</div>' +
                                    '</div>' +
                                    '<div id=' + buttonIDName +'>' +
                                '<a href="#" class="card-button" onclick="approveLP_account(`' + currentContract + '`, ' + contractNumber + ',' + formattedCost +')"> Approve this contract to spend frog</a>' +
                                    '</div>' +
                                    '<a href="https://testnets.opensea.io/assets/' + currentContract + '/1" class="card-button2" target="_blank"> Bid on First Edition</a>' +
                                    '</div>'
                                console.log(response);
                            }
                        })
                        .catch(function (error) {
                            // handle error
                            console.log(error);
                        })
                        .then(function () {
                            // always executed
                        });
                    })
                })
            })
        })
    })
}


// '<button onclick="approveLP_account(`' + currentContract + '`)" class="btn btn-primary" style="background-color:#3195d6;"' +
//     'id="deposit">Approve</button>' +
// var htmlElements = "";
async function arrayLoop() {
    for (i = 0; i <= NFT_address_array.length - 1; i++) {
        getMultipleBaseURIsFromContract(i)
    }
}

function getMultipleBaseURIsFromContract() {
    var htmlElements = "";
    var container = document.getElementById("picture"+i);
    // console.log(NFT_address_array.length)

    for (i = 0; i <= NFT_address_array.length -1; i++) {
        const currentContract = NFT_address_array[i].trim()
        const single_NFT_Contract = new web3Instance.eth.Contract(NFT_address_abi, currentContract);
        single_NFT_Contract.methods.metadata().call().then(function (returnedURI) {
            single_NFT_Contract.methods.maxMintable().call().then(function (maxMintable) {
                single_NFT_Contract.methods.cost().call().then(function (cost) {
                // single_NFT_Contract.methods.totalMinted().call().then(function (totalSupply) {
            // console.log(returnedURI)
                    axios.get(returnedURI)
                    .then(function (response) {
                        console.log(currentContract,'current nft')
                        const { name, description, image, external_url } = response.data
                        htmlElements += 
                                '<div class="col-md-4 col-sm-12 text-center mb-3">' +
                                    '<div class="card m-2" style="width: 18rem;">' +
                                        '<img class="card-img-top" src="' + image + '" alt="image">' +
                                            '<div class="card-body">' +
                                            '<div id="currentContract" value="' + currentContract + '"></div>' +
                                            '<h5 class="card-title">' + name + '</h5>' +
                                            '<p class="card-text">' + description + '</p>' +
                                            // '<p class="card-text">' + totalSupply + '/' + maxMintable + '</p>' +
                                            '<p class="card-text">' + maxMintable + '</p>' +
                                            '<a href="' + external_url + '" class="btn btn-primary">Go somewhere</a>' +
                                            '<button onclick="purchase(`' + currentContract + '`)" class="btn btn-primary" style="background-color:#3195d6;"' +
                                                'id="deposit">Click to Purchase</button>' +
                                            '</div>' +
                                        '</div>' +
                                    '</div>' +
                                '</div>'

                        // console.log(htmlElements)
                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    })
                    .then(function () {
                        // always executed
                        container.innerHTML = htmlElements;
                    });
                })
            })
        })
    }
}

function purchase(contractAddress) {
    const single_NFT_Contract = new web3Instance.eth.Contract(NFT_address_abi, contractAddress);
    single_NFT_Contract.methods.mintAfterTokenTransfer().send({ from: currentAccount })
        .on('transactionHash', tx => {
            console.log("Transaction: ", tx);
            // document.getElementById('deposit_transaction').innerHTML = process;
        })
        .then(receipt => {
            console.log('Mined', receipt)
            // if (receipt.status == '0x1' || receipt.status == 1) {
            //     // console.log("Transaction Successful")
            //     document.getElementById('deposit_transaction').innerHTML = etherscan_tx + receipt.transactionHash + success
            // }
            // else {
            //     // console.log('Transaction Failed')
            //     document.getElementById('deposit_transaction').innerHTML = reverted
            // }
        })
        .catch(err => {
            console.log('Error', err)
            // document.getElementById('deposit_transaction').innerHTML = "Transaction Canceled"
            // setTimeout(function () {
            //     document.getElementById('deposit_transaction').innerHTML = "&nbsp;"
            // }, 5000);
        })
        .finally(() => {
            // getDepositedLPTokenBalance()
            // getYieldBalanceForUser()
            // getWalletBalanceOfLPToken()
            // getPoolBalance()
        })

}

// function withdrawLPTokens() {
//     const amount = $('#input_amount_withdraw').val()
//     if (amount > currentUsersDepositedLpBalance) {
//         document.getElementById('withdraw_transaction').innerHTML = "You don't have that many tokens";
//         return
//     }
//     const format = web3Instance.utils.toWei(amount, "ether")
//     farm_Contract.methods.withdraw(0, format).send({ from: currentAccount })
//         .on('transactionHash', tx => {
//             // console.log("Transaction: ", tx);
//             document.getElementById('withdraw_transaction').innerHTML = process;
//         })
//         .then(receipt => {
//             // console.log('Mined', receipt)
//             if (receipt.status == '0x1' || receipt.status == 1) {
//                 // console.log("Transaction Successful")
//                 document.getElementById('withdraw_transaction').innerHTML = etherscan_tx + receipt.transactionHash + success
//             }
//             else {
//                 // console.log('Transaction Failed')
//                 document.getElementById('withdraw_transaction').innerHTML = reverted
//             }
//         })
//         .catch(err => {
//             // console.log('Error', err)
//             document.getElementById('withdraw_transaction').innerHTML = "Transaction Canceled"
//             setTimeout(function () {
//                 document.getElementById('withdraw_transaction').innerHTML = "&nbsp;"
//             }, 5000);
//         })
//         .finally(() => {
//             getDepositedLPTokenBalance()
//             getYieldBalanceForUser()
//             getWalletBalanceOfLPToken()
//             getPoolBalance()
//             paidOut()
//         })
// }

// function depositLPTokens() {
//     const amount = $("#input_amount").val()
//     if (amount > currentUsersLpBalance) {
//         document.getElementById('deposit_transaction').innerHTML = "You don't have that many tokens";
//         return
//     }
//     // const formattedAmount = window.web3.toWei(amount)
//     const format = web3Instance.utils.toWei(amount, "ether")
//     farm_Contract.methods.deposit(0, format).send({ from: currentAccount })
//         .on('transactionHash', tx => {
//             // console.log("Transaction: ", tx);
//             document.getElementById('deposit_transaction').innerHTML = process;
//         })
//         .then(receipt => {
//             // console.log('Mined', receipt)
//             if (receipt.status == '0x1' || receipt.status == 1) {
//                 // console.log("Transaction Successful")
//                 document.getElementById('deposit_transaction').innerHTML = etherscan_tx + receipt.transactionHash + success
//             }
//             else {
//                 // console.log('Transaction Failed')
//                 document.getElementById('deposit_transaction').innerHTML = reverted
//             }
//         })
//         .catch(err => {
//             // console.log('Error', err)
//             document.getElementById('deposit_transaction').innerHTML = "Transaction Canceled"
//             setTimeout(function () {
//                 document.getElementById('deposit_transaction').innerHTML = "&nbsp;"
//             }, 5000);
//         })
//         .finally(() => {
//             getDepositedLPTokenBalance()
//             getYieldBalanceForUser()
//             getWalletBalanceOfLPToken()
//             getPoolBalance()
//         })
// }

// function approveLP_account() {
//     LP_Contract.methods.approve(farm_address, "100000000000000000000000000000000").send({ from: currentAccount })
//         .on('transactionHash', tx => {
//             document.getElementById("approve").hidden = true;

//             // console.log("Transaction: ", tx);
//             // document.getElementById('attack_transaction').innerHTML = process;
//         })
// }

// function checkApproval_account() {
//     LP_Contract.methods.allowance(currentAccount, farm_address).call().then(function (isApprovedFor) {
//         // console.log(isApprovedFor, "is approved for")
//         if (isApprovedFor >= currentUsersLpBalance) {
//             document.getElementById("approve").hidden = true;
//             // document.getElementById("isApproved").hidden = false;
//             document.getElementById('farmBalance').innerHTML = balance
//         }
//     })
// }

// function getPoolBalance() {
//     yield_Contract.methods.balanceOf(farm_address).call().then(function (balanceOfFarm) {
//         // console.log(parseInt(balanceOfFarm) / 10 ** 9, "Farm Balance")
//         const balance = parseInt(balanceOfFarm) / 10 ** 18
//         document.getElementById('farmBalance').innerHTML = Number(balance).toLocaleString()
//     })
// }

// function getDepositedLPTokenBalance() {
//     farm_Contract.methods.deposited(0, currentAccount).call().then(function (balanceOfLPToken) {
//         // console.log(parseInt(balanceOfLPToken) / 10 ** 18, "Users LPToken Balance in Farm")
//         const balance = parseInt(balanceOfLPToken) / 10 ** 18
//         currentUsersDepositedLpBalance = balance
//         document.getElementById('LPTokenBalance').innerHTML = Number(balance).toLocaleString()
//     })
// }

// function getYieldBalanceForUser() {
//     farm_Contract.methods.pending(0, currentAccount).call().then(function (yieldBalanceForUser) {
//         // console.log(parseInt(yieldBalanceForUser) / 10 ** 9, "yield Balance For User")
//         const balance = parseInt(yieldBalanceForUser) / 10 ** 18
//         document.getElementById('pendingYieldTokenBalance').innerHTML = Number(balance).toLocaleString()
//     })
// }

// function getWalletBalanceOfLPToken() {
//     LP_Contract.methods.balanceOf(currentAccount).call().then(function (balanceOfLPTokenInUsersWallet) {
//         // console.log(parseInt(balanceOfLPTokenInUsersWallet) / 10 ** 18, "balance Of LP Token In Users Wallet")
//         const balance = parseInt(balanceOfLPTokenInUsersWallet) / 10 ** 18
//         currentUsersLpBalance = balance
//         document.getElementById('LPTokenBalanceInUsersWallet').innerHTML = Number(balance).toLocaleString()
//     })
// }

// function getYieldUpdate() {
//     getYieldBalanceForUser()
//     setTimeout(() => {
//         getYieldUpdate()
//     }, 10000);
// }

// function getPoolPercent() {
//     // balance of farm in the LP_contract
//     // deposited in pool 0 for current user
//     LP_Contract.methods.balanceOf(farm_address).call().then(function (balanceOfLPTokenInUsersWallet) {
//         // console.log(parseInt(balanceOfLPTokenInUsersWallet) / 10 ** 18, "balance of all users")
//         const balanceOfFarm = parseInt(balanceOfLPTokenInUsersWallet) / 10 ** 18
//         farm_Contract.methods.deposited(0, currentAccount).call().then(function (yieldBalanceForUserInFarm) {
//             // console.log(parseInt(yieldBalanceForUserInFarm) / 10 ** 9, "yield Balance For User")
//             const balanceOfUserInFarm = parseInt(yieldBalanceForUserInFarm) / 10 ** 18
//             // console.log((balanceOfUserInFarm / balanceOfFarm)*100, "percent")
//             document.getElementById('percentOfFarm').innerHTML = (balanceOfUserInFarm / balanceOfFarm) * 100 + "%"
//         })
//     })
// }

// function paidOut() {
//     farm_Contract.methods.paidOut().call().then(function (totalPaidRewards) {
//         // console.log(parseInt(yieldBalanceForUser) / 10 ** 9, "yield Balance For User")
//         const balance = parseInt(totalPaidRewards) / 10 ** 18
//         document.getElementById('totalPaid').innerHTML = Number(balance).toLocaleString()
//     })
// }

// paidOut()
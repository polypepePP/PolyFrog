
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
    const accounts = await ethereum.request({ method: 'eth_requestAccounts'})
    // console.log(accounts[0], 'accounts')
    const account = accounts[0]
    // showAccount.innerHTML = account
    currentAccount = account

    const balance = await ethereum
    .request({
        method: 'eth_getBalance',
        params: [account, "latest"]
    })
    const read = parseInt(balance)/ 10**18
    // console.log(read.toFixed(5))
    
    // showBalance.innerHTML = read.toFixed(5)
    document.getElementById('enableMeta').hidden = true
    getPoolBalance()
    getDepositedLPTokenBalance()
    getYieldUpdate()
    getWalletBalanceOfLPToken()
    checkApproval_account()
    getPoolPercent()
    paidOut()
}

const etherscan_tx = "<a target='_blank' href='https://kovan.etherscan.io/tx/"
const reverted = "Transaction reverted :("
const process = "Processing transaction..."
const success = "'>Success! Click to view Transaction</a>"

// Farm Contract
const farm_address = '0x16AD9807DD0B1839621368B69E264F9B8b061c57';
const farm_address_abi = JSON.parse('[{"inputs":[{"internalType":"contract IERC20","name":"_erc20","type":"address"},{"internalType":"uint256","name":"_rewardPerBlock","type":"uint256"},{"internalType":"uint256","name":"_startBlock","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_lpToken","type":"address"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"currentBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"deposited","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"endBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"erc20","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"fund","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paidOut","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pending","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accERC20PerShare","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalPending","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_rewardPerBlock","type":"uint256"}],"name":"updateBlockReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_endBlock","type":"uint256"}],"name":"updateEndBlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_startBlock","type":"uint256"}],"name":"updateStartBlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
const farm_Contract = new web3Instance.eth.Contract(farm_address_abi, farm_address);

// PEPE LP token
const LP_address = '0x04b38106dfa2020a00f2c3b208215705612a54da';
const LP_address_abi = JSON.parse('[{"inputs":[{"internalType":"uint256","name":"initialSupply","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]');
const LP_Contract = new web3Instance.eth.Contract(LP_address_abi, LP_address);

// FROG Token
const yield_address = '0x79104677448c6F84A88B8C75F66982A911267E79';
const yield_address_abi = JSON.parse('[{"inputs":[{"internalType":"uint256","name":"initialSupply","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]');
const yield_Contract = new web3Instance.eth.Contract(yield_address_abi, yield_address);

function harvest() {
    
    
}


function withdrawLPTokens() {
    const amount = $('#input_amount_withdraw').val()
    if (amount > currentUsersDepositedLpBalance) {
        document.getElementById('withdraw_transaction').innerHTML = "You don't have that many tokens";
        return
    }
    const format = web3Instance.utils.toWei(amount, "ether")
    farm_Contract.methods.withdraw(0, format).send({ from: currentAccount })
    .on('transactionHash', tx => {
        // console.log("Transaction: ", tx);
        document.getElementById('withdraw_transaction').innerHTML = process;
    })
    .then(receipt => {
        // console.log('Mined', receipt)
        if (receipt.status == '0x1' || receipt.status == 1) {
            // console.log("Transaction Successful")
            document.getElementById('withdraw_transaction').innerHTML = etherscan_tx + receipt.transactionHash + success
        }
        else {
            // console.log('Transaction Failed')
            document.getElementById('withdraw_transaction').innerHTML = reverted
        }
    })
    .catch(err => {
        // console.log('Error', err)
        document.getElementById('withdraw_transaction').innerHTML = "Transaction Canceled"
        setTimeout(function () {
            document.getElementById('withdraw_transaction').innerHTML = "&nbsp;"
        }, 5000);
    })
    .finally(() => {
        getDepositedLPTokenBalance()
        getYieldBalanceForUser()
        getWalletBalanceOfLPToken()
        getPoolBalance()
    })
}

function depositLPTokens() {
    const amount = $("#input_amount").val()
    if (amount > currentUsersLpBalance) {
        document.getElementById('deposit_transaction').innerHTML = "You don't have that many tokens";
        return
    }
    // const formattedAmount = window.web3.toWei(amount)
    const format = web3Instance.utils.toWei(amount, "ether")
    farm_Contract.methods.deposit(0, format).send({ from: currentAccount })
    .on('transactionHash', tx => {
        // console.log("Transaction: ", tx);
        document.getElementById('deposit_transaction').innerHTML = process;
    })
    .then(receipt => {
        // console.log('Mined', receipt)
        if (receipt.status == '0x1' || receipt.status == 1) {
            // console.log("Transaction Successful")
            document.getElementById('deposit_transaction').innerHTML = etherscan_tx + receipt.transactionHash + success
        }
        else {
            // console.log('Transaction Failed')
            document.getElementById('deposit_transaction').innerHTML = reverted
        }
    })
    .catch(err => {
        // console.log('Error', err)
        document.getElementById('deposit_transaction').innerHTML = "Transaction Canceled"
        setTimeout(function () {
            document.getElementById('deposit_transaction').innerHTML = "&nbsp;"
        }, 5000);
    })
    .finally(() => {
        getDepositedLPTokenBalance()
        getYieldBalanceForUser()
        getWalletBalanceOfLPToken()
        getPoolBalance()
    })
}

function approveLP_account() {
    LP_Contract.methods.approve(farm_address, "100000000000000000000000000000000").send({ from: currentAccount })
    .on('transactionHash', tx => {
        // console.log("Transaction: ", tx);
        // document.getElementById('attack_transaction').innerHTML = process;
    })
}

function checkApproval_account() {
    LP_Contract.methods.allowance(currentAccount, farm_address).call().then(function (isApprovedFor) {
        // console.log(isApprovedFor, "is approved for")
        if (isApprovedFor >= currentUsersLpBalance) {
            document.getElementById("approve").hidden = true;
            // document.getElementById("isApproved").hidden = false;
            document.getElementById('farmBalance').innerHTML = balance
        }
    })
}

function getPoolBalance() {
    yield_Contract.methods.balanceOf(farm_address).call().then(function (balanceOfFarm) {
        // console.log(parseInt(balanceOfFarm) / 10 ** 9, "Farm Balance")
        const balance = parseInt(balanceOfFarm) / 10 ** 18
        document.getElementById('farmBalance').innerHTML = Number(balance).toLocaleString()
    })
}

function getDepositedLPTokenBalance() {
    farm_Contract.methods.deposited(0, currentAccount).call().then(function (balanceOfLPToken) {
        // console.log(parseInt(balanceOfLPToken) / 10 ** 18, "Users LPToken Balance in Farm")
        const balance = parseInt(balanceOfLPToken) / 10 ** 18
        currentUsersDepositedLpBalance = balance
        document.getElementById('LPTokenBalance').innerHTML = Number(balance).toLocaleString()
    })
}

function getYieldBalanceForUser() {
    farm_Contract.methods.pending(0, currentAccount).call().then(function (yieldBalanceForUser) {
        // console.log(parseInt(yieldBalanceForUser) / 10 ** 9, "yield Balance For User")
        const balance = parseInt(yieldBalanceForUser) / 10 ** 18
        document.getElementById('pendingYieldTokenBalance').innerHTML = Number(balance).toLocaleString()
    })
}

function getWalletBalanceOfLPToken() {
    LP_Contract.methods.balanceOf(currentAccount).call().then(function (balanceOfLPTokenInUsersWallet) {
        // console.log(parseInt(balanceOfLPTokenInUsersWallet) / 10 ** 18, "balance Of LP Token In Users Wallet")
        const balance = parseInt(balanceOfLPTokenInUsersWallet) / 10 ** 18
        currentUsersLpBalance = balance
        document.getElementById('LPTokenBalanceInUsersWallet').innerHTML = Number(balance).toLocaleString()
    })
}

function getYieldUpdate() {
    getYieldBalanceForUser()
    setTimeout(() => {
        getYieldUpdate()
    }, 10000);
}

function getPoolPercent() {
    // balance of farm in the LP_contract
    // deposited in pool 0 for current user
    LP_Contract.methods.balanceOf(farm_address).call().then(function (balanceOfLPTokenInUsersWallet) {
        // console.log(parseInt(balanceOfLPTokenInUsersWallet) / 10 ** 18, "balance of all users")
        const balanceOfFarm = parseInt(balanceOfLPTokenInUsersWallet) / 10 ** 18
        farm_Contract.methods.deposited(0, currentAccount).call().then(function (yieldBalanceForUserInFarm) {
            // console.log(parseInt(yieldBalanceForUserInFarm) / 10 ** 9, "yield Balance For User")
            const balanceOfUserInFarm = parseInt(yieldBalanceForUserInFarm) / 10 ** 18
            // console.log((balanceOfUserInFarm / balanceOfFarm)*100, "percent")
            document.getElementById('percentOfFarm').innerHTML = (balanceOfUserInFarm / balanceOfFarm) * 100 + "%"
        })
    })
}

function paidOut() {
    farm_Contract.methods.paidOut().call().then(function (totalPaidRewards) {
        // console.log(parseInt(yieldBalanceForUser) / 10 ** 9, "yield Balance For User")
        const balance = parseInt(totalPaidRewards) / 10 ** 18
        document.getElementById('totalPaid').innerHTML = Number(balance).toLocaleString()
    })
}
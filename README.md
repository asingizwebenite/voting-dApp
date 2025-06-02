# 🗳️ Voting DApp

A decentralized voting application built using **Solidity**, **Truffle**, **Ganache**, **MetaMask**, and a simple **HTML/JavaScript frontend**.

This DApp allows users to vote for candidates securely on the Ethereum blockchain. It demonstrates how smart contracts work with a frontend and connects seamlessly to Ethereum wallets like MetaMask.

---

## 📦 Tech Stack

- **Solidity** — Smart contract language
- **Truffle** — Development & testing framework
- **Ganache** — Local Ethereum blockchain for development
- **MetaMask** — Browser-based Ethereum wallet
- **HTML/CSS/JavaScript** — Frontend interface

---

## 🧱 Project Structure
<pre lang="markdown">
voting-dapp/
├── contracts/
│ └── Voting.sol # Smart contract
├── migrations/
│ ├── 1_initial_migration.js
│ └── 2_deploy_contracts.js
├── src/
│ ├── index.html # Frontend page
│ └── app.js # JavaScript for interacting with the contract
├── build/
│ └── contracts/ # Auto-generated contract artifacts
├── test/
│ └── voting.test.js # (Optional) test scripts
├── truffle-config.js # Truffle configuration
├── package.json # Node dependencies
└── README.md # Project documentation

   </pre>

---

## 🔧 Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Truffle](https://trufflesuite.com/truffle/)
- [Ganache](https://trufflesuite.com/ganache/)
- [MetaMask](https://metamask.io/)

Install Truffle globally if not already installed:

```bash
npm install -g truffle
## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/voting-dapp.git
cd voting-dapp
 ### 2. install dependencies
 npm install
### 3.  Compile the Smart Contracts
truffle compile
### 4.  start ganache migrate the contracts
Open the Ganache GUI or run the CLI with:
ganache-cli
### 5. migrate the contracts
truffle migrate






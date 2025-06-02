const contractAddress = "0xd7c19982eBe3da4c81996D57e431CD9022d15b70";
let contractABI;
let web3;
let votingContract;

async function loadABI() {
  try {
    const response = await fetch('/build/contracts/Voting.json');
    contractABI = await response.json();
  } catch (err) {
    console.error("Failed to load ABI:", err);
    alert("Could not load contract ABI. Check path.");
  }
}

async function connectMetaMask() {
  if (typeof window.ethereum !== 'undefined') {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.getAccounts();
      document.getElementById('account').innerText = `Connected Account: ${accounts[0]}`;

      if (!contractABI) {
        await loadABI();
      }

      votingContract = new web3.eth.Contract(contractABI.abi, contractAddress);
      loadCandidates(votingContract, accounts[0]);
    } catch (err) {
      console.error("Failed to connect MetaMask:", err);
    }
  } else {
    alert("MetaMask not detected!");
  }
}

async function loadCandidates(contract, account) {
  try {
    const count = await contract.methods.candidatesCount().call();
    const list = document.getElementById("candidates");
    list.innerHTML = "";
    for (let i = 1; i <= count; i++) {
      const candidate = await contract.methods.candidates(i).call();
      const li = document.createElement("li");
      li.innerText = `${candidate.name} ${candidate.voteCount} votes`;
      const button = document.createElement("button");
      button.innerText = "Vote";
      button.onclick = () => vote(contract, account, i);
      li.appendChild(button);
      list.appendChild(li);
    }
  } catch (err) {
    console.error("Error loading candidates:", err);
    alert("Error loading candidates. Check console.");
  }
}

async function vote(contract, account, candidateId) {
  try {
    await contract.methods.vote(candidateId).send({ from: account });
    alert("Vote successfully cast!");
    loadCandidates(contract, account);
  } catch (err) {
    console.error("Error casting vote:", err);
    alert("Transaction failed or already voted.");
  }
}


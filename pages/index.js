// import { useState, useEffect } from "react";
// import { ethers } from "ethers";
// import atm_abi from "../artifacts/contracts/Assessment.sol/Assessment.json";

// export default function HomePage() {
//     const [ethWallet, setEthWallet] = useState(undefined);
//     const [account, setAccount] = useState(undefined);
//     const [atm, setATM] = useState(undefined);
//     const [balance, setBalance] = useState(undefined);

//     const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
//     const atmABI = atm_abi.abi;

//     const getWallet = async () => {
//         if (window.ethereum) {
//             setEthWallet(window.ethereum);
//         }

//         if (ethWallet) {
//             const account = await ethWallet.request({ method: "eth_accounts" });
//             handleAccount(account);
//         }
//     };

//     const handleAccount = (account) => {
//         if (account) {
//             console.log("Account connected: ", account);
//             setAccount(account);
//         } else {
//             console.log("No account found");
//         }
//     };

//     const connectAccount = async () => {
//         if (!ethWallet) {
//             alert("MetaMask wallet is required to connect");
//             return;
//         }

//         const accounts = await ethWallet.request({
//             method: "eth_requestAccounts",
//         });
//         handleAccount(accounts);

//         // once wallet is set we can get a reference to our deployed contract
//         getATMContract();
//     };

//     const getATMContract = () => {
//         const provider = new ethers.providers.Web3Provider(ethWallet);
//         const signer = provider.getSigner();
//         const atmContract = new ethers.Contract(
//             contractAddress,
//             atmABI,
//             signer
//         );

//         setATM(atmContract);
//     };

//     const getBalance = async () => {
//         if (atm) {
//             setBalance((await atm.getBalance()).toNumber());
//         }
//     };

//     const deposit = async () => {
//         if (atm) {
//             const amount = document.getElementById("amount").value;
//             let tx = await atm.deposit(amount);
//             await tx.wait();
//             getBalance();
//         }
//     };

//     const withdraw = async () => {
//         if (atm) {
//             const amount = document.getElementById("amount").value;
//             let tx = await atm.withdraw(amount);
//             await tx.wait();
//             getBalance();
//         }
//     };

//     const withdrawAll = async () => {
//         if (atm) {
//             let tx = await atm.withdrawAll(1, { gasLimit: 200000 });
//             await tx.wait();
//             getBalance();
//         }
//     };

//     const initUser = () => {
//         // Check to see if user has Metamask
//         if (!ethWallet) {
//             return <p>Please install Metamask in order to use this ATM.</p>;
//         }

//         // Check to see if user is connected. If not, connect to their account
//         if (!account) {
//             return (
//                 <button className="btn" onClick={connectAccount}>
//                     Please connect your Metamask wallet
//                 </button>
//             );
//         }

//         if (balance == undefined) {
//             getBalance();
//         }

//         return (
//             <div className="h-full flex flex-col items-center justify-center">
//                 <h6 className="flex justify-center font-black text-4xl">
//                     {balance}
//                     <span className="text-yellow-400 ms-2">COINS</span>
//                 </h6>
//                 <h6 className="mt-2 mb-40 border-2 border-neutral-600 border-neutral-500 p-1 rounded text-xs">
//                     {account}
//                 </h6>
//                 <div className="flex items-center justify-evenly">
//                     <button className="btn m-2" onClick={deposit}>
//                         Deposit
//                     </button>
//                     <button className="btn m-2" onClick={withdraw}>
//                         Withdraw
//                     </button>
//                     <button className="btn m-2" onClick={withdrawAll}>
//                         Withdraw All
//                     </button>
//                 </div>
//                 <form className="flex items-center justify-center">
//                     <label className="text-xl me-1">Amount:</label>
//                     <input
//                         id="amount"
//                         type="number"
//                         className="bg-transparent border-2 border-neutral-600 p-1 rounded text-xl w-14"
//                         defaultValue={1}
//                         min={1}
//                     />
//                 </form>
//             </div>
//         );
//     };

//     useEffect(() => {
//         getWallet();
//     }, []);

//     return (
//         <main className="w-screen h-screen flex items-center justify-evenly">
//             <script src="https://cdn.tailwindcss.com"></script>
//             <link
//                 href="https://cdn.jsdelivr.net/npm/daisyui@3.9.4/dist/full.css"
//                 rel="stylesheet"
//                 type="text/css"
//             />
//             <link
//                 href="https://fonts.cdnfonts.com/css/chicago-2"
//                 rel="stylesheet"
//             ></link>
//             <link
//                 href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
//                 rel="stylesheet"
//             ></link>

//             <div className="grid grid-cols-2 gap-64">
//                 <header className="col-span-1 flex items-center">
//                     <h1 className="font-normal text-8xl text-cyan-400">
//                         holocoin
//                     </h1>
//                 </header>

//                 <section className="col-span-1 h-screen flex justify-center items-center">
//                     {initUser()}
//                 </section>
//             </div>
//             <style jsx>
//                 {`
//                     * {
//                         font-family: "Roboto", sans-serif;
//                     }

//                     body {
//                         background-color: #1a202c;
//                     }

//                     h1 {
//                         font-family: "Chicago", sans-serif;
//                     }

//                     .container {
//                         text-align: center;
//                     }
//                 `}
//             </style>
//         </main>
//     );
// }


// import { useState, useEffect } from "react";
// import { ethers } from "ethers";
// import atm_abi from "../artifacts/contracts/Assessment.sol/Assessment.json";

// export default function ValorantATM() {
//     const [ethWallet, setEthWallet] = useState(undefined);
//     const [account, setAccount] = useState(undefined);
//     const [atm, setATM] = useState(undefined);
//     const [balance, setBalance] = useState(undefined);

//     const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // Replace with deployed address
//     const atmABI = atm_abi.abi;

//     const getWallet = async () => {
//         if (window.ethereum) {
//             setEthWallet(window.ethereum);
//         }

//         if (ethWallet) {
//             const account = await ethWallet.request({ method: "eth_accounts" });
//             handleAccount(account);
//         }
//     };

//     const handleAccount = (account) => {
//         if (account) {
//             console.log("Account connected: ", account);
//             setAccount(account);
//         } else {
//             console.log("No account found");
//         }
//     };

//     const connectAccount = async () => {
//         if (!ethWallet) {
//             alert("MetaMask wallet is required to connect");
//             return;
//         }

//         const accounts = await ethWallet.request({
//             method: "eth_requestAccounts",
//         });
//         handleAccount(accounts);

//         getATMContract();
//     };

//     const getATMContract = () => {
//         const provider = new ethers.providers.Web3Provider(ethWallet);
//         const signer = provider.getSigner();
//         const atmContract = new ethers.Contract(contractAddress, atmABI, signer);
//         setATM(atmContract);
//     };

//     const getBalance = async () => {
//         if (atm) {
//             setBalance((await atm.getBalance()).toNumber());
//         }
//     };

//     const deposit = async () => {
//         if (atm) {
//             const amount = document.getElementById("amount").value;
//             let tx = await atm.deposit(amount);
//             await tx.wait();
//             getBalance();
//         }
//     };

//     const withdraw = async () => {
//         if (atm) {
//             const amount = document.getElementById("amount").value;
//             let tx = await atm.withdraw(amount);
//             await tx.wait();
//             getBalance();
//         }
//     };

//     const boostBalance = async () => {
//         if (atm) {
//             let tx = await atm.boostBalance();
//             await tx.wait();
//             getBalance();
//         }
//     };

//     const deductPenalty = async () => {
//         if (atm) {
//             const penalty = 10; // Fixed penalty amount
//             let tx = await atm.deductPenalty(penalty);
//             await tx.wait();
//             getBalance();
//         }
//     };

//     const initUser = () => {
//         if (!ethWallet) {
//             return <p>Please install Metamask to use this ATM.</p>;
//         }

//         if (!account) {
//             return (
//                 <button className="btn" onClick={connectAccount}>
//                     Connect Wallet
//                 </button>
//             );
//         }

//         if (balance == undefined) {
//             getBalance();
//         }

//         return (
//             <div className="h-full flex flex-col items-center justify-center">
//                 <h1 className="text-6xl font-bold text-red-600">Valorant ATM</h1>
//                 <h2 className="text-3xl text-white my-4">Balance: {balance} VP</h2>
//                 <h6 className="text-white">{account}</h6>

//                 <div className="flex mt-4">
//                     <button className="btn m-2" onClick={deposit}>
//                         Deposit
//                     </button>
//                     <button className="btn m-2" onClick={withdraw}>
//                         Withdraw
//                     </button>
//                     <button className="btn m-2" onClick={boostBalance}>
//                         Boost Balance
//                     </button>
//                     <button className="btn m-2" onClick={deductPenalty}>
//                         Deduct Penalty
//                     </button>
//                 </div>
//                 <form className="mt-4">
//                     <label className="text-white mr-2">Amount:</label>
//                     <input
//                         id="amount"
//                         type="number"
//                         className="bg-gray-800 text-white p-2 rounded"
//                         min={1}
//                         defaultValue={1}
//                     />
//                 </form>
//             </div>
//         );
//     };

//     useEffect(() => {
//         getWallet();
//     }, []);

//     return (
//         <main className="h-screen flex justify-center items-center bg-black">
//             <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />

//             {initUser()}
//         </main>
//     );
// }


import { useState, useEffect } from "react";
import { ethers } from "ethers";
import atm_abi from "../artifacts/contracts/Assessment.sol/Assessment.json";

export default function ValorantATM() {
    const [ethWallet, setEthWallet] = useState(undefined);
    const [account, setAccount] = useState(undefined);
    const [atm, setATM] = useState(undefined);
    const [balance, setBalance] = useState(undefined);

    const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
    const atmABI = atm_abi.abi;

    const getWallet = async () => {
        if (window.ethereum) {
            setEthWallet(window.ethereum);
        }

        if (ethWallet) {
            const accounts = await ethWallet.request({ method: "eth_accounts" });
            handleAccount(accounts);
        }
    };

    const handleAccount = (account) => {
        if (account.length > 0) {
            setAccount(account[0]);
        } else {
            console.log("No account found");
        }
    };

    const connectAccount = async () => {
        if (!ethWallet) {
            alert("MetaMask wallet is required to connect.");
            return;
        }

        const accounts = await ethWallet.request({
            method: "eth_requestAccounts",
        });
        handleAccount(accounts);
        getATMContract();
    };

    const getATMContract = () => {
        const provider = new ethers.providers.Web3Provider(ethWallet);
        const signer = provider.getSigner();
        const atmContract = new ethers.Contract(contractAddress, atmABI, signer);
        setATM(atmContract);
    };

    const getBalance = async () => {
        if (atm) {
            const currentBalance = await atm.getBalance();
            setBalance(currentBalance.toNumber());
        }
    };

    const deposit = async () => {
        const amount = parseInt(document.getElementById("amount").value);
        if (atm && amount > 0) {
            const tx = await atm.deposit(amount);
            await tx.wait();
            getBalance();
        }
    };

    const withdraw = async () => {
        const amount = parseInt(document.getElementById("amount").value);
        if (atm && amount > 0) {
            const tx = await atm.withdraw(amount);
            await tx.wait();
            getBalance();
        }
    };

    const boostBalance = async () => {
        if (atm) {
            const tx = await atm.boostBalance();
            await tx.wait();
            getBalance();
        }
    };

    const deductPenalty = async () => {
        if (atm) {
            const penalty = 10; // Fixed penalty amount
            const tx = await atm.deductPenalty(penalty);
            await tx.wait();
            getBalance();
        }
    };

    const initUser = () => {
        if (!ethWallet) {
            return <p>Please install MetaMask to use this ATM.</p>;
        }

        if (!account) {
            return (
                <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h1 style={styles.heading}>Welcome to Valorant ATM</h1>
            <button style={styles.button} onClick={connectAccount}>
                Connect Wallet
            </button>
        </div>
            );
        }

        if (balance === undefined) {
            getBalance();
        }

        return (
            <div style={styles.container}>
                <h1 style={styles.heading}>Valorant ATM</h1>
                <h2 style={styles.subheading}>Balance: {balance} VP</h2>
                <p style={styles.text}>{account}</p>
                <div style={styles.buttonGroup}>
                <button
                    style={{ ...styles.button, ...styles.depositButton }}
                    onClick={deposit}
                >
                    Deposit
                </button>
                <button
                    style={{ ...styles.button, ...styles.withdrawButton }}
                    onClick={withdraw}
                >
                    Withdraw
                </button>
                <button
                    style={{ ...styles.button, ...styles.boostButton }}
                    onClick={boostBalance}
                >
                    Boost Balance
                </button>
                <button
                    style={{ ...styles.button, ...styles.penaltyButton }}
                    onClick={deductPenalty}
                >
                    Deduct Penalty
                </button>
            </div>

                <form style={styles.form}>
                    <label style={styles.label}>Amount:</label>
                    <input
                        id="amount"
                        type="number"
                        min={1}
                        defaultValue={1}
                        style={styles.input}
                    />
                </form>
            </div>
        );
    };

    useEffect(() => {
        getWallet();
    }, []);

    return <main style={styles.main}>{initUser()}</main>;
}

const styles = {
    main: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: "url('https://wallpapers.com/images/hd/4k-hd-valorant-g0u91r852i0fg2we.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#1a202c",
        color: "white",
        fontFamily: "Arial, sans-serif",
    },
    container: {
        backgroundColor: "rgba(26, 32, 44, 0.8)", // Add your desired background color here
        height: "100vh", // Full height of the viewport
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white", // Text color
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
    },
    heading: {
        fontSize: "2rem",
        color: "white",
        marginBottom: "20px", // Space between heading and button
    },
    subheading: {
        fontSize: "1.5rem",
        marginBottom: "20px",
    },
    text: {
        marginBottom: "20px",
        wordBreak: "break-word",
    },
    buttonGroup: {
        display: "flex",
        justifyContent: "center", // Center buttons horizontally
        flexDirection: "row", // Ensure buttons are aligned in a row
        gap: "17px", // Adds space between the buttons
        marginBottom: "20px",
    },
    button: {
        color: "white",
        backgroundColor: "red",
        padding: "25px 50px",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        fontSize: "2rem",
        display: "block",
        margin: "0 auto", // Center the button horizontally
        transition: "background-color 0.3s ease", // Adds smooth transition on hover
    },
    depositButton: {
        backgroundColor: "#28a745", // Green for deposit
    },
    withdrawButton: {
        backgroundColor: "#dc3545", // Red for withdraw
    },
    boostButton: {
        backgroundColor: "#007bff", // Blue for boost
    },
    penaltyButton: {
        backgroundColor: "#ffc107", // Yellow for penalty
    },
    form: {
        marginTop: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    label: {
        marginRight: "10px",
        fontSize: "1rem",
    },
    input: {
        padding: "5px",
        fontSize: "1rem",
        border: "1px solid #718096",
        borderRadius: "5px",
        backgroundColor: "#4A5568",
        color: "white",
    },
};

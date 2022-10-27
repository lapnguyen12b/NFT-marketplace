const { createContext, useContext, useState, useEffect } = require("react");

const Web3Context = createContext();
export default function Web3Provider({ children }) {
  const [web3Api, setWeb3api] = useState();
  useEffect( () => {
    const loadProvider = async () => {
      const provider = window.ethereum
      setWeb3api(provider)
    }
    loadProvider();
  }, []);
  return (
    <Web3Context.Provider value={web3Api}>
      {children}
    </Web3Context.Provider>
  )
}

export function useWeb3() {
  return useContext(Web3Context);
}
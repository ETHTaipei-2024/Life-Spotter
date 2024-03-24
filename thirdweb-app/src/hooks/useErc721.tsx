import { ConnectWallet, useAddress, useContract } from "@thirdweb-dev/react";

function useMint() {
    const CONTRACT_ADDRESS = "0x06933bb08805820E0975D4e498A3b80f7E644034";
    const { contract } = useContract(CONTRACT_ADDRESS);
    const address = useAddress();
    return {
        contract: contract,
        address: address,
        contractAddress: CONTRACT_ADDRESS,
    };
}

export default useMint;

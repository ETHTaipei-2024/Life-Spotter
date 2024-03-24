import { ConnectWallet, useAddress, useContract } from "@thirdweb-dev/react";

function useMint() {
    const CONTRACT_ADDRESS = "0x39CA921825c87De886649301a6Cb7c4ac6C4096D";
    const { contract } = useContract(CONTRACT_ADDRESS);
    const address = useAddress();
    return {
        contract: contract,
        address: address,
        contractAddress: CONTRACT_ADDRESS,
    };
}

export default useMint;

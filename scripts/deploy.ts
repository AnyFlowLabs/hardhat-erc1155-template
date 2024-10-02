import hre from "hardhat";

export async function main() {
    console.log('Deploying AnyFlowERC1155...')

    const args = [
        '0xA71a71A71a71a71A71a71a71a71A71a71A71A71a',   // _initialOwner
        'https://token-cdn-domain/{id}.json'
    ] as const;

    const { deploymentTransaction } = await hre.viem.sendDeploymentTransaction("AnyFlowERC1155", args);

    console.log(`Deployment transaction for AnyFlowERC1155 broadcasted... tx: ${deploymentTransaction.hash}`);

    // With AnyFlow you do not need to wait for the transaction to be mined
}

main()
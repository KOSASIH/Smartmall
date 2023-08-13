import { ThirdwebSDK } from "@thirdweb-dev/sdk";

// If used on the FRONTEND pass your 'clientId'
const sdk = new ThirdwebSDK("binance-testnet", {
  clientId: "YOUR_CLIENT_ID",
});
// --- OR ---
// If used on the BACKEND pass your 'secretKey'
const sdk = new ThirdwebSDK("binance-testnet", {
  secretKey: "YOUR_SECRET_KEY",
});

const contract = await sdk.getContract("0xfBC382ECfD999e19b74eA5C2109393520566558E");

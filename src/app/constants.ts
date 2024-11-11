import { getContract } from "thirdweb";
import { client } from "./client";
import { sepolia } from "thirdweb/chains";

export const nftDropAddress = "0x2b00D2c7178eD0f7bA903DDdd396152a57C36d97";

export const nftDropContract = getContract({
  client: client,
  chain: sepolia,
  address: nftDropAddress,
});

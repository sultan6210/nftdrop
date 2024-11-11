import { getContractMetadata } from "thirdweb/extensions/common";
import { nftDropContract } from "../constants";
import { readContract } from "thirdweb";
import { MediaRenderer } from "thirdweb/react";
import { client } from "../client";

export default async function ContractInfo() {
  const contractMetadata = await getContractMetadata({
    contract: nftDropContract,
  });
  const owner = await readContract({
    contract: nftDropContract,
    method: "function owner() view returns (address)",
    params: [],
  });
  const totalMinted = await readContract({
    contract: nftDropContract,
    method: "function totalMinted() view returns (uint256)",
    params: [],
  });
  const nextTokenIdToMint = await readContract({
    contract: nftDropContract,
    method: "function nextTokenIdToMint() view returns (uint256)",
    params: [],
  });

  return (
    <div className="mt-4 text-gray-800 p-4 rounded-md bg-slate-300">
      <h1 className="text-2xl font-bold mb-4">Contract Info (server-side)</h1>
      <p>Name: {contractMetadata.name}</p>
      <p>Symbol: {contractMetadata.symbol}</p>
      <MediaRenderer client={client} src={contractMetadata.image} />

      <p>Description: {contractMetadata.description}</p>
      <p>Total supply: {nextTokenIdToMint.toString()}</p>
      <p>Total minted: {totalMinted.toString()}</p>
      <p>Owner: {owner}</p>
    </div>
  );
}

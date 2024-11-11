import { client } from "@/app/client";
import Link from "next/link";
import React from "react";
import { ConnectButton } from "thirdweb/react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between text-xl font-bold text-white bg-black px-8 py-4">
      <Link href="/">Home</Link>
      <div className="flex gap-4 items-center justify-between">
        <Link href="/contract-info">ContractInfo</Link>
        <Link href="/claim">ClaimNFT</Link>
        <ConnectButton client={client} />
      </div>
    </nav>
  );
}

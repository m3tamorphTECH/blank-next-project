import { useAccount, useContractRead } from "wagmi";
import Swap from "../components/Swap.js";
import AirdropFactory from "../utils/AirdropFactory.json";

export default function Home() {
  const abi = AirdropFactory;
  const { isConnected } = useAccount();

  const fee = useContractRead({
    address: "0xcEC7d6c9C09d088D8e5e682165a8Bb6DE278449A",
    abi: abi,
    args: [],
    functionName: "fee",
    enabled: isConnected && true,
    onSettled(data, error) {
      console.log("fee", data, error);
    },
  });

  return (
    <main>
      <h1 className="title">Defi Token Swap</h1>
      <Swap />
    </main>
  );
}

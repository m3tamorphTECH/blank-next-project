import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import Swap from "../components/Swap.js";

export default function Home() {
  const { status, address, isConnected } = useAccount();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <main>
      <h1 className="title">Defi Token Swap</h1>
      <Swap />
    </main>
  );
}

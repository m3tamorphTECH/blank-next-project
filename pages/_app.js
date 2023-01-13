import { ConnectKitProvider, getDefaultClient } from "connectkit";
import Head from "next/head";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { bscTestnet } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import Navbar from "../components/Navbar.js";
import "../styles/globals.css";

const { chains, provider } = configureChains([bscTestnet], [publicProvider()]);

const client = createClient(
  getDefaultClient({
    autoConnect: false,
    appName: "SafeOne-staking",
    provider,
    chains,
  })
);

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider
        theme="retro"
        options={{ showAvatar: false, walletConnectName: "Wallet Connect" }}
      >
        <Head>
          <title>Defi Swap</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossorigin
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Alexandria:wght@200;300;400;500&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <Navbar />
        <Component {...pageProps} />
      </ConnectKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;

import { ConnectKitButton } from "connectkit";

export default function Navbar() {
  return (
    <nav className="nav-container">
      <h2 className="nav-brand-name">Defi Token Swap</h2>
      <ConnectKitButton />
    </nav>
  );
}

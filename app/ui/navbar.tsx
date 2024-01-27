import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-around m-8">
      <Link href="/">Home</Link>
      <Link href="/leaderboard">Leaderboard</Link>
      <Link href="/login">Login</Link>
      <Link href="/monuments">Monuments</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/search">Search</Link>
    </nav>
  );
}

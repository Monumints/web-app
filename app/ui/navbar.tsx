import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex flex-row justify-between mt-8 mb-24">
      <Link href="/" className="flex">
        <Image
          className="mr-1.5"
          src="/simple-logo.svg"
          width={38}
          height={61}
          alt="logo"
        />
        <h2 className="flex place-items-center">MONUMINTS</h2>
      </Link>
      <div className="flex place-items-center space-x-16">
        <Link href="/leaderboard">
          <h3>Leaderboard</h3>
        </Link>
        <Link href="/monuments">
          <h3>Monuments</h3>
        </Link>
        <Link href="/search">
          <h3>Search</h3>
        </Link>
        <Link href="/profile">
          <h3>Profile</h3>
        </Link>
        <Link href="/login">
          <h3>Login</h3>
        </Link>
      </div>
    </nav>
  );
}

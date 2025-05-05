import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";

export default function MainHeaders() {
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        <Image src={logoImg} alt="A plate Food On It" />
        Next Level Food
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
            <Link href="/community">Browse Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

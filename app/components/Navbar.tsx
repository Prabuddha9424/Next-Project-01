"use client";

import Image from "next/image";
import Link from "next/link";
import posthog from "posthog-js";

const Navbar = () => {
  const handleNavClick = (label: string, href: string) => {
    posthog.capture("nav_link_clicked", { label, href });
  };

  return (
    <header>
      <nav>
        <Link href="/" className="logo" onClick={() => handleNavClick("Logo", "/")}>
          <Image src="/icons/logo.png" alt="Logo" width={24} height={24} />
          <p>Dev Event</p>
        </Link>
        <ul>
          <li>
            <Link href="/" onClick={() => handleNavClick("Home", "/")}>Home</Link>
          </li>
          <li>
            <Link href="/about" onClick={() => handleNavClick("Events", "/about")}>Events</Link>
          </li>
          <li>
            <Link href="/contact" onClick={() => handleNavClick("Create Event", "/contact")}>Create Event</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

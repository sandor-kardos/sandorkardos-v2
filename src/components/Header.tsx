"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" }
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header" role="banner">
      <div className="header-inner">
        <Link href="/" className="brand-logo" aria-label="Sándor Kardos: Homepage">
          <Image
            src="/images/portrait.webp"
            alt="Sándor Kardos"
            width={32}
            height={32}
            className="brand-avatar"
            priority
          />
          <div className="brand-info">
            <span className="brand-name">
              Sándor Kardos
              <span className="brand-pulse-dot" aria-hidden="true" />
            </span>
            <span className="brand-discipline">Product & Service Design</span>
          </div>
        </Link>

        <nav className="site-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <li key={item.href} className="nav-item">
                  <Link
                    href={item.href}
                    className={`nav-link ${isActive ? "nav-link-active" : ""}`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}

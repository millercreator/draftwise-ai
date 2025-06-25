import { useState } from "react";
import { Button } from "@/components/ui/button";

export function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full bg-background/80 backdrop-blur border-b border-border fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img
            src="/images/brand-logos/luminous.svg"
            alt="Lumious Logo"
            className="h-8 w-auto"
            style={{ minWidth: 32 }}
          />
        </a>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        {/* Links */}
        <div
          className={`${
            open ? "block" : "hidden"
          } md:flex md:items-center md:gap-6 absolute md:static left-0 top-full w-full md:w-auto bg-background md:bg-transparent border-b md:border-0 z-40 transition-all duration-200`}
        >
          <a
            href="#features"
            className="block px-4 py-3 md:p-0 text-base md:text-sm hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            Features
          </a>
          <a
            href="#about"
            className="block px-4 py-3 md:p-0 text-base md:text-sm hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            About
          </a>
          <a
            href="#faq"
            className="block px-4 py-3 md:p-0 text-base md:text-sm hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            FAQ
          </a>
          <a
            href="#contact"
            className="block px-4 py-3 md:p-0 text-base md:text-sm hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
          <a
            href="#waitlist"
            className="block px-4 py-3 md:p-0 md:ml-4"
            onClick={() => setOpen(false)}
          >
            <Button size="sm" className="rounded-full">
              Join Waitlist
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
}
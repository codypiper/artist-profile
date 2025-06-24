"use client";

import Link from "@/components/Link";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import routes from "@/lib/routes";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Hamburger from "./Hamburger";

const NavHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isFullNav = useBreakpoint("sm");
  const pathname = usePathname();

  const toggleNav = () => setIsOpen(!isOpen);
  const closeNav = () => setIsOpen(false);

  useEffect(() => {
    if (isFullNav) {
      closeNav();
    }
  }, [isFullNav]);

  return (
    <>
      <header className="fixed top-0 z-50 w-full bg-black/70 py-4 backdrop-blur-xs">
        <div className="flex h-8 items-center justify-center">
          {/* Full nav */}
          <nav className="hidden sm:flex">
            <ul className="flex items-center justify-center gap-8">
              {routes.map((route) => (
                <li key={route.name}>
                  <Link
                    href={route.path}
                    disabled={pathname === route.path}
                    isInternal
                  >
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Hamburger icon */}
          <div className="sm:hidden">
            <Hamburger
              isOpen={isOpen}
              toggle={toggleNav}
              label="Toggle navigation"
            />
          </div>
        </div>

        {/* Hamburger nav dropdown */}
        <nav
          className={`overflow-hidden transition-all duration-500 ease-in-out sm:hidden ${
            isOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col items-center justify-center gap-6 py-4 text-2xl">
            {routes.map((route) => (
              <li key={route.name}>
                <Link
                  href={route.path}
                  disabled={pathname === route.path}
                  onClick={closeNav}
                  isInternal
                >
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Dim background overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black transition duration-300 sm:hidden ${
          isOpen ? "opacity-50" : "pointer-events-none opacity-0"
        } `}
        onClick={toggleNav}
        aria-hidden="true"
      />
    </>
  );
};

export default NavHeader;

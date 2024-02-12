"use client";

import routes from "@/constants/routes";
import { usePathname } from "next/navigation";
import InternalLink from "./InternalLink";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 z-50 w-full bg-black/70 py-4 backdrop-blur-sm">
      <ul className="flex items-center justify-center gap-8">
        {routes.map((route) => (
          <li key={route.page}>
            <InternalLink href={route.path} disabled={pathname === route.path}>
              {route.page}
            </InternalLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

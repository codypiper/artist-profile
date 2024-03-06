"use client";

import Link from "@/components/Link";
import routes from "@/constants/routes";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 z-50 w-full bg-black/70 py-4 backdrop-blur-sm">
      <ul className="flex items-center justify-center gap-8">
        {routes.map((route) => (
          <li key={route.page}>
            <Link
              href={route.path}
              disabled={pathname === route.path}
              isInternal
            >
              {route.page}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

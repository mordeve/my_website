import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavLink ({ children, href }) {
  const child = React.Children.only(children);
  const router = useRouter();
  
  return (
    <Link scroll={false} href={href}>
      {React.cloneElement(child, {
        "aria-current": router.pathname === href ? "page" : null
      })}
    </Link>
  );
};
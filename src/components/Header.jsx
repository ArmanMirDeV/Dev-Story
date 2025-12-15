"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import NavLink from "./NavLink";

const Header = () => {


  const pathName = usePathname();
  console.log(pathName);
  
  if (pathName.startsWith('/dashboard')) return <></>;

  return (
    <header className="px-4 py-3 border-b-2 border-gray-500 flex justify-between items-center flex-wrap ">
      <Link href="/" className="text-lg font-semibold ">
        {" "}
        👨‍💻 Dev Story
      </Link>

      <nav className="space-x-2">
        <NavLink href="/stories">Stories</NavLink>
        <NavLink href="/tutorials">Tutorials</NavLink>
        <NavLink href="/login">LogIn</NavLink>
        <NavLink href="/register">Register</NavLink>
        <NavLink href="/about">About</NavLink>
      </nav>
    </header>
  );
};

export default Header;

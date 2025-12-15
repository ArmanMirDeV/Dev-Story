"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

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
        <Link href="/stories">Stories</Link>
        <Link href="/tutorials">Tutorials</Link>
        <Link href="/login">LogIn</Link>
        <Link href="/register">Register</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;

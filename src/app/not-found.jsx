import Link from "next/link";
import React from "react";

const NotFound404 = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-sky-200 text-black flex-col gap-5 ">
      <h2 className="font-bold text-4xl">
        <span className="text-red-500 border-4 border-dashed p-2" >404</span> | Your page not found
      </h2>
      <Link href={"/"} className="underline text-2xl border-4 p-2">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound404;

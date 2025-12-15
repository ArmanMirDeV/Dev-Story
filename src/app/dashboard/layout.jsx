import Link from "next/link";
import React from "react";

const dashboardLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="col-span-3 min-h-screen ">
        <Link href="/" className="text-lg font-semibold ">
          {" "}
          👨‍💻 Dev Story
        </Link>
        <div className="flex flex-col gap-5 mt-10 ">
          <Link
            className="py-2 px-4 w-full bg-gray-600 hover:bg-red-300 hover:text-black mx-4 rounded-2xl "
            href={"/dashboard/add-story"}
          >
            Add Story
          </Link>
          <Link
            className="py-2 px-4 w-full bg-gray-600 hover:bg-red-300 hover:text-black mx-4 rounded-2xl "
            href={"/dashboard/my-profile"}
          >
            My Profile
          </Link>
          <Link
            className="py-2 px-4 w-full bg-gray-600 hover:bg-red-300 hover:text-black mx-4 rounded-2xl "
            href={"/dashboard/settings"}
          >
            Settings
          </Link>
        </div>
      </div>
      <div className="col-span-9 border-2 ">{children}</div>
    </div>
  );
};

export default dashboardLayout;

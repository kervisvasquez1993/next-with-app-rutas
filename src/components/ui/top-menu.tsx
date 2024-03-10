"use client"
import { titleFont } from "@/config/fonts";
import { useUIStore } from "@/store";
import Link from "next/link";
import React from "react";
import { IoCarOutline, IoCartOutline, IoSearch, IoSearchOutline } from "react-icons/io5";

export const TopMenu = () => {
  const openSideMenu = useUIStore(state => state.openSideMenu ) 
  return (
    <nav className="flex px-5 justify-between items-center w-full">
      <div>
        <Link href={"/"}>
          <span className={`${titleFont.className} antialiased font-bold`}>
            Teslo
          </span>
        </Link>
      </div>
      {/* center menu */}
      <div className=" hidden sm:block">
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href={"/category/men"}
        >
          Hombre
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href={"/category/woman"}
        >
          Woman
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href={"/category/kids"}
        >
          Niños
        </Link>
      </div>
      {/* search */}
      <div className="flex items-center">
        <Link href={"/search"}  className="px-2">
            <IoSearchOutline className="w-5 h-5"/>
        </Link>
        <Link href={"/cart"} className="px-2">
            <div className="relative">
                <span className="absolute text-xs rounded-full px-1 font-bold -top-2 bg-blue-500 text-white -right-2 ">3</span>
                <IoCartOutline className="w-5 h-5"/>
            </div>
        </Link>
        <button className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" onClick={() => openSideMenu()}>
            Menú
        </button>
      </div>
    </nav>
  );
};

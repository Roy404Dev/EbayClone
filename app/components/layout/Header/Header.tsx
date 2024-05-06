"use client";
import Image from "next/image";
import React from "react";
import logo from "@/app/_assets/images/logo.svg";

export default function Header() {
  return (
    <div className="">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 xl:px-0">
        <Image src={logo} alt="logo" height={100} />
        <div className="flex w-full items-center border-2 border-black px-4 py-2">
          <input
            className="w-full focus:outline-none"
            type="text"
            placeholder="Search for anything"
          />
          <select
            name="All categories"
            id="categoriesId"
            className="border-l-2 border-black"
          >
            <option value="" disabled selected>
              All categories
            </option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select>
        </div>
        <button className="bg-blue-600 px-16 py-2 text-white">Search</button>
      </div>
    </div>
  );
}

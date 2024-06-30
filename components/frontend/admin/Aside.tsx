"use client";
import Link from "next/link";
import React, { useState } from "react";

const Aside = () => {
  const [selected, setSelected] = useState(1);
  return (
    <aside className=" h-screen rounded-lg border-4">
      <div className="mt-16">
        <ul className="grid gap-4">
          <li>
            <Link
              href="/admin/"
              className={`cursor-pointer p-4 text-gray-500 ${selected === 1 ? "border-r-4 border-sky-600 bg-[#F4F6F9] text-black" : ""}`}
              onClick={() => setSelected(1)}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/admin/products"
              className={`cursor-pointer p-4 text-gray-500 ${selected === 2 ? "border-r-4 border-sky-600 bg-[#F4F6F9] text-black" : ""}`}
              onClick={() => setSelected(2)}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/admin/categories"
              className={`cursor-pointer p-4 text-gray-500 ${selected === 3 ? "border-r-4 border-sky-600 bg-[#F4F6F9] text-black" : ""}`}
              onClick={() => setSelected(3)}
            >
              Categories
            </Link>
          </li>
          <li>
            <Link
              href="/admin/users"
              className={`cursor-pointer p-4 text-gray-500 ${selected === 4 ? "border-r-4 border-sky-600 bg-[#F4F6F9] text-black" : ""}`}
              onClick={() => setSelected(4)}
            >
              Users
            </Link>
          </li>
          <li>
            <Link
              href="/admin/groups"
              className={`cursor-pointer p-4 text-gray-500 ${selected === 5 ? "border-r-4 border-sky-600 bg-[#F4F6F9] text-black" : ""}`}
              onClick={() => setSelected(5)}
            >
              Groups
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;

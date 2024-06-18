import Image from "next/image";
import Link from "next/link";
import React from "react";
import bellIcon from "@/_assets/icons/BellIcon.svg";
import cartIcon from "@/_assets/icons/CartIcon.svg";
export default function Banner() {
  return (
    <div className="border-b-2 border-gray-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1 xl:px-0">
        <div className="flex items-center gap-1 text-xs">
          <span className="">Hi!</span>
          <Link
            href="/api/auth/signin"
            className="cursor-pointer text-blue-500 underline"
          >
            Sign in
          </Link>
          <span>or</span>
          <Link
            href="/api/auth/signup"
            className="cursor-pointer text-blue-500 underline"
          >
            register
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <button>
            <Image src={bellIcon} alt="bell icon" height={20} />
          </button>
          <button>
            <Image
              src={cartIcon}
              alt="cart icon"
              height={20}
              className="pt-1"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

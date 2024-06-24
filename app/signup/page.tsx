import Image from "next/image";
import Link from "next/link";
import React from "react";
import { OAuthButtons } from "../login/oauth-signin";
import Logo from "@/components/UI/Logo";

const page = () => {
  return (
    <div className="h-screen">
      <div className="flex justify-between px-6 py-4">
        {/* <Image src="/logo.svg" alt="logo" width={50} height={50} /> */}
        <Logo />
        <span className="text-md text-gray-500">
          Already have an account?{" "}
          <Link href="/login" className="text-black underline">
            Sign in
          </Link>
        </span>
      </div>
      <div className="mx-auto grid max-w-[95em] grid-cols-2 justify-between">
        <Image
          src="https://plus.unsplash.com/premium_photo-1676140621026-5c10ec3a875f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="friend image"
          width={700}
          height={900}
          className="rounded-xl"
        />
        <form className="ml-28 w-full max-w-96">
          <div className="my-2 text-start">
            <span className="my-4 text-3xl font-bold">Create an account</span>
          </div>
          <div className="grid grid-cols-2 grid-rows-4 gap-4">
            <input
              type="text"
              className="w-full rounded-md border-[1px] border-black bg-[#f7f7f7]  pl-4 placeholder:text-black"
              placeholder="First name"
            />
            <input
              type="text"
              className="w-full rounded-md border-[1px] border-black bg-[#f7f7f7]  pl-4 placeholder:text-black"
              placeholder="Last name"
            />
            <input
              type="text"
              className="col-span-2 w-full rounded-md border-[1px] border-black bg-[#f7f7f7]  pl-4 placeholder:text-black"
              placeholder="Email"
            />
            <input
              type="password"
              className="col-span-2 w-full rounded-md border-[1px] border-black bg-[#f7f7f7]  pl-4 placeholder:text-black"
              placeholder="Password"
            />
            <button className="col-span-2 rounded-full bg-[#C7C7C7] py-3 font-bold text-white">
              Create personal account
            </button>
          </div>
          <div className=" py-2 text-center">
            <span className="text-xs">or continue with</span>
          </div>
          <div className="flex justify-between gap-4">
            <OAuthButtons showLoginMessage={false} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;

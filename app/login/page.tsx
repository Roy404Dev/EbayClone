import { cookies } from "next/headers";

import { login, signup } from "./actions";
import { createClient } from "@/utils/supabase/server/server";
import { redirect } from "next/navigation";
import { OAuthButtons } from "./oauth-signin";
import Link from "next/link";
import logo from "../../public/logo.svg";
import Image from "next/image";
import Logo from "@/components/UI/Logo";
export default async function LoginPage() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data: user } = await supabase.auth.getUser();
  // if (user) {
  //   return redirect("/");
  // }

  async function signOut() {
    const { error } = await supabase.auth.signOut();
    return redirect("/");
  }

  return (
    <>
      <Logo />
      <form className="mx-auto flex h-screen w-full max-w-96 flex-col justify-center gap-4 text-center">
        <span className="text-4xl font-bold text-slate-900">Hello</span>
        <span>
          Sign in to eBay or{" "}
          <Link href="/auth/signup" className="text-blue-600 underline">
            create an account
          </Link>
        </span>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="Email"
          className="w-full rounded-md border-[1px] border-black bg-[#f7f7f7] py-1 pl-4 placeholder:text-black"
        />
        <input
          id="password"
          name="password"
          type="password"
          required
          placeholder="Password"
          className="w-full rounded-md border-[1px] border-black bg-[#f7f7f7] py-1 pl-4 placeholder:text-black"
        />
        <button
          formAction={login}
          className="rounded-xl bg-blue-600 px-4 py-2 font-bold text-white"
        >
          Log in
        </button>
        <span>or</span>
        <div className="grid gap-2">
          <OAuthButtons showLoginMessage={true} />
        </div>
      </form>
      {/* <form action="/auth/signout" method="post">
        <button className="button block" type="submit">
          Sign out
        </button>
      </form> */}
    </>
  );
}

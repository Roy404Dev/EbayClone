import { createClient } from "@/utils/supabase/server/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const PrivateWrapper = async ({ children }: { children: JSX.Element }) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data, error } = await supabase.auth.getSession();
  if (error || !data.session?.user) {
    redirect("/");
  }
  return children;
};

export default PrivateWrapper;

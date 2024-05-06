import { createClient } from "@supabase/supabase-js"
import { useSession } from "next-auth/react";

const { data: session } = useSession();

const { supabaseAccessToken } = session!;
 
const supabase = createClient(
  process.env.SUPABASE_URL ?? "",
  process.env.SUPABASE_JWT_SECRET ?? "",
  {
    global: {
      headers: {
        Authorization: `Bearer ${supabaseAccessToken}`,
      },
    },
  }
)


export default supabase;
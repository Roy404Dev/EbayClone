import { createClient } from '@/utils/supabase/server/server'
import { getServerSession } from 'next-auth';
import { useSession } from 'next-auth/react'
import React from 'react'

const page = async () => {
  // const session = useSession();
  // const {supabaseAccessToken} = session;
  // const supabase = createClient(
  //   process.env.NEXT_PUBLIC_SUPABASE_URL,
  //   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  //   {
  //     global: {
  //       headers: {
  //         Authorization: `Bearer ${supabaseAccessToken}`,
  //       },
  //     },
  //   }
  // )
  return (
    <div>
      
    </div>
  )
}

export default page
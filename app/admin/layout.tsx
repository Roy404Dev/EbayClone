import PrivateWrapper from "@/components/PrivateWrapper";
import Aside from "../../components/frontend/admin/Aside";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/client/client";
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PrivateWrapper>
      <div className="flex">
        <Aside />
        {children}
      </div>
    </PrivateWrapper>
  );
}

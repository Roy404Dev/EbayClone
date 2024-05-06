import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";
import Aside from "../components/admin/Aside";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <>
      {session ? (
        <div className="flex">
          <Aside />
          {children}
        </div>
      ) : (
        <span>RIp</span>
      )}
    </>
  );
}

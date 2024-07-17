import PrivateWrapper from "@/components/PrivateWrapper";
import Aside from "../../components/frontend/admin/Aside";
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

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactQueryClientProvider } from "@/utils/ReactQueryClientProvider";
const inter = Inter({ subsets: ["latin"] });
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ReduxProvider from "./redux/redux-provider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  icons: {
    icon: "/logo.svg",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
      <ReduxProvider>
        <html lang="en">
          <body className={inter.className}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
          </body>
        </html>
      </ReduxProvider>
    </ReactQueryClientProvider>
  );
}

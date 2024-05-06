import React from "react";

export default async function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return { children };
}

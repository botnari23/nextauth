'use client'
import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";
import AuthProvider from "./providers/AuthProvider";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <AuthProvider>{children}</AuthProvider>
    </SessionProvider>
  );
}

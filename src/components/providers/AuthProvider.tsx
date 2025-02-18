"use client";

import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

import { createContext, ReactNode, useContext, useEffect } from "react";

/**
 * Uncomment Bellow code for using middleware
 */
// import  { SessionProvider } from "next-auth/react";

// import type { ReactNode } from "react";

// export default function AuthProvider({ children }: { children: ReactNode }) {
//   return <SessionProvider>{children}</SessionProvider>;
// }

/**
 * AuthProvider as React.Context
 */

type AuthContextType = {
  session: Session | null;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType>({
  session: null,
  loading: true,
});

export default function AuthProvider({ children }: { children: ReactNode }) {
  const { data: session, status } = useSession();

  const pathname = usePathname();
  const router = useRouter();

  const loading = status == "loading";
  const protectedRoutes = ["/user-info"];

  useEffect(() => {
    const isRouteProtected = protectedRoutes.some((route) =>
      pathname.startsWith(route)
    );

    if (isRouteProtected && !loading && !session) {
      router.push("/");
    }
  }, [pathname, loading, session, router]);

  const value: AuthContextType = { session, loading };
  if (status === "loading") {
    return <h1>Loading Screen</h1>;
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}

"use client";
import { signIn } from "next-auth/react";

export default function SignInButton() {
  return (
    <button onClick={() => signIn('github',{ callbackUrl: "/user-info" })}>Sign Out</button>
  );
}

"use client";
import SignOutButton from "@/components/sign-out";
import { useSession, signOut } from "next-auth/react";

export default function UserInfo() {
  const { data: session } = useSession();

  return (
    <div>
      You are signed in as : <br /> Name {session?.user?.name}, <br /> Email:{" "}
      {session?.user?.email}
      <br />
      <SignOutButton />
    </div>
  );
}

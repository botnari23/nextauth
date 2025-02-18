'use client';
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (
    <>
      <h1>Next-Auth.JS APP TUTORIAL</h1>
      <button onClick={()=>router.push('/user-info')}>User Info</button>
    </>
  );
}

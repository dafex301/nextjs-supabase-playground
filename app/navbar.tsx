"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";

export async function NonAuthNavbar() {
  return (
    <div className="flex gap-2">
      <Link href={"/auth/register"}>Register</Link>
      <Link href={"/auth/login"}>Sign in</Link>
    </div>
  );
}

export async function AuthNavbar() {
  const router = useRouter();
  const supabase = createClientComponentClient<Database>();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <div className="flex gap-2">
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  );
}

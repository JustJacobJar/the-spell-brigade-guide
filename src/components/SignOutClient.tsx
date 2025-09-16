"use client";
import { signOut } from "@/lib/auth-client";

export default function SignOutClient() {
  return (
    <button className="btn btn-wide btn-error" onClick={async () => await signOut()}>
      Sign Out
    </button>
  );
}

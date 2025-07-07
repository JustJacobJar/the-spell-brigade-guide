"use client";
import { signOut } from "@/lib/auth-client";

export default function SignOutClient() {
  return (
    <button className="btn" onClick={async () => await signOut()}>
      Github
    </button>
  );
}

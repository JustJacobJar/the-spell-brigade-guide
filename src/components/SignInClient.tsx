"use client";

import { signIn } from "@/lib/auth-client";

export default function SignInClient() {
  return (
    <button
      className="btn"
      onClick={() => signIn.social({ provider: "github" })}
    >
      Github
    </button>
  );
}

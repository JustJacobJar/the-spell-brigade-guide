"use client";

import { signIn } from "@/lib/auth-client";

export default function SignInClient() {
  return (
    <button
      className="btn btn-wide btn-info"
      onClick={() => signIn.social({ provider: "github" })}
    >
      Github
    </button>
  );
}

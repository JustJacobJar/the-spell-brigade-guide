"use client";
import { signIn } from "@/lib/auth-client";

export default function SignIn() {
  return (
    <button
      className="btn"
      onClick={() => signIn.social({ provider: "github" })}
    >
      Github
    </button>
  );
}

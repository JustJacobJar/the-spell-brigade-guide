"use-client";
import { useSession } from "@/lib/auth-client";
import Link from "next/link";

export default function ProfileNav() {
  const {
    data: session,
    isPending, //loading state
    error, //error object
    refetch, //refetch the session
  } = useSession();

  return (
    <div>
      {session ? (
        <Link href={"/signin"} className="btn w-full text-center">
          <div>Signed In:</div>
          <div>
            {session.user.name} | {session.user.role}
          </div>
        </Link>
      ) : (
        <Link href={"/signin"} className="btn w-full">
          Sign In
        </Link>
      )}
    </div>
  );
}

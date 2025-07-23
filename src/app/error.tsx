"use client";

import { useEffect } from "react";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="h-full w-full place-content-center place-items-center">
      <h1 className="text-2xl font-bold">There was an error!</h1>
      {/* <p>{error.message}</p> */}
    </div>
  );
}

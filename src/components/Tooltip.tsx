"use client";
import { ReactNode, useState } from "react";

export default function Tooltip({
  text,
  children,
}: {
  text: string;
  children?: ReactNode;
}) {
  const [visible, setVisibility] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setVisibility(true)}
      onMouseLeave={() => setVisibility(false)}
    >
      {children}
      {visible && (
        <div className="rounded-field bg-neutral text-neutral-content absolute top-full left-1/2 z-50 mt-0.5 -translate-x-1/2 p-1 px-2 text-nowrap">
          {/* Triangle pointer */}
          <div className="bg-neutral absolute -top-0.5 left-1/2 -z-10 size-4 -translate-x-1/2 rotate-45" />
          <p>{text}</p>
        </div>
      )}
    </div>
  );
}

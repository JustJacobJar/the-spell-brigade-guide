"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, RefObject, useCallback, useEffect, useRef } from "react";

export default function SideBar({
  open,
  desktop = false,
  openFn,
}: {
  open: boolean;
  desktop?: boolean;
  openFn: (open: boolean) => void;
}) {
  const links = [
    {
      text: "Home",
      href: "/",
      icon: (
        <svg
          className="aspect-square h-full"
          viewBox="0 0 576 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"></path>
        </svg>
      ),
    },
    {
      text: "Spells",
      href: "/spells",
      icon: (
        <svg
          className="aspect-square h-full"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M31.075 8.884l0.030-0.030-0.587-7.562-7.588-0.614-0.030 0.030-0-0v0l-8.778 8.778 0.007 0.086-0.086-0.007 0.093 0.093 0.458 5.665-2.057-2.057c-0.283 2.665-1.803 4.095-4.423 4.423l1.156 1.156-8.203 8.178v3.863h3.353l8.446-8.446 1.207 1.207c0.34-2.608 1.775-4.123 4.423-4.423l-2.014-2.014 5.646 0.439 0.092 0.092-0.007-0.085 0.085 0.007 0-0 8.778-8.778zM21.885 13.452l-0.254-3.273-3.311-0.268 4.914-4.914 0.013 0.001 0.267 3.298 3.273 0.254-4.901 4.901z"></path>
        </svg>
      ),
    },
    {
      text: "Meta Report",
      href: "/meta-report",
      icon: (
        <svg
          className="aspect-square h-full"
          viewBox="0 0 448 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"></path>
        </svg>
      ),
    },
    {
      text: "Guides",
      href: "/guide-list",
      icon: (
        <svg
          className="aspect-square h-full"
          viewBox="0 0 576 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8V454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V83.8c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5z"></path>
        </svg>
      ),
    },
    {
      text: "Tierlist Maker",
      href: "/tierlist",
      icon: (
        <svg
          className="aspect-square h-full"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"></path>
        </svg>
      ),
    },
    {
      text: "Create Guide",
      href: "/curator/guide/create",
      icon: (
        <svg
          className="aspect-square h-full"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M278.5 215.6L23 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l57-57h68c49.7 0 97.9-14.4 139-41c11.1-7.2 5.5-23-7.8-23c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l81-24.3c2.5-.8 4.8-2.1 6.7-4l22.4-22.4c10.1-10.1 2.9-27.3-11.3-27.3l-32.2 0c-5.1 0-9.2-4.1-9.2-9.2c0-4.1 2.7-7.6 6.5-8.8l112-33.6c4-1.2 7.4-3.9 9.3-7.7C506.4 207.6 512 184.1 512 160c0-41-16.3-80.3-45.3-109.3l-5.5-5.5C432.3 16.3 393 0 352 0s-80.3 16.3-109.3 45.3L139 149C91 197 64 262.1 64 330v55.3L253.6 195.8c6.2-6.2 16.4-6.2 22.6 0c5.4 5.4 6.1 13.6 2.2 19.8z"></path>
        </svg>
      ),
    },
  ];
  const menu = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && !desktop) {
      menu.current?.focus();
    }
  }, [open]);

  if (!open && !desktop) return;

  return (
    <ChildrenBlur
      className="border-base-200 bg-base-50 fixed top-0 bottom-0 left-0 z-50 flex w-64 flex-col md:top-16"
      ref={menu}
      onBlur={() => openFn(false)}
    >
      <div className="flex h-full flex-col place-content-between">
        {/* Nav */}
        <nav className="join-horizontal flex h-fit w-full flex-col">
          <button
            className="btn btn-ghost btn-square block h-12 w-12 place-self-end md:hidden"
            onClick={() => openFn(false)}
          >
            {" "}
            <svg
              className="fill-neutral aspect-square"
              viewBox="0 0 384 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"></path>
            </svg>
          </button>
          {links.map((link, index) => {
            return (
              <SideLink
                key={index}
                href={link.href}
                text={link.text}
                icon={link.icon}
                openFn={() => openFn(false)}
              />
            );
          })}
        </nav>
      </div>
    </ChildrenBlur>
  );
}

function SideLink({
  text,
  href,
  icon,
  openFn,
}: {
  text: string;
  href: string;
  icon: ReactNode;
  openFn: () => void;
}) {
  const path = usePathname();
  return (
    <Link
      className={cn(
        "fill-base-300 text-base-content btn btn-ghost bg-base-50 hover:bg-neutral/30  join-item gap-4 rounded-none px-4",
        path === href ? "btn-active bg-base-300 text-primary fill-base-content" : "",
      )}
      onClick={() => openFn()}
      href={href}
    >
      <div className="h-full p-1">{icon}</div>
      <div className="w-full text-start">{text}</div>
    </Link>
  );
}

function ChildrenBlur({
  children,
  onBlur,
  className,
  ref,
}: {
  children: React.ReactNode;
  onBlur: () => void;
  className: string;
  ref: RefObject<HTMLDivElement | null>;
}) {
  const handleBlur = useCallback(
    (event: any) => {
      const currentTarget = event.currentTarget;

      // Give browser time to focus the next element
      requestAnimationFrame(() => {
        // Check if the new focused element is a child of the original container
        if (!currentTarget.contains(document.activeElement)) {
          onBlur();
        }
      });
    },
    [onBlur],
  );

  return (
    <div ref={ref} tabIndex={-1} className={className} onBlur={handleBlur}>
      {children}
    </div>
  );
}

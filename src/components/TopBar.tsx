"use client";
import { ReactNode, useState } from "react";
import SideBar from "./SideBar";

export default function TopBar({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* TopBar */}
      <div className="bg-base-100 border-base-200 fixed top-0 z-50 flex h-16 w-screen items-center border-b-2 px-4 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] md:px-0">
        <button
          className="btn btn-ghost btn-square block md:hidden"
          onClick={() => setOpen(!open)}
        >
          <svg
            className="fill-neutral h-8 w-8 place-self-center"
            viewBox="0 0 448 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path>
          </svg>
        </button>
        {/* Logo Area */}
        <div className="text-primary grid h-16 w-64 shrink-0 place-content-center text-2xl font-bold">
          Moon`s Grimoire
        </div>
      </div>
      {/* SideBAr Mobile */}
      <div className="block md:hidden">
        <SideBar open={open} openFn={setOpen} />
      </div>
      {/* Sidebar Desktop */}
      <div className="hidden md:block">
        <SideBar open={true} openFn={setOpen} desktop={true} />
      </div>
      <div className="bg-base-200 mt-16 ml-0 w-full place-items-center md:ml-64">
        {children}
      </div>
    </>
  );
}

import Link from "next/link";

export default function NavBar() {
  return (
    <div className=" w-full h-16 bg-neutral-800 text-2xl">
      <nav className="flex h-full flex-row place-content-evenly w-3xl place-self-center place-items-center">
        <Link href={"/"}>Home</Link>
        <Link href={"/meta-report"}>Meta Report</Link>
        <Link href={"/tierlist"}>TierList Maker</Link>
      </nav>
    </div>
  );
}

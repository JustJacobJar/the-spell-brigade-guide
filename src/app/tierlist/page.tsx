"use client";
import { getAllSpells } from "@/server/fetchActions";
import TierForm from "./TierForm";
import { Spell, Tier } from "@/lib/types";
import useSWR from "swr";
import TierListSkeleton from "@/components/skeletons/tierListSkeleton";

export default function TierlistPage() {
  const { data, error, isLoading } = useSWR("key", getAllSpells);
  // const [data, setData] = useState<Tier[]> ()

  // const spells = getAllSpells();
  const loadingList = () => {
    if (!isLoading && data) {
      const spellData = data.map((spell) => {
        return { spellName: spell.name } as Spell;
      });

      const baseTierlist: Tier[] = [
        {
          tierId: "0",
          tierName: "S",
          tierClassname: "bg-red-400",
          tierItems: [],
        },
        {
          tierId: "1",
          tierName: "A",
          tierClassname: "bg-orange-400",
          tierItems: [],
        },
        {
          tierId: "2",
          tierName: "B",
          tierClassname: "bg-amber-400",
          tierItems: [],
        },
        {
          tierId: "3",
          tierName: "C",
          tierClassname: "bg-yellow-400",
          tierItems: [],
        },
        {
          tierId: "4",
          tierName: "D",
          tierClassname: "bg-lime-400",
          tierItems: [],
        },
        {
          tierId: "5",
          tierName: "F",
          tierClassname: "bg-green-400",
          tierItems: [],
        },
        {
          tierId: "6",
          tierName: "?",
          tierClassname: "bg-gray-400",
          tierItems: [...spellData],
        },
      ];
      return <TierForm tierData={baseTierlist} />;
    }
    return <p>Error fetching spells</p>;
  };

  //if we are editing, get the tier list we are going to edit

  return (
    <>
      <div className="place-items-center">
        {isLoading ? (
          <TierListSkeleton />
        ) : (
          loadingList()
        )}
      </div>
    </>
  );
}

// "use server";
// import { getAllSpells } from "@/server/fetchActions";
// import TierForm from "./TierForm";
// import { Spell, Tier } from "@/lib/types";
// import NoSsr from "../../components/NoSsr";
// import { Suspense } from "react";

// export default async function TierlistPage() {
//   const spells = await getAllSpells();

//   const spellData = spells.map((spell) => {
//     return { spellName: spell.name } as Spell;
//   });

//   const baseTierlist: Tier[] = [
//     { tierId: "0", tierName: "S", tierClassname: "bg-red-400", tierItems: [] },
//     {
//       tierId: "1",
//       tierName: "A",
//       tierClassname: "bg-orange-400",
//       tierItems: [],
//     },
//     {
//       tierId: "2",
//       tierName: "B",
//       tierClassname: "bg-amber-400",
//       tierItems: [],
//     },
//     {
//       tierId: "3",
//       tierName: "C",
//       tierClassname: "bg-yellow-400",
//       tierItems: [],
//     },
//     { tierId: "4", tierName: "D", tierClassname: "bg-lime-400", tierItems: [] },
//     {
//       tierId: "5",
//       tierName: "F",
//       tierClassname: "bg-green-400",
//       tierItems: [],
//     },
//     {
//       tierId: "6",
//       tierName: "?",
//       tierClassname: "bg-gray-400",
//       tierItems: [...spellData],
//     },
//   ];

//   return (
//     <>
//       {/* <>
//         {data.map((spell, index) => (
//           <p key={index}>{spell.spellName}</p>
//         ))}
//       </> */}

//       {/* <Suspense fallback={<p>Gaming</p>}> */}
//       <NoSsr>
//         <div className="place-items-center">
//           <TierForm tierData={baseTierlist} />
//         </div>
//       </NoSsr>
//       {/* </Suspense> */}

//       {/* <TierList /> */}
//     </>
//   );
// }

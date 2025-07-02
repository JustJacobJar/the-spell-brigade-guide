// "use client";
// import { getAllSpells } from "@/server/fetchActions";
// import TierForm from "./TierForm";
// import { Spell, Tier } from "@/lib/types";
// import useSWR from "swr";

// const starterTiers = [
//   {
//     tierId: "0",
//     tierName: "S",
//     tierItems: [
//       { spellName: "Aether_beam" },
//       { spellName: "Arcane_broadsword" },
//     ],
//   },
//   { tierId: "1", tierName: "A", tierItems: [{ spellName: "Astral_orbs" }] },
//   { tierId: "2", tierName: "B", tierItems: [{ spellName: "Aurora_wings" }] },
// ];

// export default function TierlistPage() {
//   const { data, error, isLoading } = useSWR("key", getAllSpells);
//   // const [data, setData] = useState<Tier[]> ()

//   // const spells = getAllSpells();
//   if(!data) return
//   const yea = data.map((spell) => {
//     return { spellName: spell.name } as Spell;
//   });
//   const baseTierlist: Tier[] = [
//     { tierId: "0", tierName: "S", tierItems: [] },
//     { tierId: "1", tierName: "A", tierItems: [] },
//     { tierId: "2", tierName: "B", tierItems: [] },
//     { tierId: "3", tierName: "C", tierItems: [] },
//     { tierId: "4", tierName: "D", tierItems: [] },
//     {
//       tierId: "5",
//       tierName: "F",
//       tierItems: [...yea],
//     },
//   ];

//   //if we are editing, get the tier list we are going to edit

//   return (
//     <>
//       {/* <>
//         {data.map((spell, index) => (
//           <p key={index}>{spell.spellName}</p>
//         ))}
//       </> */}
//       <TierForm tierData={baseTierlist ? baseTierlist : starterTiers} />
//       {/* <TierList /> */}
//     </>
//   );
// }

"use server";
import { getAllSpells } from "@/server/fetchActions";
import TierForm from "./TierForm";
import { Spell, Tier } from "@/lib/types";
import NoSsr from "../../components/NoSsr";
import { Suspense } from "react";

const starterTiers = [
  {
    tierId: "0",
    tierName: "S",
    tierItems: [
      { spellName: "Aether_beam" },
      { spellName: "Arcane_broadsword" },
    ],
  },
  { tierId: "1", tierName: "A", tierItems: [{ spellName: "Astral_orbs" }] },
  { tierId: "2", tierName: "B", tierItems: [{ spellName: "Aurora_wings" }] },
];

export default async function TierlistPage() {
  const spells = await getAllSpells();

  const yea = spells.map((spell) => {
    return { spellName: spell.name } as Spell;
  });
  const baseTierlist: Tier[] = [
    { tierId: "0", tierName: "S", tierItems: [] },
    { tierId: "1", tierName: "A", tierItems: [] },
    { tierId: "2", tierName: "B", tierItems: [] },
    { tierId: "3", tierName: "C", tierItems: [] },
    { tierId: "4", tierName: "D", tierItems: [] },
    {
      tierId: "5",
      tierName: "F",
      tierItems: [...yea],
    },
  ];

  return (
    <>
      {/* <>
        {data.map((spell, index) => (
          <p key={index}>{spell.spellName}</p>
        ))}
      </> */}
      <NoSsr>
        <Suspense fallback={<p>Gaming</p>}>
          <TierForm tierData={baseTierlist ? baseTierlist : starterTiers} />
        </Suspense>
      </NoSsr>

      {/* <TierList /> */}
    </>
  );
}

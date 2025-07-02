import { Icon } from "@/components/dnd/DataCard";
import { prisma } from "@/lib/prisma";
import { Spell, Tier } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Tierlist } from "../../../../generated/prisma";

export default async function ViewTierListPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  //get tl id
  const tl = await prisma.tierlist.findUnique({ where: { id: id } });

  if (!tl) return <p>Not found</p>;

  const tierClassNameLookup = (name: string) => {
    switch (name) {
      case "S":
        return "bg-red-400";
      case "A":
        return "bg-orange-400";
      case "B":
        return "bg-amber-400";
      case "C":
        return "bg-yellow-400";
      case "D":
        return "bg-lime-400";
      case "F":
        return "bg-green-400";
      case "?":
        return "bg-gray-400";
      default:
        return "";
    }
  };

  const tlConstructor = async (tlData: Tierlist) => {
    const tlTiers = await prisma.tier.findMany({
      where: { listId: tlData.id },
    });

    const tiersFormatted: Tier[] = [
      ...tlTiers.map((tier) => {
        const tierRow: Tier = {
          tierId: tier.listId,
          tierName: tier.name,
          tierClassname: tierClassNameLookup(tier.name),
          tierItems: [
            ...tier.spells.map((spell) => {
              return { spellName: spell } as Spell;
            }),
          ],
        };
        return tierRow;
      }),
    ];
    return tiersFormatted;
  };

  const theData = await tlConstructor(tl);

  return !tl ? (
    <p>No data???</p>
  ) : (
    <div>
      {theData.map((tier, index) => {
        return <Row tier={tier} key={index} />;
      })}
    </div>
  );
}

function Row({ tier }: { tier: Tier }) {
  return (
    <div className="flex min-h-32 flex-row">
      <label
        className={cn(
          "w-32 content-center border-2 text-center text-4xl font-bold",
          tier.tierClassname,
        )}
      >
        {tier.tierName}
      </label>

      <div className="flex w-5xl flex-wrap items-center gap-2 border-2 p-2 pl-4 select-none">
        {tier.tierItems.map((item, index) => (
          <div key={index}>
            <Icon url={item.spellName} />
          </div>
        ))}
      </div>
    </div>
  );
}

import { Tier } from "@/lib/types";
import { Icon } from "./dnd/DataCard";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Tooltip from "./Tooltip";

/**
 * @summary Used to display tier lists in a non draggable format for viewing
 */
export default function TierRow({ tier }: { tier: Tier }) {
  return (
    <div className="join-item flex min-h-24 flex-row rounded-md">
      <label
        className={cn(
          "border-neutral w-32 shrink-0 content-center border-2 text-center text-4xl font-bold",
          tier.tierClassname,
        )}
      >
        {tier.tierName}
      </label>

      <div className="border-neutral w-full flex max-w-5xl flex-wrap items-center gap-2 border-2 p-2 pl-4 select-none">
        {tier.tierItems.map((item, index) => (
          <Tooltip text={item.spellName.replace("_", " ")} key={index}>
            <Link
              href={`/spells/${item.spellName.toLowerCase()}`}
              className="duration-200 hover:scale-110"
            >
              {/* wrap this in a link to the spell page */}
              <Icon url={item.spellName} />
            </Link>
          </Tooltip>
        ))}
      </div>
    </div>
  );
}

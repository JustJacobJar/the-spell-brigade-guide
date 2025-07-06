import { Tier } from "@/lib/types";
import { Icon } from "./dnd/DataCard";
import { cn } from "@/lib/utils";

export default function TierRow({ tier }: { tier: Tier }) {
  return (
    <div className="flex min-h-24 flex-row rounded-md join-item">
      <label
        className={cn(
          "w-32 content-center border-2 border-neutral text-center text-4xl font-bold",
          tier.tierClassname,
        )}
      >
        {tier.tierName}
      </label>

      <div className="flex w-5xl flex-wrap items-center gap-2 border-2 border-neutral p-2 pl-4 select-none">
        {tier.tierItems.map((item, index) => (
          <div key={index}>
            <Icon url={item.spellName} />
          </div>
        ))}
      </div>
    </div>
  );
}

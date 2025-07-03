import { Children, ReactNode } from "react";
import { core } from "zod/v4";

export default async function Home() {
  return (
    <div className="flex w-5xl flex-col place-self-center p-2">
      <Header>Meta Progression</Header>
      <Para>
        To unlock new stuff in Spell Brigade, you need to complete quests. You
        shouldn`t worry about this too much, you`ll complete most quests just by
        playing the game normally.
      </Para>
      <SubHead>Quests to look out for</SubHead>
      <Para>
        <ul className="list-inside list-disc pb-1">
          <li>
            Vital Strike: Fully restore your health after dropping below 10% hp.
          </li>
          <p>
            Vital strike is perhaps the best relic in the game. To heal you`ll
            need health regeneration upgrades or you can look at our build
            crafting guide below for tips on how to heal yourself with your
            spells. Humble
          </p>
          <li>
            Ascension: Defeat a boss without choosing any luck upgrades. Humble
          </li>
          <p>
            Ascension is another relic every player should have access too. Its
            pretty easy to unlock too, just don`t choose any luck upgrades in
            your run.
          </p>
        </ul>
      </Para>
      <SubHead>Enchantments</SubHead>
      <Para>
        After your first run, you`ll unlock the enchantment tab which can be
        used to permanently upgrade your stats. Each time you purchase an
        enchantment, its next upgrade will be more expensive, so it`s a good
        idea to spread out what upgrades you take. You can refund your
        enchantments at any time in case you change your mind, so don`t stress
        about making the wrong choices.
        <p>We recommend prioritising:</p>
        <ul className="list-inside list-disc pb-1">
          <li>Move speed</li>
          <li>Health regen</li>
          <li>Rerolls</li>
          <li>Revives</li>
        </ul>
        <p>Other useful stats:</p>
        <ul className="list-inside list-disc pb-1">
          <li>Damage</li>
          <li>Luck</li>
          <li>Cast Speed</li>
        </ul>
        <p>Low Priority:</p>
        <ul className="list-inside list-disc pb-1">
          <li>XP Gain</li>
          <li>Revive Speed</li>
          <li>Pickup Distance</li>
        </ul>
        The 2nd and 3rd row of enchantments will be locked until you buy 5 and
        15 enchantments respectively. To unlock these quickly, you can buy just
        the first tier of each enchantment & refund them after unlocking the
        next row.
      </Para>
      <Header>Solo vs Multiplayer</Header>
      <SubHead>What are the key differences?</SubHead>
      <Para>
        There`s no inherent advantage or disadvantage to playing either solo or
        multiplayer, as the games difficulty scales to the number of players.
        It`s all a matter of preference. In multiplayer, your spells can hit
        teammates, so you`ll need to be carful with spells that have large areas
        of effect. On the other hand, healing augments are more powerful when
        you and a buddy can heal one another.
      </Para>
      <SubHead>Where to find people to play with?</SubHead>
      <Para>
        The game has in built matchmaking. You can join Spell Brigades official
        <L url="https://discord.com/invite/WjyMS37Qx4"> discord</L> as found in
        the game menu.
        <p>The LFG channel is a quick way to find other people to play with.</p>
      </Para>
      <SubHead>Take a moment before picking up scrolls</SubHead>
      <Para>
        {" "}
        Relic chests spawn over the course of a run & drop a scroll when
        destroyed. When you pick up the scroll, everyone on your team will be
        able to choose a relic upgrade to take. Be carful when picking these
        scrolls up though. You can re-roll your relic options by paying health,
        so its best to wait for everyone on your team to be above 85% health.
        The power of relics can vary greatly, so being able to roll for the
        right one can be critical to your teams success.
        <ul className="list-inside list-disc pb-1">
          Here are some relics we recommend taking:
          <li>Humble Ascension (if its your first relic)</li>
          Gives you critical damage for each common upgrade you see
          <li>Vital Strike</li>
          Heals you every time you deal critical damage.
          <li>Savior Focus (Multiplayer Only)</li>
          Increases your critical damage every time you revive a teammate.
          <li>Alchemic Overload</li>
          Increases your elemental damage every time you infuse a spell.
        </ul>
      </Para>
      <Header>Basic Mechanics</Header>
      <Para>Coming soon...</Para>
      <Header>Buildcrafting</Header>
      <SubHead>Spells</SubHead>
      <Para>Coming soon...</Para>
      <SubHead>Elements</SubHead>
      <Para>Coming soon...</Para>
      <SubHead>Upgrades</SubHead>
      <Para>Coming soon...</Para>
      <SubHead>Relics</SubHead>
      <Para>Coming soon...</Para>
    </div>
  );
}

function L({ url, children }: { url: string; children: ReactNode }) {
  return (
    <a
      className="gap-2 text-blue-400 hover:underline hover:underline-offset-4"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

function Header({ children }: { children: ReactNode }) {
  return (
    <div className="pb-4 text-2xl font-bold text-orange-300">{children}</div>
  );
}

function SubHead({ children }: { children: ReactNode }) {
  return <div className="pb-2 text-xl text-orange-200">{children}</div>;
}

function Para({ children }: { children: ReactNode }) {
  return <div className="pb-1 pl-2 text-gray-200">{children}</div>;
}

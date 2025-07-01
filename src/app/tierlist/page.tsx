export default function TierlistPage() {
  return (
    <>
      <TierList />
    </>
  );
}

function Icon() {
  return (
    <div className="aspect-square w-32">
      <img
        src={
          "https://raw.githubusercontent.com/JustJacobJar/the-spell-brigade-sprites/master/sprites/spells/Aether_beam.png"
        }
      />
    </div>
  );
}

function TierRow({ tier, data }: { tier: string; data: number }) {
  const gaming = () => {
    const arr = [];
    for (let index = 0; index < data; index++) {
      arr.push(<Icon key={index} />);
    }
    return arr;
  };

  return (
    <div className="flex w-full flex-row outline">
      <label className="h-full min-w-fit content-center bg-red-500 px-2 outline">
        {tier}
      </label>
      <div className="flex w-full flex-row flex-wrap">{gaming()}</div>
    </div>
  );
}

function TierList() {
  return (
    <div className="grid-flow-rows grid w-2xl gap-2 divide-dotted divide-amber-50 p-2 outline">
      <TierRow tier="T0" data={3} />
      <TierRow tier="T1" data={2} />
      <TierRow tier="T2" data={5} />
      <TierRow tier="T3" data={2} />
      <TierRow tier="T4" data={1} />
      <TierRow tier="T5" data={7} />
    </div>
  );
}

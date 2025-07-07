import { ReactNode } from "react";

export default async function SpellViewPage() {
  return (
    <div className="flex h-full w-full flex-col gap-8 p-2 px-16 outline">
      {/* Header */}
      <div className="flex w-full flex-row gap-8">
        {/* Intro */}
        <div className="h-full min-h-32 w-full">
          <SubHeader>Introduction</SubHeader>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
            pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
            tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
            Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
            hendrerit semper vel class aptent taciti sociosqu. Ad litora
          </p>
        </div>
        {/* Divider */}
        <div className="divider divider-horizontal" />
        {/* Wizard */}
        <div className="h-full min-h-32 w-full">
          <SubHeader>Mage</SubHeader>
          <p>About the mage who owns this spell if any</p>
        </div>
      </div>
      {/* Update Tracker */}
      <Section>
        <SubHeader>Update Tracker</SubHeader>
        <div className="flex flex-row gap-8">
          {/* Review Date */}
          <div className="card bg-base-300 w-full overflow-clip text-center text-lg font-bold">
            <h2 className="bg-secondary text-secondary-content h-fit w-full py-1">
              Last Info Update
            </h2>
            <p className="py-1">Date/Patch</p>
          </div>
          <div className="card bg-base-300 w-full overflow-clip text-center text-lg font-bold">
            <h2 className="bg-secondary text-secondary-content h-fit w-full py-1">
              Last Review Update
            </h2>
            <p className="py-1">Date/Patch</p>
          </div>
          <div className="card bg-base-300 w-full overflow-clip text-center text-lg font-bold">
            <h2 className="bg-secondary text-secondary-content h-fit w-full py-1">
              Last Build Update
            </h2>
            <p className="py-1">Date/Patch</p>
          </div>
        </div>
      </Section>
      {/* Augments Upgrades */}
      <Section>
        <SubHeader>Augments & Upgrades</SubHeader>
        <div className="grid grid-cols-2">
          <ul className="list-inside list-disc">
            <h2 className="text-xl font-bold">Augments</h2>
            <li>Data</li>
            <li>To</li>
            <li>Be</li>
          </ul>
          <ul className="list-inside list-disc">
            <h2 className="text-xl font-bold">Upgrades</h2>
            <li>Mapped</li>
            <li>Upgrades</li>
            <li>Too</li>
          </ul>
        </div>
      </Section>
      {/* Overview / Element Options */}
      <Section>
        <div className="flex flex-row gap-8">
          {/* Overview */}
          <Section>
            <SubHeader>Overview</SubHeader>
            <p>
              How the spell works... Lorem ipsum dolor sit amet consectetur
              adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem
              placerat. In id cursus mi pretium tellus duis convallis. Tempus
              leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla
              lacus nec metus bibendum egestas. Iaculis massa nisl malesuada
              lacinia integer nunc posuere. Ut hendrerit semper vel class aptent
              taciti sociosqu. Ad litora torquent per conubia nostra inceptos
              himenaeos. Lorem ipsum dolor sit amet consectetur adipiscing elit.
              Quisque faucibus ex sapien vitae pellentesque sem placerat. In id
              cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed
              diam urna tempor. Pulvinar vivamus fringilla lacus nec metus
              bibendum egestas. Iaculis massa nisl malesuada lacinia integer
              nunc posuere. Ut hendrerit semper vel class aptent taciti
              sociosqu. Ad litora torquent per conubia nostra inceptos
              himenaeos.
            </p>
          </Section>
          {/* Divider */}
          <div className="divider divider-horizontal" />
          <Section>
            <SubHeader>Build Options</SubHeader>
            <div className="join join-vertical bg-base-100 rounded-field overflow-clip">
              {/* Element to map */}
              <div className="collapse-arrow join-item border-base-300 collapse border">
                <input type="radio" name="my-accordion-4" defaultChecked />
                <div className="collapse-title flex flex-row place-items-center gap-4 font-semibold">
                  <div className="bg-primary rounded-selector grid aspect-square h-full place-content-center">
                    1
                  </div>
                  <div>
                    <svg
                      className="h-8 w-8 fill-[#8e8e8e]"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M288 32c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c53 0 96-43 96-96s-43-96-96-96H320c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-17.7 0-32 14.3-32 32zM128 512h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H160c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32z"></path>
                    </svg>
                  </div>
                  <h2>Element</h2>
                </div>
                <div className="collapse-content text-sm">
                  Details about why this element
                </div>
              </div>
              {/* End */}
              <div className="collapse-arrow join-item border-base-300 collapse border">
                <input type="radio" name="my-accordion-4" defaultChecked />
                <div className="collapse-title flex flex-row place-items-center gap-4 font-semibold">
                  <div className="bg-primary rounded-selector grid aspect-square h-full place-content-center">
                    2
                  </div>
                  <div>
                    <svg
                      className="h-8 w-8 fill-[#8e8e8e]"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M288 32c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c53 0 96-43 96-96s-43-96-96-96H320c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-17.7 0-32 14.3-32 32zM128 512h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H160c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32z"></path>
                    </svg>
                  </div>
                  <h2>Element</h2>
                </div>
                <div className="collapse-content text-sm">
                  Details about why this element
                </div>
              </div>
            </div>
          </Section>
        </div>
      </Section>
    </div>
  );
}

//Custom colour these to the recommended element?

function BulletPoint() {
  return (
    <div className="bg-secondary h-4 w-4 place-self-center rounded-sm"></div>
  );
}

function SubHeader({ children }: { children?: ReactNode }) {
  return (
    <div className="border-secondary flex h-fit w-full flex-row gap-2 border-b-2 font-bold">
      <BulletPoint />
      <h1 className="py-1 text-2xl">{children}</h1>
    </div>
  );
}

function Section({ children }: { children?: ReactNode }) {
  return <div className="flex w-full flex-col gap-4">{children}</div>;
}

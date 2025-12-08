import { Section, SubHeader } from "@/components/spells/SpellsFormatting";
import { BlogPost } from "@/generated/client";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { GuideCategory, GuideCategorys } from "@/lib/types";
import { headers } from "next/headers";
import Link from "next/link";

export default async function GuideListPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const roll = session ? (session.user.role ?? "") : "";
  //get all guides
  const guides = await prisma.blogPost.findMany(); //page this, probs no need

  if (!guides) return <p>No Guides Found</p>;

  return (
    <div className="flex h-full w-full flex-col gap-4 place-self-center p-2">
      <h1 className="text-center text-5xl font-bold">Guides</h1>
      {GuideCategorys.map((cat, index) => (
        <GuideGroup
          key={index}
          filter={cat}
          guides={guides}
          roll={roll}
          title={cat}
        />
      ))}
    </div>
  );
}

function GuideGroup({
  title,
  guides,
  filter,
  roll,
}: {
  title: string;
  guides: BlogPost[];
  filter: GuideCategory;
  roll: string;
}) {
  return (
    <Section>
      <SubHeader>{title}</SubHeader>
      <div className="flex w-full flex-row flex-wrap gap-8">
        {guides
          .filter((guide) => (guide.category as GuideCategory) === filter)
          .map((post, index) => {
            return (
              <GuideItem
                id={post.id}
                title={post.title}
                roll={roll}
                key={index}
              />
            );
          })}
      </div>
    </Section>
  );
}

function GuideItem({
  title,
  id,
  roll,
}: {
  title?: string;
  id: string;
  roll: string;
}) {
  const editButton = (id: string) => {
    return (
      <Link
        className="btn btn-square btn-soft btn-neutral stroke-neutral-content"
        href={`/curator/guide/edit/${id}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
          <path d="m15 5 4 4"></path>
        </svg>
      </Link>
    );
  };

  return (
    <div className="btn btn-soft btn-secondary card-xl relative min-h-24 w-80">
      <Link href={`/guide/${id}`}>
        <div className="items-center text-center">
          <div className="card-title">{title}</div>
        </div>
      </Link>
      <div className="card-actions absolute right-0 bottom-0 z-10">
        {roll === "CURATOR" || roll === "ADMIN" ? editButton(id) : null}
      </div>
    </div>
  );
}

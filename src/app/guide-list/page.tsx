import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function GuideListPage() {
  const session = await auth();

  const roll = session!.user.role;
  //get all guides
  const guides = await prisma.blogPost.findMany(); //page this

  if (!guides) return <p>No Guides Found</p>;

  const editButton = (id: string) => {
    return (
      <Link className="bg-neutral-600 h-full px-1 place-content-center" href={`/curator/guide/edit/${id}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
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
    <div className="flex flex-col h-full w-full pl-16 p-2 gap-4">
      <h1 className="text-5xl font-bold">Guides</h1>
      <div className="grid h-full w-2xl gap-8 grid-cols-2">
        {guides.map((post, index) => {
          return (
            <div
              className="flex h-16 w-full overflow-clip flex-row place-content-between place-items-center rounded-lg bg-neutral-800"
              key={index}
            >
              <Link className="w-full px-2 line-clamp-2" href={`/guide/${post.id}`}>
                {post.title}
              </Link>
              {roll === "CURATOR" || roll === "ADMIN"
                ? editButton(post.id)
                : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

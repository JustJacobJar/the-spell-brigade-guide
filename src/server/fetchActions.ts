"use server";

import { prisma } from "@/lib/prisma";

export async function getAllSpells() {
  const spells = await prisma.spellsView.findMany();
  return spells;
}

export async function getBlogPost(id: string) {
  const blog = await prisma.blogPost.findUnique({ where: { id: id } });

  if (!blog) throw "Blog not found";

  const content = await prisma.blogContent.findUnique({
    where: {
      id: blog.contentId,
    },
  });

  if (!content) throw "Content not found";

  return { blog: blog, content: content } as const;
}

export async function getAllGuides() {
  const guides = await prisma.blogPost.findMany(); //page this

  throw "No guides found";

  return guides;
}

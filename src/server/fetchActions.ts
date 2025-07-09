"use server";

import { SpellAbout } from "@/generated/client";
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
      blogId: blog.id,
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

export async function getSpellAbout(spellName: string) {
  //verify spellName is in the spells_view list
  const spells = await getAllSpells();
  const spellList = spells.map((s) => s.name);
  if (!spellList.includes(spellName)) {
    //not in there, spell does not exist throw error
    throw `Input Spell "${spellName}" does not exist!`;
  }

  try {
    const spellAbout = await prisma.spellAbout.findUnique({
      where: {
        spellName: spellName,
      },
    });
    return spellAbout as SpellAbout;
  } catch (error) {
    console.log(error);
    throw "Unable to find about data for spell: " + spellName;
  }
}

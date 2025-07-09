"use server";

import * as z from "zod/v4";
import { SpellAbout, Tier } from "@/lib/types";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { getAllSpells } from "./fetchActions";

export async function createTierlist(
  tierList: Tier[],
  title: string,
  description: string,
) {
  //Auth user
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    //Not auth to make a list
    throw "401: Not Authorized";
  }

  //Validate
  const validatedTL = await ZtierList.safeParseAsync(tierList);
  const validatedTitle = await z.safeParseAsync(z.string().default(""), title);
  const validatedDesc = await z.safeParseAsync(
    z.string().default(""),
    description,
  );
  if (validatedTL.error) throw "There was an error parsing tierList data";
  if (validatedTitle.error) throw "There was an error parsing title data";
  if (validatedDesc.error) throw "There was an error parsing description data";

  //Upload to db
  await prisma.tierlist.create({
    data: {
      authorId: session.user.id!,
      name: validatedTitle.data,
      descripton: validatedDesc.data,
      tiers: {
        create: [
          ...validatedTL.data.map((tl) => {
            return {
              name: tl.tierName,
              tierId: tl.tierId,
              spells: [...tl.tierItems.map((data) => data.spellName)],
            };
          }),
        ],
      },
    },
  });

  return "We be gaming";
}

const spell = z.object({
  spellName: z.string(),
});

const ZtierList = z.array(
  z.object({
    tierId: z.string(),
    tierName: z.string(),
    tierClassname: z.string(),
    get tierItems() {
      return z.array(spell);
    },
  }),
);

export async function CreateBlogPost(title: string, content: string) {
  //Auth user
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    //Not auth to make a list
    throw "401: Not Authorized";
  }

  //Validate
  const validatedTitle = await z.safeParseAsync(z.string().default(""), title);
  const validatedContent = await z.safeParseAsync(
    z.string().default(""),
    content,
  );
  if (validatedTitle.error) throw "There was an error parsing title data";
  if (validatedContent.error) throw "There was an error parsing content data";

  //Upload to db
  try {
    const blog = await prisma.blogPost.create({
      data: {
        title: validatedTitle.data,
        authorId: session.user.id!,
        content: {
          create: {
            content: validatedContent.data,
          },
        },
      },
    });
    return blog.id;
  } catch (error) {
    console.log("Blog creation error: ", error);
    throw "There was an error uploading to the database";
  }
}

export async function EditBlogPost(id: string, title: string, content: string) {
  //Auth user
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    //Not auth to make a list
    throw "401: Not Authorized";
  }

  //Validate
  const validatedId = await z.safeParseAsync(z.string(), id);
  const validatedTitle = await z.safeParseAsync(z.string().default(""), title);
  const validatedContent = await z.safeParseAsync(
    z.string().default(""),
    content,
  );
  if (validatedId.error) throw "There was an error parsing id data";
  if (validatedTitle.error) throw "There was an error parsing title data";
  if (validatedContent.error) throw "There was an error parsing content data";

  try {
    //Upload to db
    const blog = await prisma.blogPost.update({
      where: {
        id: id,
      },
      data: {
        title: validatedTitle.data,
        authorId: session.user.id,
      },
    });
    await prisma.blogContent.update({
      where: { blogId: blog.id },
      data: { content: validatedContent.data },
    });
    return blog.id;
  } catch (error) {
    console.log("Blog editing error: ", error);
    throw "There was an error uploading to the database";
  }
}

export async function DeleteBlogPost(id: string) {
  //Auth user
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    //Not auth to make a list
    throw "401: Not Authorized";
  }

  //Validate
  const validatedId = await z.safeParseAsync(z.string(), id);

  if (validatedId.error) throw "There was an error parsing id data";

  try {
    //Upload to db
    await prisma.blogPost.delete({
      where: {
        id: id,
      },
    });
    return;
  } catch (error) {
    console.log("Blog Deletion error: ", error);
    throw "There was an error uploading to the database";
  }
}

export async function UpdateSpellAbout(spellName: string, data: SpellAbout) {
  //Auth user
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    //Not auth to make a list
    throw "401: Not Authorized";
  }

  //verify spellName is in the spells_view list
  const spells = await getAllSpells();
  const spellList = spells.map((s) => s.name);
  if (!spellList.includes(spellName)) {
    //not in there, spell does not exist throw error
    throw `Input Spell "${spellName}" does not exist!`;
  }

  //Entry exists?
  const spellAboutEntry = !!(await prisma.spellAbout.findUnique({
    where: { spellName: spellName },
  }));

  //no entry, create one
  if (!spellAboutEntry) {
    try {
      await prisma.spell.update({
        where: { name: spellName },
        data: {
          aboutContent: {
            create: {
              introduction: data.intro,
              mageInfo: data.mageInfo,
              augments: data.augments,
              upgrades: data.upgrades,
              overview: data.overview,
            },
          },
        },
      });
      return;
    } catch (error) {
      console.log(error);
      throw (
        "There was an error creating the about content for spell: " + spellName
      );
    }
  }

  try {
    prisma.spellAbout.update({
      where: { spellName: spellName },
      data: {
        introduction: data.intro,
        mageInfo: data.mageInfo,
        augments: data.augments,
        upgrades: data.upgrades,
        overview: data.overview,
        updatedAt: new Date(),
      },
    });
    return;
  } catch (error) {
    console.log(error);
    throw (
      "There was an error updating the about content for spell: " + spellName
    );
  }

  //Exits, update data
}

"use server";

import * as z from "zod/v4";
import {
  SpellAboutInput,
  SpellBuildInput,
  SpellReviewInput,
  Tier,
} from "@/lib/types";
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

export async function UpdateSpellAbout(
  spellName: string,
  data: SpellAboutInput,
) {
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
    await prisma.spell.update({
      where: { name: spellName },
      data: {
        aboutContent: {
          update: {
            introduction: data.intro,
            mageInfo: data.mageInfo,
            augments: data.augments,
            upgrades: data.upgrades,
            overview: data.overview,
            updatedAt: new Date(),
          },
        },
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

export async function UpdateSpellBuild(
  spellName: string,
  data: SpellBuildInput,
) {
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
  const spellBuildEntry = !!(await prisma.spellBuild.findUnique({
    where: { spellName: spellName },
  }));

  //no entry, create one
  if (!spellBuildEntry) {
    try {
      await prisma.spell.update({
        where: { name: spellName },
        data: {
          buildContent: {
            create: {
              augmentNameDps: data.augmentsDps.map((li) => li.name),
              augmentDescriptionDps: data.augmentsDps.map(
                (li) => li.description,
              ),
              augmentNameSub: data.augmentsSub.map((li) => li.name),
              augmentDescriptionSub: data.augmentsSub.map(
                (li) => li.description,
              ),
              augmentNameSup: data.augmentsSup.map((li) => li.name),
              augmentDescriptionSup: data.augmentsSup.map(
                (li) => li.description,
              ),

              upgradesDps: data.upgradeDps,
              upgradesSub: data.upgradeSub,
              upgradesSup: data.upgradeSup,

              elementsDps: data.elementsDps,
              elementsSub: data.elementsSub,
              elementsSup: data.elementsSup,
            },
          },
        },
      });

      return;
    } catch (error) {
      console.log(error);
      throw (
        "There was an error creating the build content for spell: " + spellName
      );
    }
  }

  try {
    await prisma.spell.update({
      where: { name: spellName },
      data: {
        buildContent: {
          update: {
            augmentNameDps: data.augmentsDps.map((li) => li.name),
            augmentDescriptionDps: data.augmentsDps.map((li) => li.description),
            augmentNameSub: data.augmentsSub.map((li) => li.name),
            augmentDescriptionSub: data.augmentsSub.map((li) => li.description),
            augmentNameSup: data.augmentsSup.map((li) => li.name),
            augmentDescriptionSup: data.augmentsSup.map((li) => li.description),

            upgradesDps: data.upgradeDps,
            upgradesSub: data.upgradeSub,
            upgradesSup: data.upgradeSup,

            elementsDps: data.elementsDps,
            elementsSub: data.elementsSub,
            elementsSup: data.elementsSup,

            updatedAt: new Date(),
          },
        },
      },
    });
    console.log("updated new!:" + spellName);

    return;
  } catch (error) {
    console.log(error);
    throw (
      "There was an error updating the build content for spell: " + spellName
    );
  }

  //Exits, update data
}

export async function UpdateSpellReview(
  spellName: string,
  data: SpellReviewInput,
) {
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
  const spellReviewEntry = !!(await prisma.spellReview.findUnique({
    where: { spellName: spellName },
  }));

  //no entry, create one
  if (!spellReviewEntry) {
    try {
      await prisma.spell.update({
        where: { name: spellName },
        data: {
          reviewContent: {
            create: {
              pros: data.pros,
              cons: data.cons,
              review: data.review,
            },
          },
        },
      });
      return;
    } catch (error) {
      console.log(error);
      throw (
        "There was an error creating the review content for spell: " + spellName
      );
    }
  }

  try {
    await prisma.spell.update({
      where: { name: spellName },
      data: {
        reviewContent: {
          update: {
            pros: data.pros,
            cons: data.cons,
            review: data.review,
            updatedAt: new Date(),
          },
        },
      },
    });
    return;
  } catch (error) {
    console.log(error);
    throw (
      "There was an error updating the review content for spell: " + spellName
    );
  }

  //Exits, update data
}

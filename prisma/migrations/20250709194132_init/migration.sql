/*
  Warnings:

  - You are about to drop the `SpellAbout` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "SpellAbout" DROP CONSTRAINT "SpellAbout_spellName_fkey";

-- DropTable
DROP TABLE "SpellAbout";

-- CreateTable
CREATE TABLE "spell_about" (
    "spellName" TEXT NOT NULL,
    "introduction" TEXT NOT NULL,
    "mageInfo" TEXT NOT NULL,
    "augments" TEXT[],
    "upgrades" TEXT[],
    "overview" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "spell_about_spellName_key" ON "spell_about"("spellName");

-- AddForeignKey
ALTER TABLE "spell_about" ADD CONSTRAINT "spell_about_spellName_fkey" FOREIGN KEY ("spellName") REFERENCES "Spell"("name") ON DELETE CASCADE ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE "SpellAbout" (
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
CREATE UNIQUE INDEX "SpellAbout_spellName_key" ON "SpellAbout"("spellName");

-- AddForeignKey
ALTER TABLE "SpellAbout" ADD CONSTRAINT "SpellAbout_spellName_fkey" FOREIGN KEY ("spellName") REFERENCES "Spell"("name") ON DELETE CASCADE ON UPDATE CASCADE;

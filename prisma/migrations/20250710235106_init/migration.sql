-- CreateTable
CREATE TABLE "spell_build" (
    "spellName" TEXT NOT NULL,
    "augmentNameDps" TEXT[],
    "augmentDescriptionDps" TEXT[],
    "augmentNameSub" TEXT[],
    "augmentDescriptionSub" TEXT[],
    "augmentNameSup" TEXT[],
    "augmentDescriptionSup" TEXT[],
    "upgradesDps" TEXT[],
    "upgradesSub" TEXT[],
    "upgradesSup" TEXT[],
    "elementsDps" TEXT[],
    "elementsSub" TEXT[],
    "elementsSup" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "spell_build_spellName_key" ON "spell_build"("spellName");

-- AddForeignKey
ALTER TABLE "spell_build" ADD CONSTRAINT "spell_build_spellName_fkey" FOREIGN KEY ("spellName") REFERENCES "Spell"("name") ON DELETE CASCADE ON UPDATE CASCADE;

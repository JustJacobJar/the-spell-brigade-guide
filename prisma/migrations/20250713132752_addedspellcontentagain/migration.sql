-- CreateTable
CREATE TABLE "spell_review" (
    "spellName" TEXT NOT NULL,
    "pros" TEXT[],
    "const" TEXT[],
    "review" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "spell_review_spellName_key" ON "spell_review"("spellName");

-- AddForeignKey
ALTER TABLE "spell_review" ADD CONSTRAINT "spell_review_spellName_fkey" FOREIGN KEY ("spellName") REFERENCES "Spell"("name") ON DELETE CASCADE ON UPDATE CASCADE;

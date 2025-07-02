-- CreateTable
CREATE TABLE "Spell" (
    "name" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Spell_name_key" ON "Spell"("name");

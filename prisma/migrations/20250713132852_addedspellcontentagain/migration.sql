/*
  Warnings:

  - You are about to drop the column `const` on the `spell_review` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "spell_review" DROP COLUMN "const",
ADD COLUMN     "cons" TEXT[];

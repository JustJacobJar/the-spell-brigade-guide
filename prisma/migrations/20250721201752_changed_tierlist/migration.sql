/*
  Warnings:

  - You are about to drop the column `descripton` on the `tier_list` table. All the data in the column will be lost.
  - You are about to drop the column `likes` on the `tier_list` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `tier_list` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "tier_list" DROP COLUMN "descripton",
DROP COLUMN "likes",
DROP COLUMN "name";

/*
  Warnings:

  - The `id` column on the `MetaReport` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[tierlistId]` on the table `MetaReport` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `content` to the `MetaReport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tierlistId` to the `MetaReport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `MetaReport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `MetaReport` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "MetaReport_id_key";

-- AlterTable
ALTER TABLE "MetaReport" ADD COLUMN     "content" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "tierlistId" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "MetaReport_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "MetaReport_tierlistId_key" ON "MetaReport"("tierlistId");

-- AddForeignKey
ALTER TABLE "MetaReport" ADD CONSTRAINT "MetaReport_tierlistId_fkey" FOREIGN KEY ("tierlistId") REFERENCES "tier_list"("id") ON DELETE CASCADE ON UPDATE CASCADE;

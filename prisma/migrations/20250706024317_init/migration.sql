/*
  Warnings:

  - You are about to drop the column `contentId` on the `blog_post` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[blogId]` on the table `blog_content` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `blogId` to the `blog_content` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "blog_post" DROP CONSTRAINT "blog_post_contentId_fkey";

-- DropIndex
DROP INDEX "blog_post_contentId_key";

-- AlterTable
ALTER TABLE "blog_content" ADD COLUMN     "blogId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "blog_post" DROP COLUMN "contentId";

-- CreateIndex
CREATE UNIQUE INDEX "blog_content_blogId_key" ON "blog_content"("blogId");

-- AddForeignKey
ALTER TABLE "blog_content" ADD CONSTRAINT "blog_content_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "blog_post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

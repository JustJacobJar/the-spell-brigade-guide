/*
  Warnings:

  - You are about to drop the column `blogPostId` on the `blog_content` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[contentId]` on the table `blog_post` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `contentId` to the `blog_post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "blog_content" DROP CONSTRAINT "blog_content_blogPostId_fkey";

-- DropIndex
DROP INDEX "blog_content_blogPostId_key";

-- AlterTable
ALTER TABLE "blog_content" DROP COLUMN "blogPostId";

-- AlterTable
ALTER TABLE "blog_post" ADD COLUMN     "contentId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "blog_post_contentId_key" ON "blog_post"("contentId");

-- AddForeignKey
ALTER TABLE "blog_post" ADD CONSTRAINT "blog_post_contentId_fkey" FOREIGN KEY ("contentId") REFERENCES "blog_content"("id") ON DELETE CASCADE ON UPDATE CASCADE;

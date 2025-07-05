/*
  Warnings:

  - Added the required column `content` to the `blog_content` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "blog_content" ADD COLUMN     "content" TEXT NOT NULL;

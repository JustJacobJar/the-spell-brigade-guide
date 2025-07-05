-- CreateTable
CREATE TABLE "blog_post" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,

    CONSTRAINT "blog_post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "blog_content" (
    "id" TEXT NOT NULL,
    "blogPostId" TEXT NOT NULL,

    CONSTRAINT "blog_content_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "blog_content_blogPostId_key" ON "blog_content"("blogPostId");

-- AddForeignKey
ALTER TABLE "blog_post" ADD CONSTRAINT "blog_post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blog_content" ADD CONSTRAINT "blog_content_blogPostId_fkey" FOREIGN KEY ("blogPostId") REFERENCES "blog_post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

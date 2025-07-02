-- CreateTable
CREATE TABLE "tier_list" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "descripton" TEXT,
    "likes" INTEGER NOT NULL DEFAULT 0,
    "authorId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tier_list_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tier" (
    "id" TEXT NOT NULL,
    "tierId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "listId" TEXT NOT NULL,
    "spells" TEXT[],

    CONSTRAINT "Tier_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tier_list" ADD CONSTRAINT "tier_list_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tier" ADD CONSTRAINT "Tier_listId_fkey" FOREIGN KEY ("listId") REFERENCES "tier_list"("id") ON DELETE CASCADE ON UPDATE CASCADE;

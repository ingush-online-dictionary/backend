-- CreateTable
CREATE TABLE "Translation" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Translation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FirstLangTranslation" (
    "id" TEXT NOT NULL,
    "word" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "translationId" TEXT NOT NULL,

    CONSTRAINT "FirstLangTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SecondLangTranslation" (
    "id" TEXT NOT NULL,
    "word" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "translationId" TEXT NOT NULL,

    CONSTRAINT "SecondLangTranslation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FirstLangTranslation" ADD CONSTRAINT "FirstLangTranslation_translationId_fkey" FOREIGN KEY ("translationId") REFERENCES "Translation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SecondLangTranslation" ADD CONSTRAINT "SecondLangTranslation_translationId_fkey" FOREIGN KEY ("translationId") REFERENCES "Translation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

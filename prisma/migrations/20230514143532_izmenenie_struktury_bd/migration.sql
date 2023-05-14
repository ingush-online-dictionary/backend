/*
  Warnings:

  - You are about to drop the `FirstLangTranslation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SecondLangTranslation` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `firstLangDescription` to the `Translation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstLangTranslation` to the `Translation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `secondLangDescription` to the `Translation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `secondLangTranslation` to the `Translation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "FirstLangTranslation" DROP CONSTRAINT "FirstLangTranslation_translationId_fkey";

-- DropForeignKey
ALTER TABLE "SecondLangTranslation" DROP CONSTRAINT "SecondLangTranslation_translationId_fkey";

-- AlterTable
ALTER TABLE "Translation" ADD COLUMN     "firstLangDescription" TEXT NOT NULL,
ADD COLUMN     "firstLangTranslation" TEXT NOT NULL,
ADD COLUMN     "secondLangDescription" TEXT NOT NULL,
ADD COLUMN     "secondLangTranslation" TEXT NOT NULL;

-- DropTable
DROP TABLE "FirstLangTranslation";

-- DropTable
DROP TABLE "SecondLangTranslation";

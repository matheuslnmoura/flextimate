/*
  Warnings:

  - You are about to drop the column `typeId` on the `projects` table. All the data in the column will be lost.
  - You are about to drop the `ProjectType` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "projects" DROP CONSTRAINT "projects_typeId_fkey";

-- AlterTable
ALTER TABLE "projects" DROP COLUMN "typeId";

-- DropTable
DROP TABLE "ProjectType";

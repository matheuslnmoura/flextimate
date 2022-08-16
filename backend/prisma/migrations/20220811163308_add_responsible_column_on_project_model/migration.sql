/*
  Warnings:

  - Added the required column `assignedId` to the `projects` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "projects" ADD COLUMN     "assignedId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_assignedId_fkey" FOREIGN KEY ("assignedId") REFERENCES "employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

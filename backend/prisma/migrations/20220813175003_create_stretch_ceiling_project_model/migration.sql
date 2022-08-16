/*
  Warnings:

  - You are about to drop the column `projectId` on the `project_materials` table. All the data in the column will be lost.
  - Added the required column `stretchCeiingProjectId` to the `project_materials` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "project_materials" DROP CONSTRAINT "project_materials_projectId_fkey";

-- AlterTable
ALTER TABLE "project_materials" DROP COLUMN "projectId",
ADD COLUMN     "stretchCeiingProjectId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "StretchCeilingProject" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "projectId" INTEGER NOT NULL,

    CONSTRAINT "StretchCeilingProject_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "StretchCeilingProject" ADD CONSTRAINT "StretchCeilingProject_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_materials" ADD CONSTRAINT "project_materials_stretchCeiingProjectId_fkey" FOREIGN KEY ("stretchCeiingProjectId") REFERENCES "StretchCeilingProject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the column `stretchCeiingProjectId` on the `project_materials` table. All the data in the column will be lost.
  - You are about to drop the `StretchCeilingProject` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `luminaryId` to the `project_materials` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "StretchCeilingProject" DROP CONSTRAINT "StretchCeilingProject_projectId_fkey";

-- DropForeignKey
ALTER TABLE "project_materials" DROP CONSTRAINT "project_materials_stretchCeiingProjectId_fkey";

-- AlterTable
ALTER TABLE "project_materials" DROP COLUMN "stretchCeiingProjectId",
ADD COLUMN     "luminaryId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "StretchCeilingProject";

-- CreateTable
CREATE TABLE "Luminary" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "projectId" INTEGER NOT NULL,

    CONSTRAINT "Luminary_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Luminary" ADD CONSTRAINT "Luminary_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_materials" ADD CONSTRAINT "project_materials_luminaryId_fkey" FOREIGN KEY ("luminaryId") REFERENCES "Luminary"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- DropForeignKey
ALTER TABLE "projects" DROP CONSTRAINT "projects_typeId_fkey";

-- AlterTable
ALTER TABLE "projects" ALTER COLUMN "typeId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "ProjectType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

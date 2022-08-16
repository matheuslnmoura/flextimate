-- DropForeignKey
ALTER TABLE "project_materials" DROP CONSTRAINT "project_materials_profileId_fkey";

-- AlterTable
ALTER TABLE "project_materials" ALTER COLUMN "profileId" DROP NOT NULL,
ALTER COLUMN "profileQuantity" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "project_materials" ADD CONSTRAINT "project_materials_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profiles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

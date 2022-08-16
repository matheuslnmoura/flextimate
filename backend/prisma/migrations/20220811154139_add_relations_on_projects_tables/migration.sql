/*
  Warnings:

  - Added the required column `projectId` to the `project_installation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "project_materials" DROP CONSTRAINT "project_materials_accessoryId_fkey";

-- DropForeignKey
ALTER TABLE "project_materials" DROP CONSTRAINT "project_materials_aditionalMaterialId_fkey";

-- DropForeignKey
ALTER TABLE "project_materials" DROP CONSTRAINT "project_materials_amplifierId_fkey";

-- DropForeignKey
ALTER TABLE "project_materials" DROP CONSTRAINT "project_materials_lightSourceId_fkey";

-- DropForeignKey
ALTER TABLE "project_materials" DROP CONSTRAINT "project_materials_powerSupplyId_fkey";

-- AlterTable
ALTER TABLE "project_installation" ADD COLUMN     "projectId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "project_materials" ALTER COLUMN "lightSourceId" DROP NOT NULL,
ALTER COLUMN "lightSourceQuantity" DROP NOT NULL,
ALTER COLUMN "powerSupplyId" DROP NOT NULL,
ALTER COLUMN "powerSupplyQuantity" DROP NOT NULL,
ALTER COLUMN "amplifierId" DROP NOT NULL,
ALTER COLUMN "amplifierQuantity" DROP NOT NULL,
ALTER COLUMN "accessoryId" DROP NOT NULL,
ALTER COLUMN "accessoryQuantity" DROP NOT NULL,
ALTER COLUMN "aditionalMaterialId" DROP NOT NULL,
ALTER COLUMN "aditionalMaterialQuantity" DROP NOT NULL;

-- AlterTable
ALTER TABLE "projects" ALTER COLUMN "statusId" SET DEFAULT 1;

-- AddForeignKey
ALTER TABLE "project_materials" ADD CONSTRAINT "project_materials_lightSourceId_fkey" FOREIGN KEY ("lightSourceId") REFERENCES "light_sources"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_materials" ADD CONSTRAINT "project_materials_powerSupplyId_fkey" FOREIGN KEY ("powerSupplyId") REFERENCES "power_supplies"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_materials" ADD CONSTRAINT "project_materials_amplifierId_fkey" FOREIGN KEY ("amplifierId") REFERENCES "amplifiers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_materials" ADD CONSTRAINT "project_materials_accessoryId_fkey" FOREIGN KEY ("accessoryId") REFERENCES "accessories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_materials" ADD CONSTRAINT "project_materials_aditionalMaterialId_fkey" FOREIGN KEY ("aditionalMaterialId") REFERENCES "aditional_materials"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_installation" ADD CONSTRAINT "project_installation_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

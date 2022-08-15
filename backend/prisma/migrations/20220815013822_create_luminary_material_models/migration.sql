/*
  Warnings:

  - You are about to drop the `project_materials` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "project_materials" DROP CONSTRAINT "project_materials_accessoryId_fkey";

-- DropForeignKey
ALTER TABLE "project_materials" DROP CONSTRAINT "project_materials_aditionalMaterialId_fkey";

-- DropForeignKey
ALTER TABLE "project_materials" DROP CONSTRAINT "project_materials_amplifierId_fkey";

-- DropForeignKey
ALTER TABLE "project_materials" DROP CONSTRAINT "project_materials_filmId_fkey";

-- DropForeignKey
ALTER TABLE "project_materials" DROP CONSTRAINT "project_materials_lightSourceId_fkey";

-- DropForeignKey
ALTER TABLE "project_materials" DROP CONSTRAINT "project_materials_luminaryId_fkey";

-- DropForeignKey
ALTER TABLE "project_materials" DROP CONSTRAINT "project_materials_powerSupplyId_fkey";

-- DropForeignKey
ALTER TABLE "project_materials" DROP CONSTRAINT "project_materials_profileId_fkey";

-- DropTable
DROP TABLE "project_materials";

-- CreateTable
CREATE TABLE "luminary_film" (
    "id" SERIAL NOT NULL,
    "luminaryId" INTEGER NOT NULL,
    "filmId" INTEGER NOT NULL,
    "filmQuantity" INTEGER NOT NULL,

    CONSTRAINT "luminary_film_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "luminary_profile" (
    "id" SERIAL NOT NULL,
    "luminaryId" INTEGER NOT NULL,
    "profileId" INTEGER NOT NULL,
    "profileQuantity" INTEGER NOT NULL,

    CONSTRAINT "luminary_profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "luminary_light_source" (
    "id" SERIAL NOT NULL,
    "luminaryId" INTEGER NOT NULL,
    "lightSourceId" INTEGER NOT NULL,
    "lightSourceQuantity" INTEGER NOT NULL,

    CONSTRAINT "luminary_light_source_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "luminary_power_supply" (
    "id" SERIAL NOT NULL,
    "luminaryId" INTEGER NOT NULL,
    "powerSupplyId" INTEGER NOT NULL,
    "powerSupplyQuantity" INTEGER NOT NULL,

    CONSTRAINT "luminary_power_supply_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "luminary_amplifier" (
    "id" SERIAL NOT NULL,
    "luminaryId" INTEGER NOT NULL,
    "amplifierId" INTEGER NOT NULL,
    "amplifierQuantity" INTEGER NOT NULL,

    CONSTRAINT "luminary_amplifier_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "luminary_accessory" (
    "id" SERIAL NOT NULL,
    "luminaryId" INTEGER NOT NULL,
    "accessoryId" INTEGER NOT NULL,
    "accessoryQuantity" INTEGER NOT NULL,

    CONSTRAINT "luminary_accessory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "luminary_aditional_material" (
    "id" SERIAL NOT NULL,
    "luminaryId" INTEGER NOT NULL,
    "aditionalMaterialId" INTEGER NOT NULL,
    "aditionalMaterialQuantity" INTEGER NOT NULL,

    CONSTRAINT "luminary_aditional_material_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "luminary_film" ADD CONSTRAINT "luminary_film_luminaryId_fkey" FOREIGN KEY ("luminaryId") REFERENCES "Luminary"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "luminary_film" ADD CONSTRAINT "luminary_film_filmId_fkey" FOREIGN KEY ("filmId") REFERENCES "films"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "luminary_profile" ADD CONSTRAINT "luminary_profile_luminaryId_fkey" FOREIGN KEY ("luminaryId") REFERENCES "Luminary"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "luminary_profile" ADD CONSTRAINT "luminary_profile_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "luminary_light_source" ADD CONSTRAINT "luminary_light_source_luminaryId_fkey" FOREIGN KEY ("luminaryId") REFERENCES "Luminary"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "luminary_light_source" ADD CONSTRAINT "luminary_light_source_lightSourceId_fkey" FOREIGN KEY ("lightSourceId") REFERENCES "light_sources"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "luminary_power_supply" ADD CONSTRAINT "luminary_power_supply_luminaryId_fkey" FOREIGN KEY ("luminaryId") REFERENCES "Luminary"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "luminary_power_supply" ADD CONSTRAINT "luminary_power_supply_powerSupplyId_fkey" FOREIGN KEY ("powerSupplyId") REFERENCES "power_supplies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "luminary_amplifier" ADD CONSTRAINT "luminary_amplifier_luminaryId_fkey" FOREIGN KEY ("luminaryId") REFERENCES "Luminary"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "luminary_amplifier" ADD CONSTRAINT "luminary_amplifier_amplifierId_fkey" FOREIGN KEY ("amplifierId") REFERENCES "amplifiers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "luminary_accessory" ADD CONSTRAINT "luminary_accessory_luminaryId_fkey" FOREIGN KEY ("luminaryId") REFERENCES "Luminary"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "luminary_accessory" ADD CONSTRAINT "luminary_accessory_accessoryId_fkey" FOREIGN KEY ("accessoryId") REFERENCES "accessories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "luminary_aditional_material" ADD CONSTRAINT "luminary_aditional_material_luminaryId_fkey" FOREIGN KEY ("luminaryId") REFERENCES "Luminary"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "luminary_aditional_material" ADD CONSTRAINT "luminary_aditional_material_aditionalMaterialId_fkey" FOREIGN KEY ("aditionalMaterialId") REFERENCES "aditional_materials"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

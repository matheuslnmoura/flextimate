/*
  Warnings:

  - You are about to drop the column `amps` on the `amplifiers` table. All the data in the column will be lost.
  - You are about to drop the column `watts` on the `amplifiers` table. All the data in the column will be lost.
  - You are about to drop the column `ampsPerMeter` on the `light_sources` table. All the data in the column will be lost.
  - You are about to drop the column `amps` on the `power_supplies` table. All the data in the column will be lost.
  - You are about to drop the column `watts` on the `power_supplies` table. All the data in the column will be lost.
  - Added the required column `mAmps` to the `amplifiers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mAmpsPerMeter` to the `light_sources` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mAmps` to the `power_supplies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "amplifiers" DROP COLUMN "amps",
DROP COLUMN "watts",
ADD COLUMN     "mAmps" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "light_sources" DROP COLUMN "ampsPerMeter",
ADD COLUMN     "mAmpsPerMeter" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "power_supplies" DROP COLUMN "amps",
DROP COLUMN "watts",
ADD COLUMN     "mAmps" INTEGER NOT NULL;

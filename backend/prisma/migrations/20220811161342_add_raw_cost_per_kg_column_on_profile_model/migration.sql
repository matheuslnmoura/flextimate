/*
  Warnings:

  - You are about to drop the column `rawCost` on the `profiles` table. All the data in the column will be lost.
  - Added the required column `rawCostPerKg` to the `profiles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rawCostPerMeter` to the `profiles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "profiles" DROP COLUMN "rawCost",
ADD COLUMN     "rawCostPerKg" INTEGER NOT NULL,
ADD COLUMN     "rawCostPerMeter" INTEGER NOT NULL;

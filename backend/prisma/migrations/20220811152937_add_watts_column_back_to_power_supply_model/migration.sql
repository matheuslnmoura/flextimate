/*
  Warnings:

  - Added the required column `watts` to the `power_supplies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "power_supplies" ADD COLUMN     "watts" INTEGER NOT NULL;

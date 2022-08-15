/*
  Warnings:

  - Added the required column `quantity` to the `Luminary` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Luminary" ADD COLUMN     "quantity" INTEGER NOT NULL;

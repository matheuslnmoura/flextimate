/*
  Warnings:

  - You are about to drop the `user_branches` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "user_branches" DROP CONSTRAINT "user_branches_branchId_fkey";

-- DropForeignKey
ALTER TABLE "user_branches" DROP CONSTRAINT "user_branches_employeeId_fkey";

-- DropTable
DROP TABLE "user_branches";

-- CreateTable
CREATE TABLE "employee_branches" (
    "id" SERIAL NOT NULL,
    "employeeId" INTEGER NOT NULL,
    "branchId" INTEGER NOT NULL,

    CONSTRAINT "employee_branches_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "employee_branches" ADD CONSTRAINT "employee_branches_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee_branches" ADD CONSTRAINT "employee_branches_branchId_fkey" FOREIGN KEY ("branchId") REFERENCES "branches"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AlterTable
ALTER TABLE "films" ALTER COLUMN "salesPrice" DROP NOT NULL,
ALTER COLUMN "dealerPrice" DROP NOT NULL;

-- AlterTable
ALTER TABLE "profiles" ALTER COLUMN "salesPrice" DROP NOT NULL,
ALTER COLUMN "dealerPrice" DROP NOT NULL;

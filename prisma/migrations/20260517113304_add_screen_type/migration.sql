-- CreateEnum
CREATE TYPE "ScreenType" AS ENUM ('DESKTOP', 'MOBILE');

-- AlterTable
ALTER TABLE "project_galleries" ADD COLUMN     "type" "ScreenType";

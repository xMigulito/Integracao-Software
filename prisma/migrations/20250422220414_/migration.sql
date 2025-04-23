/*
  Warnings:

  - Made the column `dia` on table `Agenda` required. This step will fail if there are existing NULL values in that column.
  - Made the column `local` on table `Agenda` required. This step will fail if there are existing NULL values in that column.
  - Made the column `cerimonialista` on table `Agenda` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Agenda" ALTER COLUMN "dia" SET NOT NULL,
ALTER COLUMN "local" SET NOT NULL,
ALTER COLUMN "cerimonialista" SET NOT NULL;

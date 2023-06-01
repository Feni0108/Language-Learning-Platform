/*
  Warnings:

  - Added the required column `solutions` to the `Storyline` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Storyline` ADD COLUMN `solutions` VARCHAR(191) NOT NULL;

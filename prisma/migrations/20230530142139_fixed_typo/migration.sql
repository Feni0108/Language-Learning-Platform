/*
  Warnings:

  - You are about to drop the column `oprions` on the `Storyline` table. All the data in the column will be lost.
  - Added the required column `options` to the `Storyline` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Storyline` DROP COLUMN `oprions`,
    ADD COLUMN `options` VARCHAR(191) NOT NULL;

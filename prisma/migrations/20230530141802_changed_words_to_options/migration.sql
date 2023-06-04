/*
  Warnings:

  - You are about to drop the column `words` on the `Storyline` table. All the data in the column will be lost.
  - Added the required column `oprions` to the `Storyline` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Storyline` DROP COLUMN `words`,
    ADD COLUMN `oprions` VARCHAR(191) NOT NULL;

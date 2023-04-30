/*
  Warnings:

  - You are about to drop the `DummyTable` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `DummyTable`;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

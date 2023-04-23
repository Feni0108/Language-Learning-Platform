-- CreateTable
CREATE TABLE `DummyTable` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `original_word_Dummy` VARCHAR(191) NOT NULL,
    `translated_word_Dummy` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Dictionary` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `original_word` VARCHAR(191) NOT NULL,
    `translated_word` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

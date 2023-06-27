-- CreateTable
CREATE TABLE `Dictionary` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `original_word` VARCHAR(191) NOT NULL,
    `translated_word` VARCHAR(191) NOT NULL,
    `image` LONGBLOB NULL,
    `category` ENUM('GREETINGS', 'FAMILY', 'ANIMALS', 'NUMBER', 'CALENDAR', 'FRIENDS', 'HOBBY', 'LIVING', 'SHOPPING') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Sentence` (
    `id` INTEGER NOT NULL,
    `sentence` VARCHAR(191) NOT NULL,
    `language` ENUM('eng', 'hu', 'sk', 'cz', 'is') NOT NULL,
    `category` ENUM('GREETINGS', 'FAMILY', 'ANIMALS', 'NUMBER', 'CALENDAR', 'FRIENDS', 'HOBBY', 'LIVING', 'SHOPPING') NOT NULL,

    UNIQUE INDEX `Sentence_id_language_key`(`id`, `language`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `password` VARCHAR(191) NULL,
    `username` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `emailVerified` DATETIME(3) NULL,
    `image` VARCHAR(191) NULL,
    `actualProgress` INTEGER NOT NULL DEFAULT 0,
    `lastGame` DATETIME(3) NULL,
    `isFirstLogin` BOOLEAN NOT NULL DEFAULT true,

    UNIQUE INDEX `User_username_key`(`username`),
    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserSettings` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `interfaceLanguage` ENUM('eng', 'hu', 'sk', 'cz', 'is') NULL,
    `targetLanguage` ENUM('eng', 'hu', 'sk', 'cz', 'is') NULL,
    `learningGoal` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `UserSettings_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Session` (
    `id` VARCHAR(191) NOT NULL,
    `sessionToken` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `expires` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Session_sessionToken_key`(`sessionToken`),
    INDEX `Session_userId_fkey`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Account` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `provider` VARCHAR(191) NOT NULL,
    `providerAccountId` VARCHAR(191) NOT NULL,
    `refresh_token` TEXT NULL,
    `access_token` TEXT NULL,
    `expires_at` INTEGER NULL,
    `token_type` VARCHAR(191) NULL,
    `scope` VARCHAR(191) NULL,
    `id_token` TEXT NULL,
    `session_state` VARCHAR(191) NULL,

    INDEX `Account_userId_fkey`(`userId`),
    UNIQUE INDEX `Account_provider_providerAccountId_key`(`provider`, `providerAccountId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VerificationToken` (
    `identifier` VARCHAR(191) NOT NULL,
    `token` VARCHAR(191) NOT NULL,
    `expires` DATETIME(3) NOT NULL,

    UNIQUE INDEX `VerificationToken_token_key`(`token`),
    UNIQUE INDEX `VerificationToken_identifier_token_key`(`identifier`, `token`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Leaderboard` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` VARCHAR(191) NOT NULL,
    `totalPoints` INTEGER NOT NULL DEFAULT 0,
    `strike` INTEGER NOT NULL DEFAULT 0,

    UNIQUE INDEX `Leaderboard_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Storyline` (
    `id` INTEGER NOT NULL,
    `sentences` JSON NOT NULL,
    `options` JSON NOT NULL,
    `solutions` JSON NOT NULL,
    `language` ENUM('eng', 'hu', 'sk', 'cz', 'is') NOT NULL,
    `category` ENUM('GREETINGS', 'FAMILY', 'ANIMALS', 'NUMBER', 'CALENDAR', 'FRIENDS', 'HOBBY', 'LIVING', 'SHOPPING') NOT NULL,

    UNIQUE INDEX `Storyline_id_language_key`(`id`, `language`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Words` (
    `id` INTEGER NOT NULL,
    `word` VARCHAR(191) NOT NULL,
    `language` ENUM('eng', 'hu', 'sk', 'cz', 'is') NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `category` ENUM('GREETINGS', 'FAMILY', 'ANIMALS', 'NUMBER', 'CALENDAR', 'FRIENDS', 'HOBBY', 'LIVING', 'SHOPPING') NOT NULL,
    `image` LONGBLOB NULL,

    UNIQUE INDEX `Words_id_language_key`(`id`, `language`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Contribution` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `word` VARCHAR(191) NOT NULL,
    `language` ENUM('eng', 'hu', 'sk', 'cz', 'is') NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `category` ENUM('GREETINGS', 'FAMILY', 'ANIMALS', 'NUMBER', 'CALENDAR', 'FRIENDS', 'HOBBY', 'LIVING', 'SHOPPING') NOT NULL,
    `vote` INTEGER NOT NULL,

    UNIQUE INDEX `Contribution_id_language_key`(`id`, `language`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VotesOnContribution` (
    `contributionId` INTEGER NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`contributionId`, `userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserProgress` (
    `userId` VARCHAR(191) NOT NULL,
    `interfaceLanguage` ENUM('eng', 'hu', 'sk', 'cz', 'is') NOT NULL,
    `targetLanguage` ENUM('eng', 'hu', 'sk', 'cz', 'is') NOT NULL,
    `progress` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`userId`, `interfaceLanguage`, `targetLanguage`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UserSettings` ADD CONSTRAINT `UserSettings_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Session` ADD CONSTRAINT `Session_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Account` ADD CONSTRAINT `Account_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Leaderboard` ADD CONSTRAINT `Leaderboard_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VotesOnContribution` ADD CONSTRAINT `VotesOnContribution_contributionId_fkey` FOREIGN KEY (`contributionId`) REFERENCES `Contribution`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VotesOnContribution` ADD CONSTRAINT `VotesOnContribution_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserProgress` ADD CONSTRAINT `UserProgress_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

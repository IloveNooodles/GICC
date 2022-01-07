-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `fullName` VARCHAR(191) NULL,
    `institution` VARCHAR(191) NULL,
    `faculty` VARCHAR(191) NULL,
    `lineID` VARCHAR(191) NULL,
    `phoneNumber` VARCHAR(191) NULL,
    `referralCode` VARCHAR(191) NULL,
    `isEmailVerified` BOOLEAN NULL,
    `isFileVerified` BOOLEAN NULL,
    `filePath` VARCHAR(191) NULL,
    `team` VARCHAR(191) NULL,
    `competitionType` ENUM('MARKETING', 'OPERATION', 'EHS') NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EmailVerification` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `verificationCode` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `EmailVerification_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

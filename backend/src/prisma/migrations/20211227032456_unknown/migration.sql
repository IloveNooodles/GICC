-- AlterTable
ALTER TABLE `file` MODIFY `type` ENUM('STUDENT_ID', 'TWIBBON', 'RECEIPT', 'UNKNOWN') NOT NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `birthDate` DATETIME(3) NOT NULL DEFAULT '2000-01-01T00:00:00+00:00';

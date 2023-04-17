/*
  Warnings:

  - You are about to drop the column `amount` on the `Task` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Task" DROP COLUMN "amount",
ALTER COLUMN "continue" SET DEFAULT true;

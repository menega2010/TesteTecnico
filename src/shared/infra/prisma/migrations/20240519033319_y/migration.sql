/*
  Warnings:

  - You are about to drop the column `enterTime` on the `tab_time` table. All the data in the column will be lost.
  - You are about to drop the column `exitTime` on the `tab_time` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `tab_time` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `tab_user` table. All the data in the column will be lost.
  - Added the required column `enter_time` to the `tab_time` table without a default value. This is not possible if the table is not empty.
  - Added the required column `exit_time` to the `tab_time` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `tab_time` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_name` to the `tab_user` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "tab_time" DROP CONSTRAINT "tab_time_userId_fkey";

-- AlterTable
ALTER TABLE "tab_time" DROP COLUMN "enterTime",
DROP COLUMN "exitTime",
DROP COLUMN "userId",
ADD COLUMN     "enter_time" VARCHAR(32) NOT NULL,
ADD COLUMN     "exit_time" VARCHAR(32) NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "tab_user" DROP COLUMN "lastName",
ADD COLUMN     "last_name" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "tab_time" ADD CONSTRAINT "tab_time_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "tab_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

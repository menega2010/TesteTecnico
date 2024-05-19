/*
  Warnings:

  - A unique constraint covering the columns `[empresa]` on the table `tab_user` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `empresa` to the `tab_user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tab_user" ADD COLUMN     "empresa" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "tab_user_empresa_key" ON "tab_user"("empresa");

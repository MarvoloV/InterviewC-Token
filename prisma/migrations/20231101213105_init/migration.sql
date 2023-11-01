/*
  Warnings:

  - Added the required column `pkey` to the `commerce` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "commerce" ADD COLUMN     "pkey" VARCHAR NOT NULL;

/*
  Warnings:

  - Added the required column `userTimeTableId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "userTimeTableId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "UserTimeTable" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "UserTimeTable_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LongTimeTable" (
    "id" SERIAL NOT NULL,
    "tasks" TEXT[],
    "userTimeTableId" INTEGER,

    CONSTRAINT "LongTimeTable_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WeekTimeTable" (
    "id" SERIAL NOT NULL,
    "tasks" TEXT[],
    "userTimeTableId" INTEGER,

    CONSTRAINT "WeekTimeTable_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DayTimeTable" (
    "id" SERIAL NOT NULL,
    "tasks" TEXT[],
    "userTimeTableId" INTEGER,

    CONSTRAINT "DayTimeTable_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_userTimeTableId_fkey" FOREIGN KEY ("userTimeTableId") REFERENCES "UserTimeTable"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LongTimeTable" ADD CONSTRAINT "LongTimeTable_userTimeTableId_fkey" FOREIGN KEY ("userTimeTableId") REFERENCES "UserTimeTable"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WeekTimeTable" ADD CONSTRAINT "WeekTimeTable_userTimeTableId_fkey" FOREIGN KEY ("userTimeTableId") REFERENCES "UserTimeTable"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DayTimeTable" ADD CONSTRAINT "DayTimeTable_userTimeTableId_fkey" FOREIGN KEY ("userTimeTableId") REFERENCES "UserTimeTable"("id") ON DELETE SET NULL ON UPDATE CASCADE;

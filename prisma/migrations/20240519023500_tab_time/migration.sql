-- CreateTable
CREATE TABLE "tab_time" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "enterTime" VARCHAR(32) NOT NULL,
    "exitTime" VARCHAR(32) NOT NULL,
    "updated_at" VARCHAR(32),

    CONSTRAINT "tab_time_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tab_time" ADD CONSTRAINT "tab_time_userId_fkey" FOREIGN KEY ("userId") REFERENCES "tab_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

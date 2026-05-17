-- CreateTable
CREATE TABLE "project_galleries" (
    "id" SERIAL NOT NULL,
    "project_id" INTEGER NOT NULL,
    "image_url" TEXT NOT NULL,

    CONSTRAINT "project_galleries_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "project_galleries" ADD CONSTRAINT "project_galleries_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

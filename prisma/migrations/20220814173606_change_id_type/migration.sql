-- This is an empty migration.
ALTER TABLE "service" ADD COLUMN "createdDate" DATE DEFAULT(NOW());
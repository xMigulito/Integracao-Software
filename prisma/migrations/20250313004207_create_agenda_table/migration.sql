-- CreateTable
CREATE TABLE "Agenda" (
    "id" SERIAL NOT NULL,
    "dia" TIMESTAMP(3),
    "local" VARCHAR(200),
    "cerimonialista" VARCHAR(100),

    CONSTRAINT "Agenda_pkey" PRIMARY KEY ("id")
);

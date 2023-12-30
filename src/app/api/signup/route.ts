import { UsersCredantials } from "@/app/types";
import { prisma } from "../../../../lib/prisma";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email, password } = (await req.json()) as UsersCredantials;

  const isSingedUp = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });

  if (!isSingedUp) {
    const salt = 13;
    const hashedPassword = await bcrypt.hash(password, salt);

    await prisma.user.create({
      data: {
        email: email,
        password: hashedPassword,
        PersonalTables: {
          create: {
            DTT: undefined,
            LTT: undefined,
            WTT: undefined,
          },
        },
      },
    });

    return NextResponse.json({
      message: "User has been successfully created",
      status: 200,
    });
  } else {
    return NextResponse.json({
      error: "User with this email already exists",
      status: 409,
    });
  }
}

import { UsersCredantials } from "@/app/types";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/prisma";
import bcrypt from "bcrypt";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body as UsersCredantials;
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
        PersonalTables: {},
      },
    });
  } else {
    return new Response("User with this email already exists");
  }

  return new Response(email);
}

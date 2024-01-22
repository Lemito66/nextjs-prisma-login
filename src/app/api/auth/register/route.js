import { NextResponse } from "next/server";
import prisma from "@/libs/db";
import bcrypt from "bcrypt";

export async function POST(request) {
  try {
    const data = await request.json();
    const userFound = await prisma.user.findUnique({
      where: {
        username: data.username,
      },
    });
    if (userFound) {
      return NextResponse.json(
        {
          message: "User already exists",
        },
        {
          status: 400,
        }
      );
    }

    const emailFound = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });
    if (emailFound) {
      return NextResponse.json(
        {
          message: "Email already exists",
        },
        {
          status: 400,
        }
      );
    }

    //console.log(data);
    const hashPassword = await bcrypt.hash(data.password, 10); // Utilizamos bcrypt para encriptar la contraseña y el 10 es el número de veces que se va a encriptar
    const NewUser = await prisma.user.create({
      data: {
        username: data.username,
        email: data.email,
        password: hashPassword,
      },
    });
    //console.log(NewUser);

    const { password: _, ...user } = NewUser; // Eliminamos el password de la respuesta

    return NextResponse.json({
      message: "User created",
      data: NewUser,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}

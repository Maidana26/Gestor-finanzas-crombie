import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import db from "@/libs/db";

interface RegisterData {
  username: string;
  email: string;
  password: string;
}

export async function POST(request: Request): Promise<Response> {
  try {
    // Parseamos el cuerpo de la solicitud
    const data: RegisterData = await request.json();

    // Verificamos si el correo ya existe
    const userFound = await db.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (userFound) {
      return NextResponse.json(
        { message: "Email already exists" },
        { status: 400 }
      );
    }

    // Verificamos si el nombre de usuario ya existe
    const usernameFound = await db.user.findUnique({
      where: {
        username: data.username,
      },
    });

    if (usernameFound) {
      return NextResponse.json(
        { message: "Username already exists" },
        { status: 400 }
      );
    }

    // Hash de la contraseña
    const hashedPassword = await bcrypt.hash(data.password, 10);

    // Creamos el nuevo usuario
    const newUser = await db.user.create({
      data: {
        username: data.username,
        email: data.email,
        password: hashedPassword,
      },
    });

    // Excluimos la contraseña del usuario antes de devolverlo
    const user = { ...newUser, password: undefined };

    return NextResponse.json(user);
  } catch (error) {
    let errorMessage = "An unexpected error occurred";

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return NextResponse.json(
      { message: errorMessage },
      { status: 500 }
    );
  }
}
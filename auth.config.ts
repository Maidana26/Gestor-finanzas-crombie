import { AuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "@/libs/db";
import bcrypt from "bcrypt";

// Definir el tipo para las credenciales (datos que el usuario proporciona al iniciar sesión)
interface Credentials {
  email: string;
  password: string;
}

// Definir la configuración de autenticación con NextAuth
export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password", placeholder: "*****" },
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      async authorize(credentials: any) {
        
        // Verificamos si 'credentials' está definido antes de acceder a sus propiedades
        if (!credentials) {
          throw new Error("No credentials provided");
        }

        // Buscamos el usuario en la base de datos usando el email
        const userFound = await db.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        // Si no se encuentra el usuario, lanzamos un error
        if (!userFound) {
          throw new Error("No user found");
        }

        console.log(userFound);

        // Verificamos si la contraseña es correcta usando bcrypt
        const matchPassword = await bcrypt.compare(credentials.password, userFound.password);

        // Si las contraseñas no coinciden, lanzamos un error
        if (!matchPassword) {
          throw new Error("Wrong password");
        }

        // Aseguramos que el retorno cumpla con el tipo esperado por NextAuth (User)
        const user: User = {
          id: String(userFound.id),  // Convertimos 'id' a string si NextAuth espera un string
          name: userFound.username,
          email: userFound.email,
        };

        return user;  // Retornamos el objeto que NextAuth espera
      },
    }),
  ],
  pages: {
    signIn: "/auth/login", // Ruta personalizada para la página de inicio de sesión
  },
};



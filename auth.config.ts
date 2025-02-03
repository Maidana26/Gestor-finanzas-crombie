import { AuthOptions, User as NextAuthUser } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "@/libs/db";
import bcrypt from "bcrypt";

// Definir el tipo para las credenciales (datos que el usuario proporciona al iniciar sesión)
interface Credentials {
  email: string;
  password: string;
}

// Extender el tipo User para incluir la propiedad 'id'
declare module "next-auth" {
  interface User {
    id: string;
  }

  interface Session {
    user: User;
  }
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
        const user: NextAuthUser = {
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

  callbacks: {
    // Agregar el id a la sesión
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub as string; // Asignamos el id del token a la sesión
      }
      return session;
    },

    // Guardar el id del usuario en el JWT
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id; // Guardamos el id del usuario en el JWT
      }
      return token;
    }
  },

  session: {
    strategy: "jwt",  // Usamos JWT como estrategia de sesión
  },
};
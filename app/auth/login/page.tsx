"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";

type FormData = {
  email: string;
  password: string;
};

const AuthPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (res && res.error) {
      setError(res.error);
    } else if (res) {
      router.push("/dashboard");
      router.refresh();
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-green-500 mb-4">
          Inicia Sesión
        </h1>
        <p className="text-gray-400 text-center mb-6">
          Accede a FinTrack y comienza a gestionar tus finanzas.
        </p>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-gray-300 font-semibold mb-1">
              Correo electrónico
            </label>
            <input
              type="email"
              {...register("email", {
                required: { value: true, message: "El correo es obligatorio" },
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Correo inválido",
                },
              })}
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring focus:ring-green-500"
              placeholder="tuemail@ejemplo.com"
            />
            {errors.email && (
              <span className="text-red-500 text-xs">
                {errors.email.message}
              </span>
            )}
          </div>

          <div>
            <label className="block text-gray-300 font-semibold mb-1">
              Contraseña
            </label>
            <input
              type="password"
              {...register("password", {
                required: {
                  value: true,
                  message: "La contraseña es obligatoria",
                },
              })}
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring focus:ring-green-500"
              placeholder="••••••••"
            />
            {errors.password && (
              <span className="text-red-500 text-xs">
                {errors.password.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg mt-6"
          >
            Iniciar Sesión
          </button>
        </form>

        <p className="text-center text-gray-400 mt-4">
          ¿No tienes una cuenta?{" "}
          <Link
            href="/auth/register"
            className="text-green-400 hover:text-green-500"
          >
            Regístrate aquí
          </Link>
          {" o "}
          <Link href="/" className="text-green-400 hover:text-green-500">
            Volver al inicio
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;

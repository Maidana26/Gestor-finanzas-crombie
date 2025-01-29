"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    if (data.password !== data.confirmPassword) {
      return alert("Las contraseñas no coinciden");
    }

    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        username: data.username,
        email: data.email,
        password: data.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      router.push("/auth/login");
    }
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-green-500 mb-4">
          Regístrate
        </h1>
        <p className="text-gray-400 text-center mb-6">
          Crea tu cuenta para comenzar a usar FinTrack.
        </p>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-300 font-semibold mb-1">
              Nombre
            </label>
            <input
              type="text"
              {...register("username", {
                required: "El nombre es obligatorio",
              })}
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring focus:ring-green-500"
              placeholder="Tu nombre"
            />
            {errors.username && (
              <span className="text-red-500 text-xs">
                {typeof errors.username.message === "string"
                  ? errors.username.message
                  : "Error desconocido"}
              </span>
            )}
          </div>
          <div>
            <label className="block text-gray-300 font-semibold mb-1">
              Correo electrónico
            </label>
            <input
              type="email"
              {...register("email", {
                required: "El correo es obligatorio",
              })}
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring focus:ring-green-500"
              placeholder="tuemail@ejemplo.com"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {typeof errors.email.message === "string"
                  ? errors.email.message
                  : "Error desconocido"}
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
                required: "La contraseña es obligatoria",
              })}
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring focus:ring-green-500"
              placeholder="••••••••"
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                {typeof errors.password.message === "string"
                  ? errors.password.message
                  : "Error desconocido"}
              </span>
            )}
          </div>
          <div>
            <label className="block text-gray-300 font-semibold mb-1">
              Confirmar contraseña
            </label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: "Confirmar la contraseña es obligatorio",
              })}
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring focus:ring-green-500"
              placeholder="••••••••"
            />
            {errors.confirmPassword && (
              <span className="text-red-500 text-sm">
                {typeof errors.confirmPassword.message === "string"
                  ? errors.confirmPassword.message
                  : "Error desconocido"}
              </span>
            )}
          </div>
          <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg mt-6">
            Registrarse
          </button>
        </form>

        <p className="text-center text-gray-400 mt-4">
          ¿Ya tienes una cuenta?{" "}
          <Link
            href="/auth/login"
            className="text-green-400 hover:text-green-500"
          >
            Inicia sesión aquí
          </Link>
          {" o "}
          <Link href="/" className="text-green-400 hover:text-green-500">
            Volver al inicio
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;

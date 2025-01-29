"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSession } from "next-auth/react"; // Importa useSession

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession(); // Usa useSession para obtener el estado de la sesión
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return; // No hacer nada mientras la sesión está cargando

    if (!session) {
      router.replace("/auth/login"); // Redirige si no hay sesión
    }
  }, [session, status, router]);

  return <>{children}</>;
}
'use client';

import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';

const DashboardPage = () => {
  const router = useRouter();

  // Función para cerrar sesión y redirigir al inicio
  const handleLogout = async () => {
    await signOut({ callbackUrl: '/' });  // Redirige al home después de cerrar sesión
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Header */}
      <header className="w-full bg-gray-800 py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-3xl font-bold text-green-500">FinTrack</h1>
          <nav className="space-x-4">
            <button
              onClick={() => router.push('/')}  // Redirige a la página principal
              className="text-white hover:text-green-400"
            >
              Inicio
            </button>
          </nav>
          <button
            onClick={handleLogout}  // Llama a la función de logout
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Cerrar Sesión
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto p-6">
        <h1 className="text-4xl font-extrabold mb-8 text-green-500">
          Bienvenido 👋
        </h1>

        {/* Botón Resumen General */}
        <section className="mb-8">
          <button
            onClick={() => router.push('/dashboard/gastos')}  // Redirige a /dashboard/gastos
            className="w-full bg-gray-800 p-6 rounded-lg shadow-lg text-white hover:bg-gray-700"
          >
            <h2 className="text-2xl font-bold mb-4">Gastos y Ingresos</h2>
            <div className="flex justify-between">
              <div>
                <p className="text-gray-400">Saldo Actual</p>
                <h3 className="text-3xl font-bold text-green-400">$5500.00</h3>
              </div>
              <div>
                <p className="text-gray-400">Gastos Mensuales</p>
                <h3 className="text-3xl font-bold text-red-400">$950.00</h3>
              </div>
            </div>
          </button>
        </section>

        {/* Botón Mercado Financiero */}
        <section className="mb-8">
          <button
            onClick={() => router.push('/dashboard/mercado-financiero')}  // Redirige a Mercado Financiero
            className="w-full bg-gray-800 p-6 rounded-lg shadow-lg text-white hover:bg-gray-700"
          >
            <h2 className="text-2xl font-bold mb-4">Mercado Financiero</h2>
            <p className="text-gray-300">
              Enterate de las ultimas tendencias del mercado financiero gracias a nuestra gran comunidad!
            </p>
          </button>
        </section>

        {/* Botón Progreso de Objetivos */}
        <section className="mb-8">
          <button
            onClick={() => router.push('/dashboard/objetivos')}  // Redirige a Progreso de Objetivos
            className="w-full bg-gray-800 p-6 rounded-lg shadow-lg text-white hover:bg-gray-700"
          >
            <h2 className="text-2xl font-bold mb-4">Progreso de Objetivos</h2>
            
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-800 py-4">
        <div className="container mx-auto text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} FinTrack. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default DashboardPage;

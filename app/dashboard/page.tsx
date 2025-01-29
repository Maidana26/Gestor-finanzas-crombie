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
              onClick={() => router.push('/')}
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

        {/* Resumen General */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Resumen General</h2>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex justify-between">
            <div>
              <p className="text-gray-400">Saldo Actual</p>
              <h3 className="text-3xl font-bold text-green-400">$12,450.00</h3>
            </div>
            <div>
              <p className="text-gray-400">Gastos Mensuales</p>
              <h3 className="text-3xl font-bold text-red-400">$3,200.00</h3>
            </div>
            <div>
              <p className="text-gray-400">Ahorros</p>
              <h3 className="text-3xl font-bold text-blue-400">$1,800.00</h3>
            </div>
          </div>
        </section>

        {/* Información del Mercado Financiero */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Mercado Financiero</h2>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <p className="text-gray-300">
              Últimas tendencias: las acciones tecnológicas subieron un 2.5% esta semana.
            </p>
          </div>
        </section>

        {/* Progreso de Objetivos */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Progreso de Objetivos</h2>
          <div className="flex space-x-4">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-1/3">
              <h3 className="text-xl font-bold text-green-400">Viaje a Europa</h3>
              <p className="text-gray-300">Ahorros: $4,000 / $5,000</p>
              <div className="bg-gray-700 w-full h-3 rounded mt-2">
                <div className="bg-green-500 h-3 rounded" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-1/3">
              <h3 className="text-xl font-bold text-green-400">Comprar Laptop</h3>
              <p className="text-gray-300">Ahorros: $1,200 / $2,000</p>
              <div className="bg-gray-700 w-full h-3 rounded mt-2">
                <div className="bg-green-500 h-3 rounded" style={{ width: '60%' }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Control de Gastos */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Control de Gastos</h2>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <p className="text-gray-300">
              Próximamente: Gráfica de gastos detallada.
            </p>
          </div>
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

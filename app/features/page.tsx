import Link from 'next/link';

export default function Features() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      
      <header className="w-full bg-gray-800 py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-3xl font-bold text-green-500">FinTrack</h1>
          <nav className="space-x-4">
            <Link href="/" className="text-white hover:text-green-400">Inicio</Link>
            <Link href="/auth/register" className="text-white hover:text-green-400">Registro</Link>
            <Link href="/auth/login" className="text-white hover:text-green-400">Log in</Link>
          </nav>
        </div>
      </header>

      
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl font-extrabold mb-4 text-green-500">Características</h1>
        <div className="space-y-4 max-w-4xl">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-green-400">Información del Mercado Financiero</h2>
            <p className="text-gray-300 mt-2">
              Accede a datos actualizados sobre tendencias del mercado financiero, análisis y reportes clave para mantenerte informado.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-green-400">Definición de Objetivos</h2>
            <p className="text-gray-300 mt-2">
              Establece metas financieras personalizadas y sigue tu progreso hacia ellas con herramientas fáciles de usar.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-green-400">Control de Gastos</h2>
            <p className="text-gray-300 mt-2">
              Monitorea tus gastos semanales, mensuales y anuales con reportes detallados y gráficos interactivos.
            </p>
          </div>
        </div>
      </main>

      
      <footer className="w-full bg-gray-800 py-4">
        <div className="container mx-auto text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} FinTrack. Todos los derechos reservados.</p>
          <nav className="mt-2 space-x-4">
            <Link href="/privacy" className="hover:text-white">Política de Privacidad</Link>
            <Link href="/terms" className="hover:text-white">Términos de Servicio</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

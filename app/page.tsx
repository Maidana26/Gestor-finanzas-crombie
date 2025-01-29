import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Header */}
      <header className="w-full bg-gray-800 py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-3xl font-bold text-green-500">FinTrack</h1>
          <nav className="space-x-4">
            <Link href="/auth/login" className=" text-2xl text-white  hover:text-green-400">Log In</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl font-extrabold mb-4 text-green-500">
          FinTrack
        </h1>
        <p className="text-gray-300 mb-8 max-w-3xl">
          Una plataforma innovadora para gestionar tus gastos personales y alcanzar tus metas financieras fácilmente.
        </p>
        <div className="flex space-x-4">
          <Link href="/auth/register" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg">
            Comenzar
          </Link>
          <Link href="/features" className="bg-white text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-gray-200 shadow-lg">
            Saber más →
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-800 py-6">
        <div className="container mx-auto text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} FinTrack. Todos los derechos reservados.</p>
          <nav className="mt-4 space-x-4">
            <Link href="/privacy" className="hover:text-white">Política de Privacidad</Link>
            <Link href="/terms" className="hover:text-white">Términos de Servicio</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
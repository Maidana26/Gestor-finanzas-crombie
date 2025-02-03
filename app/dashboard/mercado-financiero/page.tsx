'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function MercadoFinanciero() {
    const router = useRouter();

    // Datos mockeados para las noticias
    const noticias = [
        {
            id: '1',
            title: 'El mercado bursátil cae un 2%',
            content: 'El mercado bursátil experimentó una caída significativa en la jornada de hoy. Los principales índices cayeron, principalmente debido a las tensiones geopolíticas en Europa y las expectativas de un aumento en las tasas de interés por parte de la Reserva Federal.',
            date: '2025-02-03',
        },
        {
            id: '2',
            title: 'Bitcoin alcanza nuevos máximos históricos',
            content: 'Bitcoin alcanzó un nuevo máximo histórico superando los 50,000 dólares por primera vez. Los analistas creen que este aumento se debe a la creciente adopción de las criptomonedas y la percepción de Bitcoin como un refugio contra la inflación.',
            date: '2025-02-02',
        },
        {
            id: '3',
            title: 'La Reserva Federal aumenta tasas de interés',
            content: 'La Reserva Federal ha decidido aumentar las tasas de interés en un 0.25%. Esta medida busca combatir la inflación, aunque se espera que tenga un impacto negativo en la actividad económica a corto plazo. Los mercados reaccionaron con caídas en los índices bursátiles.',
            date: '2025-02-01',
        },
        {
            id: '4',
            title: 'Los mercados financieros reaccionan positivamente a la reforma fiscal',
            content: 'Los mercados financieros mostraron una reacción positiva ante el anuncio de una reforma fiscal que incluye recortes de impuestos para las empresas. Los índices bursátiles experimentaron una subida en las primeras horas de la jornada.',
            date: '2025-01-30',
        },
        {
            id: '5',
            title: 'La crisis del petróleo impacta a las economías emergentes',
            content: 'La subida del precio del petróleo ha generado una fuerte presión sobre las economías emergentes, que dependen en gran medida de las importaciones de energía. Se espera que esta crisis impulse la inflación en varios países, afectando la estabilidad económica global.',
            date: '2025-01-28',
        },
    ];

    // Estado del formulario
    const [form, setForm] = useState({
        title: '',
        content: '',
        date: ''
    });

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col">
            {/* Header */}
            <header className="w-full bg-gray-800 py-4">
                <div className="container mx-auto flex justify-between items-center px-6">
                    <h1 className="text-3xl font-bold text-green-500">Fin Track</h1>
                    <nav className="space-x-4">
                        <button
                            onClick={() => router.push('/dashboard')}
                            className="text-white hover:text-green-400"
                        >
                            Volver a Dashboard
                        </button>
                    </nav>
                    <button
                        onClick={() => router.push('/api/auth/signout')}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                    >
                        Cerrar Sesión
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 container mx-auto p-6">
                <h1 className="text-4xl font-extrabold mb-8 text-green-500">Noticias del Mercado Financiero</h1>

                {/* Formulario de Subida de Noticias */}
                <h2 className="text-2xl mb-4 text-green-500">Agregar Nueva Noticia</h2>
                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Título de la Noticia"
                        value={form.title}
                        onChange={(e) => setForm({ ...form, title: e.target.value })}
                        className="w-full p-2 bg-gray-800 text-white rounded-lg"
                    />
                    <textarea
                        placeholder="Contenido de la Noticia"
                        value={form.content}
                        onChange={(e) => setForm({ ...form, content: e.target.value })}
                        className="w-full p-2 bg-gray-800 text-white rounded-lg"
                    />
                    <input
                        type="date"
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        className="w-full p-2 bg-gray-800 text-white rounded-lg"
                    />
                    <button type="button" className="w-full p-3 bg-green-500 text-white rounded-lg hover:bg-green-600">
                        Agregar Noticia
                    </button>
                </form>

                {/* Mostrar Noticias */}
                <h2 className="text-2xl mt-8 mb-4 text-green-500">Últimas Noticias</h2>
                <ul>
                    {noticias.map(({ id, title, content, date }) => (
                        <li key={id} className="bg-gray-800 p-4 rounded-lg mb-4">
                            <h3 className="text-xl font-semibold">{title}</h3>
                            <p className="text-sm text-gray-400">{date}</p>
                            <p className="text-gray-300">{content.slice(0, 150)}...</p>
                            <a
                                href="#"
                                className="text-green-500 hover:text-green-400"
                            >
                                Leer más
                            </a>
                        </li>
                    ))}
                </ul>
            </main>

            {/* Footer */}
            <footer className="w-full bg-gray-800 py-4">
                <div className="container mx-auto text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Mercado Financiero. Todos los derechos reservados.</p>
                </div>
            </footer>
        </div>
    );
}

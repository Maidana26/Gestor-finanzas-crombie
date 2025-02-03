'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ProgresoObjetivos() {
    const router = useRouter();

    // Datos mockeados de los objetivos
    const [objetivos, setObjetivos] = useState([
        {
            id: '1',
            title: 'Viaje a Europa',
            ahorrado: 4000,
            objetivo: 5000,
        },
        {
            id: '2',
            title: 'Comprar Laptop',
            ahorrado: 1200,
            objetivo: 2000,
        },
        {
            id: '3',
            title: 'Ahorro para Emergencias',
            ahorrado: 1500,
            objetivo: 3000,
        },
        {
            id: '4',
            title: 'Compra de Auto',
            ahorrado: 7000,
            objetivo: 10000,
        },
    ]);

    // Estado para el formulario de agregar un nuevo objetivo
    const [nuevoObjetivo, setNuevoObjetivo] = useState({
        title: '',
        ahorrado: '',
        objetivo: '',
    });

    // Función para agregar un nuevo objetivo
    const handleAgregarObjetivo = (e: React.FormEvent) => {
        e.preventDefault();
        const nuevoId = (objetivos.length + 1).toString();
        setObjetivos([
            ...objetivos,
            {
                id: nuevoId,
                title: nuevoObjetivo.title,
                ahorrado: parseFloat(nuevoObjetivo.ahorrado),
                objetivo: parseFloat(nuevoObjetivo.objetivo),
            },
        ]);
        setNuevoObjetivo({ title: '', ahorrado: '', objetivo: '' }); // Limpiar el formulario
    };

    // Función para eliminar un objetivo
    const handleEliminarObjetivo = (id: string) => {
        setObjetivos(objetivos.filter((objetivo) => objetivo.id !== id));
    };

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
                <h2 className="text-2xl font-bold mb-4">Progreso de Objetivos</h2>

                {/* Formulario para agregar un nuevo objetivo */}
                <form onSubmit={handleAgregarObjetivo} className="space-y-4 mb-6">
                    <input
                        type="text"
                        placeholder="Título del Objetivo"
                        value={nuevoObjetivo.title}
                        onChange={(e) => setNuevoObjetivo({ ...nuevoObjetivo, title: e.target.value })}
                        className="w-full p-2 bg-gray-800 text-white rounded-lg"
                        required
                    />
                    <input
                        type="number"
                        placeholder="Ahorros"
                        value={nuevoObjetivo.ahorrado}
                        onChange={(e) => setNuevoObjetivo({ ...nuevoObjetivo, ahorrado: e.target.value })}
                        className="w-full p-2 bg-gray-800 text-white rounded-lg"
                        required
                    />
                    <input
                        type="number"
                        placeholder="Objetivo Total"
                        value={nuevoObjetivo.objetivo}
                        onChange={(e) => setNuevoObjetivo({ ...nuevoObjetivo, objetivo: e.target.value })}
                        className="w-full p-2 bg-gray-800 text-white rounded-lg"
                        required
                    />
                    <button type="submit" className="w-full p-3 bg-green-500 text-white rounded-lg hover:bg-green-600">
                        Agregar Objetivo
                    </button>
                </form>

                {/* Mostrar los objetivos */}
                <div className="flex space-x-4">
                    {objetivos.map(({ id, title, ahorrado, objetivo }) => (
                        <div key={id} className="bg-gray-700 w-1/3 p-4 rounded-lg">
                            <h3 className="text-xl font-bold text-green-400">{title}</h3>
                            <p className="text-gray-300">Ahorros: ${ahorrado} / ${objetivo}</p>
                            <div className="bg-gray-700 w-full h-3 rounded mt-2">
                                <div
                                    className="bg-green-500 h-3 rounded"
                                    style={{ width: `${(ahorrado / objetivo) * 100}%` }}
                                ></div>
                            </div>
                            <div className="mt-2">
                                <button
                                    onClick={() => handleEliminarObjetivo(id)}
                                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                                >
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {/* Footer */}
            <footer className="w-full bg-gray-800 py-4">
                <div className="container mx-auto text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Progreso de Objetivos. Todos los derechos reservados.</p>
                </div>
            </footer>
        </div>
    );
}

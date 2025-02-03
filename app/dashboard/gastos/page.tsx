'use client';
import { useSession } from "next-auth/react";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Gastos() {
    const router = useRouter();
    
    // Datos mockeados
    const ingresos = [
        { id: '1', title: 'Salario', amount: 5000, description: 'Pago mensual' },
        { id: '2', title: 'Freelance', amount: 500, description: 'Trabajo extra' }
    ];

    const gastos = [
        { id: '1', title: 'Supermercado', amount: 150, description: 'Compra de alimentos' },
        { id: '2', title: 'Alquiler', amount: 800, description: 'Pago mensual de alquiler' }
    ];

    // Estado para el formulario
    const [form, setForm] = useState({
        title: '',
        amount: '',
        type: 'ingreso' as 'ingreso' | 'gasto',
        description: ''
    });

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col">
            {/* Header */}
            <header className="w-full bg-gray-800 py-4">
                <div className="container mx-auto flex justify-between items-center px-6">
                    <h1 className="text-3xl font-bold text-green-500">FinTrack</h1>
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
                <h1 className="text-4xl font-extrabold mb-8 text-green-500">Gestión de Gastos</h1>
                <p>Total Ingresos: ${ingresos.reduce((sum, { amount }) => sum + amount, 0)}</p>
                <p>Total Gastos: ${gastos.reduce((sum, { amount }) => sum + amount, 0)}</p>

                {/* Formulario */}
                <h2 className="text-2xl mt-8 mb-4 text-green-500">Agregar Ingreso/Gasto</h2>
                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Título"
                        value={form.title}
                        onChange={(e) => setForm({ ...form, title: e.target.value })}
                        className="w-full p-2 bg-gray-800 text-white rounded-lg"
                    />
                    <input
                        type="number"
                        placeholder="Monto"
                        value={form.amount}
                        onChange={(e) => setForm({ ...form, amount: e.target.value })}
                        className="w-full p-2 bg-gray-800 text-white rounded-lg"
                    />
                    <select
                        value={form.type}
                        onChange={(e) => setForm({ ...form, type: e.target.value as "ingreso" | "gasto" })}
                        className="w-full p-2 bg-gray-800 text-white rounded-lg"
                    >
                        <option value="ingreso">Ingreso</option>
                        <option value="gasto">Gasto</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Descripción"
                        value={form.description}
                        onChange={(e) => setForm({ ...form, description: e.target.value })}
                        className="w-full p-2 bg-gray-800 text-white rounded-lg"
                    />
                    <button type="button" className="w-full p-3 bg-green-500 text-white rounded-lg hover:bg-green-600">
                        Agregar
                    </button>
                </form>

                {/* Mostrar Ingresos */}
                <h2 className="text-2xl mt-8 mb-4 text-green-500">Ingresos</h2>
                <ul>
                    {ingresos.map(({ id, title, amount, description }) => (
                        <li key={id} className="bg-gray-800 p-4 rounded-lg mb-4">
                            <strong>{title}</strong> - ${amount} <br />
                            {description}
                            <div className="mt-2">
                                <button
                                    disabled
                                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 mr-2 opacity-50"
                                >
                                    Editar
                                </button>
                                <button
                                    disabled
                                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 opacity-50"
                                >
                                    Eliminar
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>

                {/* Mostrar Gastos */}
                <h2 className="text-2xl mt-8 mb-4 text-red-500">Gastos</h2>
                <ul>
                    {gastos.map(({ id, title, amount, description }) => (
                        <li key={id} className="bg-gray-800 p-4 rounded-lg mb-4">
                            <strong>{title}</strong> - ${amount} <br />
                            {description}
                            <div className="mt-2">
                                <button
                                    disabled
                                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 mr-2 opacity-50"
                                >
                                    Editar
                                </button>
                                <button
                                    disabled
                                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 opacity-50"
                                >
                                    Eliminar
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </main>

            {/* Footer */}
            <footer className="w-full bg-gray-800 py-4">
                <div className="container mx-auto text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} FinTrack. Todos los derechos reservados.</p>
                </div>
            </footer>
        </div>
    );
}
3
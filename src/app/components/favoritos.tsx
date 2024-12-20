"use client";

import React from "react";
import { useFavorites } from '../context/favoritescontext';
import { useState } from 'react';

export default function Favs() {
    const { favorites, removeFavorite } = useFavorites();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const sendFavoritesToDB = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch('/api/favorites', { // Cambia la URL a relativa
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(favorites),
            });
    
            const data = await response.json();
    
            if (!response.ok) {
                throw new Error(data.error || 'Error al guardar favoritos');
            }
    
            alert('Favoritos guardados exitosamente');
        } catch (error: any) {
            console.error('Error:', error);
            setError(error.message || "Hubo un error al guardar los favoritos");
        } finally {
            setIsLoading(false);
        }
    };

    

    return (
        <section className="p-20">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="mx-auto max-w-3xl">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className=" bg-gradient-to-r from-slate-200 to-gray-300 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">
                            FAVORITOS
                        </h1>
                    </div>

                    <div className="mt-8">
                        <ul className="space-y-4">
                            {favorites.map((item) => (
                                <li key={item.id} className="bg-white/20 backdrop-blur-20 rounded-md flex items-center gap-4">
                                    <div className="p-4">
                                        <h3 className="text-lg text-gray-900">{item.name}</h3>
                                        <dl className="mt-0.5 space-y-px text-lg text-gray-300">
                                            <div>
                                                <dt className="inline text-cyan-400">Tipo: </dt>
                                                <dd className="inline">{item.type}</dd>
                                            </div>
                                        </dl>
                                    </div>

                                    <div className="flex flex-1 items-center justify-end gap-2 pr-4">
                                        <button
                                            onClick={() => removeFavorite(item.id)}
                                            className="text-gray-600 transition hover:text-red-600"
                                        >
                                            <span className="sr-only">Remove item</span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="size-8 pr-px"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <span className="flex items-center">
                            <span className="h-px flex-1 bg-white/60"></span>
                            <span className="shrink-0 px-6">¿Quieres enviarlos a la base de datos?</span>
                            <span className="h-px flex-1 bg-white/60"></span>
                        </span>

                        <div className="mt-4 flex items-center align-middle justify-center">
                            <button 
                                onClick={sendFavoritesToDB}
                                disabled={isLoading}
                                className={`cursor-pointer transition-all bg-gray-500 text-white px-6 py-2 rounded-lg border-slate-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                {isLoading ? 'Guardando...' : 'Guardar Favoritos'}
                            </button>
                        </div>

                        {error && (
                            <p className="text-red-500 text-center mt-2">{error}</p>
                        )}

                    </div>
                </div>
            </div>
        </section>
    );
}
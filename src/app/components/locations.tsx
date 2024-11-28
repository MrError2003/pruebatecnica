"use client";

import React, { useState, useEffect } from "react";
import { useFavorites } from '../context/favoritescontext';

interface Location {
    id: number;
    name: string;
    type: string;
    dimension: string;
    character: string[];
    created: string;
}

interface ApiResponse {
    info: {
        pages: number;
    };
    results: Location[];
}

export default function Locations() {
    const [locations, setLocations] = useState<Location[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
    



    // Función para obtener las locaciones de la API
    // Función para obtener las locaciones de la API
    const fetchLocations = async (page: number): Promise<void> => {
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/location?page=${page}`);
            const data: ApiResponse = await response.json();
            setLocations(data.results);
            setTotalPages(data.info.pages); // Total de páginas disponibles
        } catch (error) {
            console.error('Error fetching locations:', error);
        }
    };

    // Llamada a la API cada vez que cambia la página
    useEffect(() => {
        fetchLocations(currentPage);
    }, [currentPage]);

    // Funciones para cambiar de página
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    // Función para abrir el modal con el personaje seleccionado
    const openModal = (location: Location) => {
        setSelectedLocation(location);
    };

    // Función para cerrar el modal
    const closeModal = () => {
        setSelectedLocation(null);
    };
    
    const { addFavorite } = useFavorites();

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-6 mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {locations.map((location) => (
                    <a
                        key={location.id}
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            openModal(location);
                        }}
                        className="block rounded-lg p-3 shadow-lg bg-white/20 backdrop-blur-sm hover:shadow-md transition-shadow"
                    >
                        <div className="mt-2">
                            <dl>
                                <div>
                                    <dd className="font-medium text-center text-2xl">{location.name}</dd>
                                </div>
                            </dl>
                            <div className="mt-2 mx-10 flex items-center text-center justify-between text-md">
                                <div className="flex items-center gap-0.5">
                                    <div>
                                        <p className="text-black">Tipo:</p>
                                        <p className="font-medium">{location.type}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <div>
                                        <p className="text-black">Dimension:</p>
                                        <p className="font-medium">{location.dimension}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </a>
                ))}
            </div>

            {/* Paginación */}
            <div className="flex justify-center mt-6 space-x-4">
                <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
                >
                    Anterior
                </button>
                <span className="text-lg font-medium">
                    Página {currentPage} de {totalPages}
                </span>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
                >
                    Siguiente
                </button>
            </div>

            {/* Modal */}
            {selectedLocation && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                        <div
                            className="fixed inset-0 z-40"
                            onClick={closeModal}
                        ></div>
                        <h2 className="text-2xl text-blue-600 font-bold  mt-4 mb-2">{selectedLocation.name}</h2>
                        <p className="text-black"><strong className="text-blue-400">Tipo:</strong> {selectedLocation.type}</p>
                        <p className="text-black"><strong className="text-blue-400">Dimension:</strong> {selectedLocation.dimension}</p>

                        <p className="text-black"><strong className="text-blue-400">Fecha de creacion:</strong>{selectedLocation.created}</p>

                        <div className="flex items-center justify-center pt-3">
                        <button
                                onClick={() => {
                                    addFavorite({
                                        id: selectedLocation.id,
                                        name: selectedLocation.name,
                                        type: 'location',
                                        fullData: selectedLocation
                                    });
                                    closeModal();
                                }}
                                className="cursor-pointer flex items-center fill-blue-300 bg-blue-600 hover:bg-blue-700 active:border active:blue-cyan-500 rounded-md duration-100 p-2 z-50"
                            >
                                <svg viewBox="0 -0.5 25 25" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" d="M18.507 19.853V6.034C18.5116 5.49905 18.3034 4.98422 17.9283 4.60277C17.5532 4.22131 17.042 4.00449 16.507 4H8.50705C7.9721 4.00449 7.46085 4.22131 7.08577 4.60277C6.7107 4.98422 6.50252 5.49905 6.50705 6.034V19.853C6.45951 20.252 6.65541 20.6407 7.00441 20.8399C7.35342 21.039 7.78773 21.0099 8.10705 20.766L11.907 17.485C12.2496 17.1758 12.7705 17.1758 13.113 17.485L16.9071 20.767C17.2265 21.0111 17.6611 21.0402 18.0102 20.8407C18.3593 20.6413 18.5551 20.2522 18.507 19.853Z" clipRule="evenodd" fillRule="evenodd" />
                                </svg>
                                <span className="text-sm text-white font-bold pr-1">Guardar locacion</span>
                            </button>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
}

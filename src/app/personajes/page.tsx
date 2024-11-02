import React from "react";
import Background from "../components/background";
import Navbar from "../components/navbar";
import Characters from "../components/characters";
import Footer from "../components/footer";

export default function personajes() {
    return (
        <>

            <div className="fixed inset-0 z-[-1]">
                <Background />
            </div>

            <Navbar />

            <section className="text-white z-10">
                <div className="mx-auto max-w-screen-xl px-4 pt-6 pb-1 lg:py-12 lg:items-center">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1
                            className="bg-gradient-to-r from-sky-400  to-blue-600 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl"
                        >
                            BIENVENIDO A LA SECCION
                            <span className="sm:block"> DE PERSONAJES. </span>
                        </h1>

                        <p className="mx-auto mt-4 max-w-xl sm:text-lg">
                            En esta página podrás encontrar información mas especifica sobre los personajes de la serie de Rick y Morty.
                        </p>
                    </div>
                </div>
            </section>

            <Characters />

            <Footer />

        </>
    );
}
import React from "react";
import Link from "next/link";
import Wbutton from "./wbutton";

export default function WelcomeSection() {
    return (

        <section className="text-white z-10">
            <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                <div className="mx-auto max-w-3xl text-center">
                    <h1
                        className="bg-gradient-to-r from-indigo-300 via-teal-200 to-green-300 bg-clip-text text-5xl font-extrabold text-transparent sm:text-5xl"
                    >
                        BIENVENIDO A LOS DATOS

                        <span className="sm:block"> DE RICK Y MORTY. </span>
                    </h1>

                    <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                        En esta página podrás encontrar información sobre los personajes, episodios y locaciones de la serie de Rick y Morty.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Link
                            className="block w-full sm:w-auto"
                            href="#"
                        >
                            <Wbutton />
                        </Link>
                    </div>
                </div>
            </div>
        </section>

    );


};
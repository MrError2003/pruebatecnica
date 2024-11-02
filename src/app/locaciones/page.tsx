import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Locations from "../components/locations";
import Background from "../components/background";

export default function Locaciones() {
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
                            className="bg-gradient-to-r from-green-400  to-emerald-600 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl"
                        >
                            BIENVENIDO A LA SECCION
                            <span className="sm:block"> DE LOCACIONES. </span>
                        </h1>

                        <p className="mx-auto mt-4 max-w-xl sm:text-lg">
                            En esta página podrás encontrar información mas especifica sobre las locaciones de la serie de Rick y Morty.
                        </p>
                    </div>
                </div>
            </section>

            <Locations />

            <Footer />
        
        </>
    )
}
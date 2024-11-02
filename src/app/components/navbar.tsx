"use client";

import React, { useState } from "react";
import RmLogo from "./logo";
import Link from "next/link";

export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <div className="bg-white/10 backdrop-blur-sm">
                <div className="px-4 py-3 mx-auto sm:max-w-full md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                    <div className="relative flex items-center justify-between">
                        <a
                            href="/"
                            aria-label="Company"
                            title="Company"
                            className="inline-flex items-center"
                        >

                            <RmLogo />

                        </a>
                        <ul className="flex items-center space-x-8 lg:flex">
                            <li>
                                <Link
                                    href="/personajes"
                                    aria-label="Personajes de la serie"
                                    title="Personajes"
                                >
                                    <button className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
                                        Personajes
                                    </button>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/locaciones"
                                    aria-label="Locaciones de la serie"
                                    title="Locaciones"
                                >
                                    <button className="cursor-pointer transition-all bg-emerald-500 text-white px-6 py-2 rounded-lg border-emerald-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
                                        Locaciones
                                    </button>
                                </Link>
                            </li>
                        </ul>
                        <ul className="flex items-center space-x-8 lg:flex">
                            <Link
                                href="/favs"
                                aria-label="favoritos seleccionados"
                                title="favoritos"
                            >
                                <button className="cursor-pointer transition-all bg-slate-400 text-white px-6 py-2 rounded-lg border-slate-500 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
                                    Favoritos
                                </button>
                            </Link>
                        </ul>
                        <div className="lg:hidden">
                            <button
                                aria-label="Open Menu"
                                title="Open Menu"
                                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                                onClick={() => setIsMenuOpen(true)}
                            >
                                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                    />
                                </svg>
                            </button>
                            {isMenuOpen && (
                                <div className="absolute top-0 left-0 w-full">
                                    <div className="p-5 bg-white border rounded shadow-sm">
                                        <div className="flex items-center justify-between mb-4">
                                            <div>
                                                <a
                                                    href="/"
                                                    aria-label="Company"
                                                    title="Company"
                                                    className="inline-flex items-center"
                                                >
                                                    <svg
                                                        className="w-8 text-deep-purple-accent-400"
                                                        viewBox="0 0 24 24"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeMiterlimit="10"
                                                        stroke="currentColor"
                                                        fill="none"
                                                    >
                                                        <rect x="3" y="1" width="7" height="12" />
                                                        <rect x="3" y="17" width="7" height="6" />
                                                        <rect x="14" y="1" width="7" height="6" />
                                                        <rect x="14" y="11" width="7" height="12" />
                                                    </svg>
                                                    <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                                                        Company
                                                    </span>
                                                </a>
                                            </div>
                                            <div>
                                                <button
                                                    aria-label="Close Menu"
                                                    title="Close Menu"
                                                    className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                    onClick={() => setIsMenuOpen(false)}
                                                >
                                                    <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                        <path
                                                            fill="currentColor"
                                                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <nav>
                                            <ul className="space-y-4">
                                                <li>
                                                    <a
                                                        href="/"
                                                        aria-label="Our product"
                                                        title="Our product"
                                                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                    >
                                                        Product
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="/"
                                                        aria-label="Our product"
                                                        title="Our product"
                                                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                    >
                                                        Features
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="/"
                                                        aria-label="Product pricing"
                                                        title="Product pricing"
                                                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                    >
                                                        Pricing
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="/"
                                                        aria-label="About us"
                                                        title="About us"
                                                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                    >
                                                        About us
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="/"
                                                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                                        aria-label="Sign up"
                                                        title="Sign up"
                                                    >
                                                        Sign up
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};
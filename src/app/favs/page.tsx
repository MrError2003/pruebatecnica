"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Background from "../components/background";
import Favs from "../components/favoritos";


export default function Favoritos() {
    return (
        <>
                <div className="fixed inset-0 z-[-1]">
                    <Background />
                </div>

                <Navbar />


                <Favs />





                <Footer />    
        </>
    )
}
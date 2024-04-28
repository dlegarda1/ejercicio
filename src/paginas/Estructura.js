import React from 'react';
import Barra from "../Componentes/Barra";
import Pie from "../Componentes/Pie";
import { Outlet } from "react-router-dom";

function Estructura() {
    return (
        <div>
            <Barra />
            <main>
                <div>
                    <Outlet />
                </div>
            </main>
            <Pie />
        </div>
    )
}

export default Estructura;
import { useEffect, useState } from "react";

export function Navbar({darkMode, setDarkMode} : {darkMode: any, setDarkMode: React.Dispatch<React.SetStateAction<any>>}) {

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <div>

        </div>
    )
}
import React, { useEffect, useState } from 'react';

const Theme = () => {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        document.querySelector("html").setAttribute("data-theme", savedTheme);
        return savedTheme;
    });

    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.querySelector("html").setAttribute("data-theme", theme);
    }, [theme]);


    const handleTheme = (checked) => {
        setTheme(checked ? "dark" : "light");
    };
    return (
        <div>
            <input
                onChange={(e) => handleTheme(e.target.checked)}
                type="checkbox"
                defaultChecked={localStorage.getItem('theme') === "dark"}
                className="toggle" />
        </div>
    );
};

export default Theme;
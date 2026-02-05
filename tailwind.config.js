/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#708090", // Steel Gray
                    foreground: "#FFFFFF",
                },
                accent: {
                    DEFAULT: "#FF8C42", // Construction Orange
                    foreground: "#FFFFFF",
                },
                neutral: {
                    light: "#F5F5F5",
                    dark: "#2F4F4F",
                },
                success: "#10B981",
                error: "#EF4444",
            },
        },
    },
    plugins: [],
};

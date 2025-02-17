/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                background: "#0D0D0D",
                card: "#262626",
                border: "#8C8C8C",
                text: "#F2F2F2",
                primary: "#ABA0F2",
                secondary: "#2EF283",
                categories: {
                    work: "#9385F2",
                    personal: "#22C770",
                    health: "#F2CB05",
                    ideas: "#E67E22",
                    learning: "#F25C54",
                },
            },
        },
    },
    plugins: [daisyui],
};

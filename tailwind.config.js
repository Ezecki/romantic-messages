/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                blush: '#fdf2f8',
                peach: '#ffedd5',
                rose: '#e11d48',
                burgundy: '#4c0519',
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'Georgia', 'serif'],
                sans: ['"Inter"', 'system-ui', 'sans-serif'],
            },
            boxShadow: {
                'glass': '0 8px 32px 0 rgba(225, 29, 72, 0.1)',
            }
        },
    },
    plugins: [],
}

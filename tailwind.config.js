/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    red: '#dc2626',      // Bright red
                    crimson: '#991b1b',  // Dark crimson
                    scarlet: '#ef4444',  // Scarlet red
                },
            },
            backgroundImage: {
                'gradient-primary': 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)',
                'gradient-secondary': 'linear-gradient(135deg, #ef4444 0%, #7f1d1d 100%)',
                'gradient-tertiary': 'linear-gradient(135deg, #f87171 0%, #dc2626 100%)',
                'gradient-hero': 'linear-gradient(135deg, #dc2626 0%, #991b1b 50%, #7f1d1d 100%)',
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.6s ease',
                'blink': 'blink 0.7s step-end infinite',
                'rotate': 'rotate 20s linear infinite',
            },
            keyframes: {
                fadeInUp: {
                    'from': {
                        opacity: '0',
                        transform: 'translateY(30px)'
                    },
                    'to': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    },
                },
                blink: {
                    '50%': { borderColor: 'transparent' },
                },
                rotate: {
                    'from': { transform: 'rotate(0deg)' },
                    'to': { transform: 'rotate(360deg)' },
                },
            },
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    plugins: [],
}

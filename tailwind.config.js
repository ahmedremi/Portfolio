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
                    purple: '#a855f7',    // Vibrant purple
                    blue: '#3b82f6',      // Bright blue
                    cyan: '#06b6d4',      // Cyan
                },
            },
            backgroundImage: {
                'gradient-primary': 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
                'gradient-secondary': 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
                'gradient-tertiary': 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
                'gradient-hero': 'linear-gradient(135deg, #a855f7 0%, #3b82f6 50%, #06b6d4 100%)',
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

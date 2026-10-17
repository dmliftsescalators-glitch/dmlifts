/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deepNavy: "#06111C",
        darkNavy: "#0A1B2A",
        dmBlue: "#075A8F",
        brightBlue: "#0A78B8",
        orangeAccent: "#FF6A00",
        lightGray: "#C8D1D8",
        darkGray: "#101820",
        // Extended semantic palette
        navy: {
          deep: "#06111C",
          dark: "#0A1B2A",
          DEFAULT: "#06111C",
        },
        dm: {
          blue: "#075A8F",
          bright: "#0A78B8",
          DEFAULT: "#075A8F",
        },
        accent: {
          orange: "#FF6A00",
          DEFAULT: "#FF6A00",
          hover: "#E55F00",
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Syne"', '"Outfit"', '"Plus Jakarta Sans"', 'sans-serif'],
        stylish: ['"Syne"', '"Outfit"', 'sans-serif'],
        heading: ['"Syne"', 'sans-serif'],
        luxury: ['"Cinzel"', '"Cormorant Garamond"', 'serif'],
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"Space Grotesk"', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at 70% 30%, rgba(7, 90, 143, 0.22), transparent 60%)',
        'subtle-grid': 'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
      },
      boxShadow: {
        'orange-glow': '0 0 25px -3px rgba(255, 106, 0, 0.35)',
        'blue-glow': '0 0 30px -5px rgba(10, 120, 184, 0.3)',
        'card-navy': '0 10px 30px -10px rgba(6, 17, 28, 0.9), 0 0 1px 1px rgba(7, 90, 143, 0.2)',
      }
    },
  },
  plugins: [],
};

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
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        bgColor: "var(--background-color)",
        textColor: "var(--text-color)",
        tertiary: "var(--tertiary-color)",
        headGradient: "var(--head-gradient)",
        heroBg: "var(--hero-bg)",
      },
      container: {
        center: true,
        screens: {
          sm: "600px",
          md: "728px",
          lg: "984px",
          xl: "1000px",
          "2xl": "1000px",
        },
      },
      screens: {
        lg: "991px",
      },
      fontFamily: {
        pacifico: ['var(--font-pacifico)'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        scale: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
        'glow-border': {
          '0%, 100%': {
            'border-color': '#3DB0E1',
            'box-shadow': '0 0 10px #3DB0E1',
          },
          '50%': {
            'border-color': '#009FFD',
            'box-shadow': '0 0 10px #009FFD',
          },
        },
        'glow-border-line': {
          '0%': {
            'stroke-dashoffset': '100%',
          },
          '100%': {
            'stroke-dashoffset': '0%',
          },
        },
      },
      animation: {
        'glow-border': 'glow-border 3s linear infinite',
        'glow-border-line': 'glow-border-line 2s linear infinite',
        "spin-slow": "spin 6s linear infinite",
        "spin-extraslow": "spin 15s linear infinite",
        scale: "scale 0.7s ease-in-out",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        inner: "inset -2px -2px 5px 0px var(--primary-color)",
        innerHover: "inset 0px 2px 10px 0px var(--primary-color)",
      },
    },
  },
  plugins: [],
};

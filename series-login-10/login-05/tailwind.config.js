/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "custom-color" : "rgb(6,96,89)",
        'dirty-white': 'rgba(255, 255, 255, 0.5)',
      },
      backgroundImage: {
        'custom-image': "url(/Login5Background.png)",
      },
      backgroundSize: {
        'size-200': '200%',
        'size-150': '150%',
        'custom-size': '1800px 1000px',
      },
    },
  },
  plugins: [],
};

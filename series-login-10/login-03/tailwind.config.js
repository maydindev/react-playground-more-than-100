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
        custom: '#31edbe',  // Özel renk ekliyoruz
      },
      width: {
        '1/3-custom': '33.33%',  // %33.33 genişlik ekliyoruz
        'custom-width': '42%',   // %20.5 genişlik ekliyoruz
      }
    },
  },
  plugins: [],
};

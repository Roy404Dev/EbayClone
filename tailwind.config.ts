import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "carousel-image":
          "url('../public/images/frank-mckenna-OD9EOzfSOh0-unsplash.jpg')",
      },
      gridTemplateColumns: {
        'categoryLayout': '30% minmax(900px, 1fr)'
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontSize: {
      clamp: "clamp(1rem, 5vw, 1.75rem)",
    },
  },
  
  plugins: [],
};
export default config;

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
    },
  },
  plugins: [],
};
export default config;

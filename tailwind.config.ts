import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        parallax: `url("https://ecommerce-test-bucket-2024.s3.eu-central-1.amazonaws.com/hero-bcg.jpeg")`,
      },
      colors: {
        firstColor: "#eeeeee",
        secondColor: "#f09d51",
      },
      fontSize: {
        mainMobFont: "1.1rem",
        mainDeskFont: "1.225rem",
        mobileTitle: "1.6rem",
        deskTitle: "1.9rem",
        strongMobTitle: "2.2rem",
        strongDeskTitle: "2.40rem",
        veryStrongDeskTitle: "3.1rem",
        paragraphMob: "0.85rem",
        paragraphDesk: "1.125rem",
      },
      animations: {
        slideIn: {
          from: {
            transform: "translateX(-100px) translateY(-100px)",
          },
          to: {
            transform: "translateX(0) translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        xl: "1440px",
      },
      colors: {
        primary: "#0BAB7C",
        secondary1: "#C7F4C2",
        secondary2: "#D7D0FF",
        secondary3: "#FDDD8C",
        secondary4: "#92929D",
        natural1: "#F4F4F4",
        natural2: "#F1F1F5",
        natural3: "#FAFAFB",
        natural4: "#F5F5F8",
        natural5: "#E2E2EA",
        natural6: "#92929D",
        natural7: "#696974",
        natural8: "#44444F",
        dark1: "#13131A",
        dark2: "#1C1C24",
        dark3: "#21212B",
        white: "#FFFFFF",
        black: "#171725",
        jobcardIcon: "rgba(23, 23, 37, 0.06)",
      },
      boxShadow: {
        shadow1: "0px 6px 14px 0px rgba(23, 23, 37, 0.02)",
        company:
          "0px 23px 30px 0px rgba(226, 226, 234, 0.40), -3px -2px 24px 0px rgba(0, 0, 0, 0.02)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

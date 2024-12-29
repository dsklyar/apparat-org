import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/configurations/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,json}",
  ],
  theme: {
    extend: {
      cursor: {
        fancy:
          "url(data:image/bmp;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAQAgMAAABb+qapAAAACVBMVEUAAAAAAAD///+D3c/SAAAAAXRSTlMAQObYZgAAACdJREFUCNdjYAgNYEAnGFctYWBgW7kSQTgwsE0FEauAXCABUYJNLwCKthBFTO0fsgAAAABJRU5ErkJggg==), pointer",
      },
      screens: {
        resurgam: "12in",
      },
      animation: {
        "fade-in": "fade-in 1s ease-in forwards",
        "slide-in-view":
          "slide-in-view 0.85s cubic-bezier(0.65, 0, 0.35, 1) both",
        "slide-out-of-view":
          "slide-out-of-view 0.85s cubic-bezier(0.65, 0, 0.35, 1) both",
      },
      transitionProperty: {
        resurgam: "width, left, margin, max-width, min-width, height",
      },
      keyframes: {
        "fade-in": {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
        "slide-in-view": {
          "0%": {
            transform: "translateY(50px)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        "slide-out-of-view": {
          "0%": {
            transform: "translateY(0)",
          },
          "100%": {
            transform: "translateY(-50px)",
          },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "var(--accent)",
        "accent-green": "var(--accent-green)",
      },
      textShadow: {
        glow: "0 0 5px var(--accent-green)",
        none: "none",
      },
    },
  },
  plugins: [
    /*
     * Example taken from
     * https://www.hyperui.dev/blog/text-shadow-with-tailwindcss
     * https://tailwindcss.com/docs/plugins#adding-utilities
     */
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        // Point text-shadow prefix to value specified in extend
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        // Match key from theme: { extend: { textShadow <---
        { values: theme("textShadow") }
      );
    }),
  ],
} satisfies Config;

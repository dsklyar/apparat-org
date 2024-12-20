import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,json}",
  ],
  theme: {
    extend: {
      cursor: {
        fancy:
          "url(data:image/bmp;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAQAgMAAABb+qapAAAACVBMVEUAAAAAAAD///+D3c/SAAAAAXRSTlMAQObYZgAAACdJREFUCNdjYAgNYEAnGFctYWBgW7kSQTgwsE0FEauAXCABUYJNLwCKthBFTO0fsgAAAABJRU5ErkJggg==), pointer",
      },
      screens: {
        resurgam: "16in",
      },
      animation: {
        "fade-in": "fade-in 1s ease-in forwards",
        "slide-up": "slide-up 0.85s cubic-bezier(0.65, 0, 0.35, 1) both",
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
        "slide-up": {
          "0%": {
            transform: "translateY(100px)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      textShadow: {
        glow: "0 0 5px #2DD893",
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

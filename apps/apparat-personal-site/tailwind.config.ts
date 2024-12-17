import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      cursor: {
        'fancy': 'url(data:image/bmp;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAQAgMAAABb+qapAAAACVBMVEUAAAAAAAD///+D3c/SAAAAAXRSTlMAQObYZgAAACdJREFUCNdjYAgNYEAnGFctYWBgW7kSQTgwsE0FEauAXCABUYJNLwCKthBFTO0fsgAAAABJRU5ErkJggg==), pointer',
      },
      screens: {
        "resurgam": "16in"
      },
      animation: {
        'fade-in': "fade-in 1s ease-in forwards",
        'slide-up': "slide-up 0.85s cubic-bezier(0.65, 0, 0.35, 1) both",
      },
      keyframes: {
        'fade-in': {
          from: {
            opacity: '0'
          },
          to: {
            opacity: '1'
          }
        },
        'slide-up': {
          '0%': {
            transform: 'translateY(100px)'
          },
          '100%': {
            transform: 'translateY(0)'
          }
        }
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;

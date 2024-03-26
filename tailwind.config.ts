import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    
      "animation": {
        shimmer: "shimmer 2s linear infinite",
        scroll:
        "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      "keyframes": {
        shimmer: {
          from: {
            "backgroundPosition": "0 0"
          },
          to: {
            "backgroundPosition": "-200% 0"
          }
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    
    screens: {
      sm: '300px',
      md: '1100px', //868 -- //1000
      lg: '1406px',
      xl: '1750px',
    },
    extend: {
      backgroundImage: {
        'hero': "url('/white1.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'comp': "url('/assets/comp.jpg')",
        'seo': "url('/assets/seo.jpg')",
        'design': "url('/assets/design.jpg')",
        'cms': "url('/assets/cms.png')",
        'application': "url('/assets/application.jpg')",
        'hosting': "url('/assets/hosting.jpg')",
        'maintenance': "url('/assets/maintenance.jpg')",
        'digital': "url('/assets/digital.jpg')",


          
      },
      colors: {
        'custom-gray': '#21262D',
        'gradient': 'linear-gradient(to right, #1e40af, #2563eb, #1e40af) 1'

      },
      borderWidth: {
        '3': '3px',
      },
      borderImage: {
        'gradient': 'linear-gradient(to right, #1e40af, #2563eb, #1e40af) 1',
      },
    },
  },
  plugins: [ addVariablesForColors,],
};
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}

export default config;

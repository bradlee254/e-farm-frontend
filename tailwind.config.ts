import type { Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      colors: {
        brand: "#6AA84F",
        "brand-dark": "#3D6B2A",
        background: "#FFFFFF",
        foreground: "#222222",
        "ui-fill": "#F2F2F2",
        caption: "#888888",
      },
    },
  },
} satisfies Config;

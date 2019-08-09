const theme = {
  initialColorMode: "light",
  colors: {
    modes: {
      light: {
        text: "#000",
        background: "#fff",
        primary: "hsl(240, 100%, 57%)",
        secondary: "hsl(260, 100%, 57%)",
        accent: "hsl(280, 100%, 57%)",
        muted: "#f9f9fc",
        gray: "#555"
      },
      black: {
        text: "#fff",
        background: "#000",
        primary: "#0ff",
        secondary: "#0fc",
        accent: "#f0f",
        muted: "#111",
        gray: "#888"
      },
      dark: {
        text: "#fff",
        background: "hsl(180, 5%, 15%)",
        primary: "hsl(180, 100%, 57%)",
        secondary: "hsl(50, 100%, 57%)",
        accent: "hsl(310, 100%, 57%)",
        muted: "hsl(180, 5%, 5%)",
        gray: "hsl(180, 0%, 70%)"
      },
      deep: {
        text: "#fff",
        background: "hsl(230,25%,18%)",
        primary: "hsl(260, 100%, 80%)",
        secondary: "hsl(290, 100%, 80%)",
        highlight: "hsl(260, 20%, 40%)",
        accent: "hsl(290, 100%, 80%)",
        muted: "hsla(230, 20%, 0%, 20%)",
        gray: "hsl(210, 50%, 60%)"
      },
      hack: {
        text: "hsl(120, 100%, 75%)",
        background: "hsl(120, 20%, 10%)",
        primary: "hsl(120, 100%, 40%)",
        secondary: "hsl(120, 50%, 40%)",
        accent: "hsl(120, 100%, 90%)",
        muted: "hsl(120, 20%, 7%)",
        gray: "hsl(120, 20%, 40%)"
      },
      pink: {
        text: "hsl(350, 80%, 10%)",
        background: "hsl(350, 100%, 90%)",
        primary: "hsl(350, 100%, 50%)",
        secondary: "hsl(280, 100%, 50%)",
        accent: "hsl(280, 100%, 20%)",
        muted: "hsl(350, 100%, 88%)",
        gray: "hsl(350, 40%, 50%)"
      }
    }
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fontWeights: {
    body: 400,
    heading: 800,
    bold: 700
  },
  fontSizes: [14, 16, 18, 20, 24, 32, 48, 64, 72, 96],
  fonts: {
    sans: "system-ui, sans-serif",
    mono: "Menlo, monospace"
  },
  shadows: {
    small: "0 0 4px rgba(0, 0, 0, .125)",
    large: "0 0 24px rgba(0, 0, 0, .125)"
  }
};

export default theme;

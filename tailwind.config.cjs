/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--primary) / <alpha-value>)',
        secondary: 'rgb(var(--secondary) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        content: 'rgb(var(--content) / <alpha-value>)',
        line:'rgb(var(--line) / <alpha-value>)'
      },

      backgroundColor: {
        primary: 'rgb(var(--primary) / <alpha-value>)',
        secondary: 'rgb(var(--secondary) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        content: 'rgb(var(--content) / <alpha-value>)',
        line:'rgb(var(--line) / <alpha-value>)'
      },

      fill: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        content: 'var(--content)',
        line:'var(--line)'
      },

      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fit, minmax(300px, 1fr))',
      }
    },
  },
  plugins: [],
}


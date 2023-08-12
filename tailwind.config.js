/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('https://media.istockphoto.com/id/1570804712/photo/chicken-fried-rice-and-spoon-on-wooden-background-top-view.jpg?s=612x612&w=0&k=20&c=70DQNJu63imB4YtQcpNhwatHxUKKNq909T3D3ipi-14=')"
      },
      colors: {
        'first': '#210535',
        'second': '#440C4D',
        'third': '#7B337D',
        'fourth': '#C973B4',
        'fifth': '#F5D5E0',
        'bg-black-opacity': 'rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
}


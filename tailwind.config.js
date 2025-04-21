/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // For App Router
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Include if you might have pages/ too
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // If you have a components folder
    // Add other paths where you use Tailwind classes
  ],
  theme: {
    extend: {
       // Add custom theme extensions here if needed, like the text shadows from your code
       boxShadow: { 
         'text-lg': '0 2px 4px rgba(0, 0, 0, 0.5)',
         'text-md': '0 1px 3px rgba(0, 0, 0, 0.5)',
       },
       colors: { // Ensure your custom colors like amber are usable
         amber: { // Example using Tailwind's default amber palette
           50: '#fffbeb',
           100: '#fef3c7',
           200: '#fde68a',
           300: '#fcd34d',
           400: '#fbbf24',
           500: '#f59e0b', // Your primary amber-500
           600: '#d97706', // Your primary amber-600
           700: '#b45309',
           800: '#92400e',
           900: '#78350f',
           950: '#451a03',
         },
       }
    },
  },
  plugins: [],
}

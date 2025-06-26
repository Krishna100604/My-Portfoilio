/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode with 'dark' class
  theme: {
    extend: {
      colors: {
        cyan: {
          300: '#22D3EE', // Vibrant cyan for gradients and hover effects
        },
        purple: {
          200: '#C4B5FD', // Light purple for accents (e.g., company names)
          400: '#9333EA', // Primary purple for gradients
          600: '#7C3AED', // Darker purple for light mode hovers
        },
        neutral: {
          100: '#F5F5F5', // Light text/background for dark mode
          200: '#E5E7EB', // Secondary text for dark mode
          300: '#D1D5DB', // Primary text for dark mode
          400: '#9CA3AF', // Subtle text for dark mode
          800: '#1F2937', // Dark card backgrounds for light mode
          900: '#111827', // Dark backgrounds for cards
          950: '#030712', // Primary background for dark mode
        },
      },
      backdropBlur: {
        lg: '16px', // For glassmorphism effects in cards
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Match index.css font
      },
    },
  },
  plugins: [],
}
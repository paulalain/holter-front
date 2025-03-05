module.exports = {
    plugins: [
      require('@tailwindcss/postcss'), // Remplacer tailwindcss par @tailwindcss/postcss
      require('autoprefixer'),          // Assure-toi qu'autoprefixer est aussi configuré
    ],
  };
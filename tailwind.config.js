/** @type {import(‘tailwindcss’).Config} */
module.exports = {

content: [
  './src/**/*.{html,js}',
  "./dist/*.{html,js}",
],

theme: {
  extend: {
    backgroundSize: {
      'size-200': '200% 200%',
    },
    backgroundPosition: {
      'pos-0': '0% 0%',
      'pos-100': '100% 100%',
    },
   
},
plugins: [],
} 
}

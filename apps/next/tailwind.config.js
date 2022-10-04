const { theme } = require( 'app/design/tailwind/theme' )

/** @type {import('tailwindcss').Config} */
module.exports = {
  content  : [
    './pages/**/*.{js,jsx,ts,tsx}',
    '../../packages/**/*.{js,jsx,ts,tsx}',
  ],
  plugins  : [
    require( 'nativewind/tailwind/css' ),
    require( "daisyui" ),
  ],
  important: 'html',
  theme    : {
    ...theme,
    screens: {
      'xxs' : '320px',
      'xs' : '480px',
      ...theme.screens,
    },
  }
}

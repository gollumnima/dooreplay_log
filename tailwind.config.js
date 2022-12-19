/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
    extend: {},
    plugins: [require("daisyui")],
    daisyui: {
      styled: true,
      base: true,
      utils: true,
      logs: true,
      rtl: false,
      themes: [
        {
          'togong_theme': {                          /* your theme name */
             'primary': '#1C0398',           /* Primary color */
             'primary-focus': '#2306B3',     /* Primary color - focused */
             'primary-content': '#f7ff5f',   /* Foreground content color to use on primary color */
  
             'secondary': '#0F172A',         /* Secondary color */
             'secondary-focus': '#1C2B4E',   /* Secondary color - focused */
             'secondary-content': '#ff9cf5', /* Foreground content color to use on secondary color */
  
             'accent': '#3B6E59',            /* Accent color */
             'accent-focus': '#5DA98A',      /* Accent color - focused */
             'accent-content': '#ffffff',    /* Foreground content color to use on accent color */
  
             'neutral': '#3d4451',           /* Neutral color */
             'neutral-focus': '#2a2e37',     /* Neutral color - focused */
             'neutral-content': '#ffffff',   /* Foreground content color to use on neutral color */
  
             'base-100': '#29313C',          /* Base color of page, used for blank backgrounds */
             'base-200': '#f9fafb',          /* Base color, a little darker */
             'base-300': '#1F242C',          /* Base color, even more darker */
             'base-content': '#A4ADC4',      /* Foreground content color to use on base color */
  
             'info': '#3045BF',              /* Info */
             'info-content': '#ffffff',              /* Info */
             'success': '#479F48',           /* Success */
             'warning': '#ff9900',           /* Warning */
             'error': '#E86431',             /* Error */
          },
        },
      ],
    }, 
}

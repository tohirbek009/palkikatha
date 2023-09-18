/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#241562',
        primaryLight: '#6D6397',
        secondary: '#6952C7',
        light: '#EBEAF1',
        lightest: '#F9F8FF',
        danger: '#E185CD',
        success: '#3CC78C',
        successLight: '#EBF7F1',
        info: '#7BAAF0',
        infoLight: '#ECF7FF',
        gray: '#6B687B',
        grayLight: '#BDB9CD',
        grayLightest: '#F3F3F3',
        yellow: '#F3A32A',
        yellowLight: '#FFFAEA',
        orange: '#F28151',
        orangeLight: '#FBF1EF',
        // Card Background Light Color:
        cardBgLight: '#F5F4F9',
        // Footer Background color:
        footerBgDark: '#1B1044'
      },
      spacing: {
        4.5: '1.125rem',
        7.5: '1.875rem',
        13: '3.25rem',
        18: '4.5rem',
        22: '5.625rem',
        26: '6.75rem'
      },
      borderRadius: {
        '2.5xl': '1.25rem'
      }
    },
    screens: {
      sm: '480px',
      md: '820px',
      lg: '976px',
      xl: '1280px',
      '2xl': '1536px'
    },
    fontFamily: {
      sans: ['Mulish', 'sans-serif'],
      taviraj: ['Taviraj']
    }
  },
  plugins: [],
}


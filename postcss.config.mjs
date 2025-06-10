const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',         
    './components/**/*.{js,ts,jsx,tsx}' 
  ],
  theme:{
    extend:{
      fontFamily:{
        sans:['var(--font-noto-sans-jp)', 'sans-serif'],
        latin: ['var(--fontinter)', 'sans-serif']
      },
      colors:{
        grayCustom:'#3A3A3A',
      },
    },
  },

  plugins: ["@tailwindcss/postcss"],
};

export default config;

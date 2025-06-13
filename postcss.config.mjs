const config = {

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

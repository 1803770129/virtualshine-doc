/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',],
  theme: {
    extend: {
      colors: {
        tab: {
          'active': '#0F1419',
          'normal': '#85878D'
        },
        grey: {
          58: '#585B5F',
          85: '#85878D',
          CC: '#CCCCCC',
          EF: '#EFEFF0',
          AA: '#AAA',
          AAA: '#AAABAF',
          FAF: '#FAFBFC',
          DCD: '#DCDDE0',
          F0F: '#F0F2F5'
        },
        red: {
          DA: '#DA0824',
          F0: '#F0493D'
        },
        green: {
          23: '#23BE46'
        },
        line: {
          'grey': '#EFEFF0'
        },
        skin: {
          900: '#1A82D2',
          'blue': '#267EF0',
          'f0f': '#f0f5fd',
          '005': '#0052D5',
          'black': '#0F1419',
          'bg': '#F7F8FA'
        },
      },
      zIndex: {
        '-1': -1,
        '0': 0,
        '1': 1,
        '2': 2,
        '100': 100,
        '999': 999,
        '1000': 1000,
        '5000': 5000,
        '9999': 9999
      },
      spacing: {
        0: '0',
        1: '1px',
        ...Array(100)
          // .concat([100,])
          .fill('')
          .reduce((previousValue, currentValue, currentIndex) => {
            const key = (currentIndex + 2) + '';
            previousValue[key] = key + 'px';
            return previousValue;
          }, {}),
        104: '104px',
        120: '120px',
        140: '140px',
        150: '150px',
        190: '190px',
        200: '200px',
        214: '214px',
        225: '225px',
        250: '250px',
        300: '300px',
        320: '320px',
        350: '350px',
        middle: '50%',
        full: '100%',
        auto: 'auto',
      },
    },
    fontSize: (theme) => theme('spacing'),
    borderRadius: (theme) => theme('spacing'),
    borderWidth: (theme) => theme('spacing'),
    translate: (theme) => theme('spacing'),
    margin: formatNegativeNumbers,
    inset: formatNegativeNumbers,
    width: (theme) => ({
      ...theme('spacing'),
      screen: '100vw',
    }),
    height: (theme) => ({
      ...theme('spacing'),
      screen: '100vh',
    }),
    maxWidth: (theme) => theme('width'),
    maxHeight: (theme) => theme('height'),
    minWidth: (theme) => theme('width'),
    minHeight: (theme) => theme('height'),
    plugins: [],
  },
  plugins: []
}
function formatNegativeNumbers(theme) {
  let obj = {};
  for (const key in theme('spacing')) {
    const v = theme('spacing')[key];
    if (Number(key)) {
      obj['-' + key] = '-' + v;
    }
  }
  return { ...theme('spacing'), ...obj };
}
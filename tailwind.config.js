module.exports = {
    theme: {
        container: {
            center: true,
            padding: '2rem',
        },
        extend: {
            colors: {
                'josa-blue': {
                    default: '#3897c0',
                    'veryDark': '#163e4e',
                    'oxfordBlue': '#3A4E5D',
                },
                'josa-green': '#5cb19c',
                'josa-black': '#2e3436',
                'josa-grey': {
                    default: 'rgba(223, 220, 217, 0.1)',
                    '500': '#aea79f'
                }
            },
            fontFamily: {
                'theMixArab': 'TheMixArab',
                'theMixArabBold': 'TheMixArabBold',
                'frutigerLTArabicLight': 'FrutigerLTArabic-45Light',
                'frutigerLTArabicRoman': 'FrutigerLTArabic-55Roman',
                'frutigerLTArabicBold': 'FrutigerLTArabic-65Bold',
            },

            fontSize: {
                '175': '1.75rem'
            },
            lineHeight: {
                '11': '3.5rem'
            },
            spacing: {
                '11': '2.75rem',
                '35': '8.75rem'
            },
            maxHeight: {
                '0': '0',
                '16': '160px'
            }
        }
    },
    variants: {},
    plugins: [],
}
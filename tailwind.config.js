/** @type {import('tailwindcss').Config} */
module.exports = {
    tailwindFunctions: ['tw'],
    content: [
        "./src/**/*.html",
        "./node_modules/flowbite/**/*.js"
    ],
    theme: {
        screens: {
            '3xsm': '200px',
            '2xsm': '550px',
            'sm': '600px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        },
        extend: {
            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                    sm: '1.5rem',
                    md: '2rem',
                    lg: '4rem',
                    xl: '5rem',
                    '2xl': '6rem',
                },


            },
            colors: {
                blue_honolulu: '#0077B6',
                blue_light_cvan: '#CAF0F8'
            },
            spacing: {
                '3.7': '0.9375em',
            },
            gap: {
                '3.7': '0.9375em',
            },
        },
        borderColor: theme => ({
            'blue_honolulu': '#0077B6',
        })
    },
    plugins: [
        require('postcss-import'),
        require('prettier-plugin-tailwindcss'),
        require('flowbite/plugin'),
        require('autoprefixer'),
    ],
}


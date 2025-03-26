module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'custom-blue': '#007bff',
                'light-gray': '#f8f9fa',
                'icon-gray': '#6c757d'
            },
            boxShadow: {
                'subtle': '0 2px 4px rgba(0,0,0,0.1)',
            },
            borderRadius: {
                'custom': '12px'
            }
        },
    },
    plugins: [],
}
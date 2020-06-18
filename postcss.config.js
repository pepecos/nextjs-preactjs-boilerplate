// @see https://nextjs.org/docs/advanced-features/customizing-postcss-config
// @see https://tailwindcss.com/docs/controlling-file-size/
module.exports = {
    plugins: {
        'tailwindcss': {},
        'postcss-flexbugs-fixes': {},
        'postcss-preset-env': {
            autoprefixer: {
                flexbox: 'no-2009',
            },
            stage: 3,
            features: {
                'custom-properties': false,
            },
        },
        ...process.env.NODE_ENV === 'production'
            ? {
                '@fullhuman/postcss-purgecss':
                {
                    content: [
                        './src/**/*.tsx',
                    ],
                    defaultExtractor: content => {
                        const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
                        const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []
                        return broadMatches.concat(innerMatches)
                    }
                }
            }
            : {}
    },
}
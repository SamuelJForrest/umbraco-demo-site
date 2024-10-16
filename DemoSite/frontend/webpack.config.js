const path = require('path');

module.exports = {
    entry: {
        main: './ts/main.ts',
        gridStack: './ts/partials/grid-stack.ts',
        reactPage: './ts/partials/react-page.tsx'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../wwwroot/js')
    },
    module: {
        rules: [
            {
                // Rule for compiling TypeScript
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.tsx?$/, // Match TypeScript files
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.jsx?$/, // Match JavaScript/JSX files
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                // Rule for handling SCSS
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.tsx', '.jsx']
    },
    mode: 'development',
    stats: {
        warnings: false,
        errorDetails: true,
    },
    cache: false,
}
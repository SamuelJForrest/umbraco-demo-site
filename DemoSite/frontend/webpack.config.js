const path = require('path');

module.exports = {
    entry: {
        main: './ts/main.ts',
        gridStack: './ts/partials/grid-stack.ts',
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
                // Rule for handling SCSS
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    mode: 'development',
    stats: {
        warnings: false
    }
}
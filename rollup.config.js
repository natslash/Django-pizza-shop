// import uglify from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import string from 'rollup-plugin-string';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

export default {
    entry: 'static/index.js',
    dest: 'static/dist/app.js',
    format: 'umd',
    moduleName: 'PizzaShop',
    plugins: [
        serve({
            open: true,
            contentBase: ['.', 'static/templates/pizzashop'],
            port: 8000
        }),
        livereload({
            watch: 'static/dist',
            delay: 4000
        }),
        string({
            include: '**/*.html'
        }),
        postcss({
            extensions: ['.css'],
        }),
        resolve({
            main: true
        }),
        commonjs({
            ignoreGlobal: false
        }),
        babel({
            exclude: [
                'node_modules/**',
                '**/*.html'
            ]
        })
        // uglify()
    ],
    sourceMap: true,
    sourceMapFile: 'static/dist/app.js.map'
};
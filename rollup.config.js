import uglify from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import html from 'rollup-plugin-html';
import postcss from 'rollup-plugin-postcss';

export default {
    entry: 'static/index.js',
    dest: 'static/dist/app.js',
    format: 'umd',
    moduleName: 'PizzaShop',
    plugins: [
        html({
            include: 'static/templates/*.hmtl'
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
            ]
        }),
        // uglify()
    ],
    sourceMap: true,
    sourceMapFile: 'static/dist/app.js.map'
};
const { build } = require('esbuild')
const { Generator } = require('npm-dts')


new Generator({
  entry: 'src/index.ts',
  output: 'dist/index.d.ts'
}).generate();


const shared = {
    entryPoints: ['src/index.ts'],
    bundle: true,
    minify: true
};


build({
    ...shared,
    outfile: 'dist/index.js',
    globalName: 'cromatica'
});


build({
    ...shared,
    outfile: 'dist/index.esm.js',
    format: 'esm'
});
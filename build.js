import { build } from 'esbuild';


const shared = {
    entryPoints: ['src/index.ts'],
    bundle: true,
    minify: true,
    watch: {
        onRebuild(error, result) {
            if (error) console.error('watch build failed:', error)
            else console.log('watch build succeeded:', result)
        }
    }
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
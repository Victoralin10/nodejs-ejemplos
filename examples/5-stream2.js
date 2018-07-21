
const gzip = require('zlib').createGzip();
const fs = require('fs');

const inp = fs.createReadStream('text.txt');
const out = fs.createWriteStream('text.txt.gz');

inp.pipe(gzip).pipe(out);
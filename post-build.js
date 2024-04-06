const fs = require('fs-extra'); 
fs.move('dist/biodiversity-footprint/browser', 'dist/biodiversity-footprint', (err) => { if(err) { return console.error(err); } });

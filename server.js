// server.js

const express = require('express');
const app = express();

// app.use(express.static(__dirname + '/dist/biodiverstity-footprint'));
app.use(express.static('./dist/biodiversity-footprint/browser'));

app.get('/*', (req, res) => {
  // res.sendFile(path.join(__dirname + '/dist/biodiverstity-footprint/index.html'));
  res.sendFile('index.html', { root: 'dist/biodiverstity-footprint/browser' });
});

app.listen(process.env.PORT || 8080);
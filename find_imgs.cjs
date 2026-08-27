const https = require('https');
https.get('https://benjamincreative.me/', (res) => {
  let data = '';
  res.on('data', d => data += d);
  res.on('end', () => {
    const imgRegex = /<img[^>]+>/g;
    let match;
    let imgs = [];
    while(match = imgRegex.exec(data)) {
      imgs.push(match[0].substring(0, 120));
    }
    console.log(imgs.join('\n'));
  });
});

const https = require('https');

https.get('https://sandorkardos.com/builds-prototypes/sitejet-to-wordpress-how-i-migrated-mindhaven-uk-and-nearly-destroyed-it/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const regex = /https:\/\/sandorkardos\.com\/wp-content\/uploads\/[^\s"'<>]+\.(?:webp|jpg|png)/gi;
    const matches = data.match(regex);
    console.log('Unique post images:');
    console.log(Array.from(new Set(matches || [])));
  });
}).on('error', err => console.error(err));

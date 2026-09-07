const https = require('https');
const http = require('http');

function fetchUrl(url) {
  return new Promise((resolve) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, data, headers: res.headers }));
    }).on('error', err => resolve({ error: err.message }));
  });
}

async function checkSites() {
  const sites = [
    'https://bereljufot.hu',
    'https://closecare.co.uk',
    'https://mindhaven.uk',
    'https://sandorkardos.com/builds-prototypes/sitejet-to-wordpress-how-i-migrated-mindhaven-uk-and-nearly-destroyed-it/'
  ];

  for (const url of sites) {
    const res = await fetchUrl(url);
    console.log(`URL: ${url} -> Status: ${res.status || res.error}`);
    if (res.data && url.includes('sandorkardos.com')) {
      const imgs = res.data.match(/https?:\/\/[^\s"'<>]+\.(?:jpg|png|webp)/gi);
      console.log('Images in blog post:', imgs ? Array.from(new Set(imgs)) : 'none');
    }
  }
}

checkSites();

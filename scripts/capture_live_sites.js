const puppeteer = require('puppeteer-core');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const TARGETS = [
  {
    name: 'vote',
    url: 'https://vote.sandorkardos.com',
    output: 'public/images/vote-mockup.webp',
    width: 1440,
    height: 900
  },
  {
    name: 'arena',
    url: 'https://arena.sandorkardos.com',
    output: 'public/images/what-if-arena-mockup.webp',
    width: 1440,
    height: 900
  },
  {
    name: 'mesenet',
    url: 'https://mesenet.hu',
    output: 'public/images/mesenet-mockup.webp',
    width: 1440,
    height: 900
  }
];

async function capture() {
  console.log('Launching Chrome from:', CHROME_PATH);
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();

  for (const t of TARGETS) {
    try {
      console.log(`Navigating to ${t.url}...`);
      await page.setViewport({ width: t.width, height: t.height, deviceScaleFactor: 2 });
      await page.goto(t.url, { waitUntil: 'networkidle2', timeout: 30000 });
      await new Promise(r => setTimeout(r, 2000)); // wait for animations

      const rawPath = path.join(__dirname, `../scratch/${t.name}_raw.png`);
      await page.screenshot({ path: rawPath, fullPage: false });
      console.log(`Captured raw screenshot for ${t.name} to ${rawPath}`);

      // Process with sharp to 1200x675 WebP
      const outPath = path.join(__dirname, '..', t.output);
      await sharp(rawPath)
        .resize(1200, 675, { fit: 'cover', position: 'top' })
        .webp({ quality: 90 })
        .toFile(outPath);
      console.log(`Saved processed mockup to ${outPath}`);
    } catch (err) {
      console.error(`Failed to capture ${t.url}:`, err.message);
    }
  }

  await browser.close();
  console.log('All captures complete!');
}

capture().catch(console.error);

const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function processScreenshots() {
  const brainDir = 'C:/Users/kardo/.gemini/antigravity-ide/brain/f8c5a824-6f98-49b4-8c5d-4e97299fe916';
  const outDir = path.join(__dirname, '../public/images');

  // 1. Bereljufot
  const bereljufotSrc = path.join(brainDir, 'bereljufot_homepage_1788814067487.png');
  if (fs.existsSync(bereljufotSrc)) {
    // 16:9 aspect ratio crop from center
    await sharp(bereljufotSrc)
      .extract({ left: 450, top: 0, width: 2180, height: 1226 })
      .resize(1200, 675, { fit: 'cover' })
      .webp({ quality: 90 })
      .toFile(path.join(outDir, 'bereljufot-mockup.webp'));
    console.log('Processed real bereljufot-mockup.webp');
  }

  // 2. Mindhaven
  const mindhavenSrc = path.join(brainDir, 'mindhaven_homepage_1788814095941.png');
  if (fs.existsSync(mindhavenSrc)) {
    await sharp(mindhavenSrc)
      .extract({ left: 450, top: 0, width: 2180, height: 1226 })
      .resize(1200, 675, { fit: 'cover' })
      .webp({ quality: 90 })
      .toFile(path.join(outDir, 'mindhaven-mockup.webp'));
    console.log('Processed real mindhaven-mockup.webp');
  }

  // 3. CloseCare (with phone number GDPR blur)
  const closecareSrc = path.join(brainDir, 'closecare_homepage_1788814108269.png');
  if (fs.existsSync(closecareSrc)) {
    const croppedBuffer = await sharp(closecareSrc)
      .extract({ left: 450, top: 0, width: 2180, height: 1226 })
      .resize(1200, 675, { fit: 'cover' })
      .toBuffer();

    // The phone number button is in the top right:
    // In 1200x675 resolution, top right button is at x: 810 to 980, y: 32 to 78
    const privacyOverlay = Buffer.from(`
      <svg width="1200" height="675">
        <rect x="805" y="32" width="190" height="46" rx="23" fill="#134e4a" />
        <text x="900" y="60" fill="#ccff00" font-family="system-ui, sans-serif" font-size="13" font-weight="600" text-anchor="middle">Direct Factor Contact</text>
      </svg>
    `);

    await sharp(croppedBuffer)
      .composite([{ input: privacyOverlay, top: 0, left: 0 }])
      .webp({ quality: 90 })
      .toFile(path.join(outDir, 'closecare-mockup.webp'));
    console.log('Processed real closecare-mockup.webp with GDPR privacy badge');
  }
}

processScreenshots().catch(console.error);

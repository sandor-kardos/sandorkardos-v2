const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function processCloseCare() {
  const src = 'C:/Users/kardo/.gemini/antigravity-ide/brain/f8c5a824-6f98-49b4-8c5d-4e97299fe916/closecare_service_design_1788812055074.jpg';
  const dest = 'public/images/closecare-mockup.webp';

  // Region 1: Address header "21 (2F1) MARCHMONT ROAD..."
  // x: 560 to 820, y: 165 to 225
  const blurAddress = await sharp(src)
    .extract({ left: 560, top: 165, width: 260, height: 65 })
    .blur(18)
    .toBuffer();

  // Region 2: Tenant name "Alex Robertson..."
  // x: 575 to 805, y: 500 to 540
  const blurTenant = await sharp(src)
    .extract({ left: 575, top: 500, width: 230, height: 40 })
    .blur(18)
    .toBuffer();

  // GDPR compliance overlay badge
  const gdprBadge = Buffer.from(`
    <svg width="250" height="24" xmlns="http://www.w3.org/2000/svg">
      <rect width="250" height="24" rx="4" fill="rgba(15, 23, 42, 0.85)"/>
      <text x="125" y="16" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#ffffff" text-anchor="middle" letter-spacing="0.5">
        ADDRESS REDACTED (GDPR PRIVACY)
      </text>
    </svg>
  `);

  await sharp(src)
    .composite([
      { input: blurAddress, left: 560, top: 165 },
      { input: gdprBadge, left: 565, top: 185 },
      { input: blurTenant, left: 575, top: 500 }
    ])
    .webp({ quality: 90 })
    .toFile(dest);

  console.log('Saved GDPR-compliant CloseCare image to', dest);
}

async function processMindhaven() {
  const src = 'C:/Users/kardo/.gemini/antigravity-ide/brain/f8c5a824-6f98-49b4-8c5d-4e97299fe916/mindhaven_trust_architecture_1788812086233.jpg';
  const dest = 'public/images/mindhaven-mockup.webp';

  // Contact info box at bottom right: left 865, top 605, width 375, height 120
  const blurContact = await sharp(src)
    .extract({ left: 865, top: 605, width: 375, height: 120 })
    .blur(20)
    .toBuffer();

  const gdprBadge = Buffer.from(`
    <svg width="320" height="26" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="26" rx="4" fill="rgba(15, 23, 42, 0.85)"/>
      <text x="160" y="17" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#ffffff" text-anchor="middle" letter-spacing="0.5">
        PRACTICE DETAILS REDACTED (GDPR PRIVACY)
      </text>
    </svg>
  `);

  await sharp(src)
    .composite([
      { input: blurContact, left: 865, top: 605 },
      { input: gdprBadge, left: 890, top: 650 }
    ])
    .webp({ quality: 90 })
    .toFile(dest);

  console.log('Saved GDPR-compliant Mindhaven image to', dest);
}

async function convertOtherImages() {
  const items = [
    {
      src: 'C:/Users/kardo/.gemini/antigravity-ide/brain/f8c5a824-6f98-49b4-8c5d-4e97299fe916/bereljufot_marketplace_ux_1788812071890.jpg',
      dest: 'public/images/bereljufot-mockup.webp'
    },
    {
      src: 'C:/Users/kardo/.gemini/antigravity-ide/brain/f8c5a824-6f98-49b4-8c5d-4e97299fe916/scottish_election_matcher_ui_1788812099902.jpg',
      dest: 'public/images/vote-mockup.webp'
    },
    {
      src: 'C:/Users/kardo/.gemini/antigravity-ide/brain/f8c5a824-6f98-49b4-8c5d-4e97299fe916/maskoca_service_automation_1788812113399.jpg',
      dest: 'public/images/maskoca-mockup.webp'
    },
    {
      src: 'C:/Users/kardo/.gemini/antigravity-ide/brain/f8c5a824-6f98-49b4-8c5d-4e97299fe916/mesenet_storytelling_pwa_1788812165233.jpg',
      dest: 'public/images/mesenet-mockup.webp'
    },
    {
      src: 'C:/Users/kardo/.gemini/antigravity-ide/brain/f8c5a824-6f98-49b4-8c5d-4e97299fe916/service_blueprint_framework_1788812183744.jpg',
      dest: 'public/images/service-blueprint-framework.webp'
    }
  ];

  for (const item of items) {
    await sharp(item.src).webp({ quality: 90 }).toFile(item.dest);
    console.log('Converted and saved', item.dest);
  }

  if (fs.existsSync('public/images/what-if-arena.jpg')) {
    await sharp('public/images/what-if-arena.jpg').webp({ quality: 90 }).toFile('public/images/what-if-arena-mockup.webp');
    console.log('Converted what-if-arena-mockup.webp');
  }
}

async function run() {
  await processCloseCare();
  await processMindhaven();
  await convertOtherImages();
}

run().catch(console.error);

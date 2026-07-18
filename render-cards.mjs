import { chromium } from 'playwright-core';
import fs from 'fs';
const exe = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';
const url = 'file://' + process.cwd() + '/share-cards.html';
fs.mkdirSync('share', { recursive: true });
const browser = await chromium.launch({ executablePath: exe });
const page = await browser.newPage({ deviceScaleFactor: 2 });
await page.goto(url, { waitUntil: 'networkidle' });
await page.waitForTimeout(300);
const cards = [
  ['sq', 'prihranek-1080x1080-instagram-post'],
  ['st', 'prihranek-1080x1920-story'],
  ['ls', 'prihranek-1200x630-facebook-og'],
  ['wd', 'prihranek-1600x900-twitter-wide'],
];
for (const [id, name] of cards) {
  const el = page.locator('#' + id);
  await el.screenshot({ path: `share/${name}.png` });
  const box = await el.boundingBox();
  console.log(name, '->', Math.round(box.width) + 'x' + Math.round(box.height), '(x2 =', Math.round(box.width*2)+'x'+Math.round(box.height*2)+')');
}
await browser.close();
console.log('done');

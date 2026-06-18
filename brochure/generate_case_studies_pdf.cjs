const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const htmlPath = path.resolve('c:/Users/sayed/Downloads/Kimi_Agent_Clone HBJ Digital Lab/app/brochure/case_studies.html');
  const pdfPath  = path.resolve('c:/Users/sayed/Downloads/Kimi_Agent_Clone HBJ Digital Lab/app/brochure/case_studies_final.pdf');

  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-gpu',
      '--allow-file-access-from-files',
      '--disable-web-security',
    ],
  });

  const page = await browser.newPage();

  // Set viewport to A4 Landscape width
  await page.setViewport({ width: 1123, height: 794, deviceScaleFactor: 1 });

  const fileUrl = 'file:///' + htmlPath.replace(/\\/g, '/');
  console.log('Navigating to:', fileUrl);

  await page.goto(fileUrl, {
    waitUntil: 'networkidle0',
    timeout: 30000,
  });

  // Wait an extra 3s for fonts/layouts to fully load
  await new Promise(r => setTimeout(r, 3000));

  console.log('Generating A4 PDF...');
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    landscape: true,
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    preferCSSPageSize: true,
  });

  await browser.close();
  console.log('SUCCESS! PDF saved to:', pdfPath);
})().catch(err => {
  console.error('ERROR:', err.message);
  process.exit(1);
});

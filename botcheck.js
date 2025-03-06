import puppeteer from "puppeteer";

async function main() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto("https://bot.sannysoft.com/");
  await page.screenshot({ path: "bot.png" });
  await browser.close();
}

main();

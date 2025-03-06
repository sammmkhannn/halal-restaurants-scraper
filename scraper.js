import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import AdBlocker from "puppeteer-extra-plugin-adblocker";
import Anonymize from "puppeteer-extra-plugin-anonymize-ua";
import locations from "./Locations.js";
import scrollToBottom from "./src/utils/scroll.js";
import storeHotelLinks from "./src/utils/writeData.js";
import getDetails from "./src/utils/getDetails.js";
import hotelUrls from "./hotelLinks.js";

puppeteer.use(StealthPlugin());
puppeteer.use(AdBlocker());
puppeteer.use(Anonymize());

const args = [
  "--no-sandbox",
  "--disable-setuid-sandbox",
  "--disable-infobars",
  "--window-position=0,0",
  "--ignore-certifcate-errors",
  "--ignore-certifcate-errors-spki-list",
  '--user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3312.0 Safari/537.36"',
];

async function main() {
  const browser = await puppeteer.launch({
    headless: false, // Set to true for production
    // ignoreHTTPSErrors: true,
    // slowMo: 0,
    args,
  });
  const page = await browser.newPage();
  await page.setExtraHTTPHeaders({
    "user-agent":
      "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
    "upgrade-insecure-requests": "1",
    accept:
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
    "accept-encoding": "gzip, deflate, br",
    "accept-language": "en-US,en;q=0.9,en;q=0.8",
  });

  await getDetails(page, hotelUrls);
  /*

  for (let location of locations) {
    try {
      await page.goto(
        `https://www.yelp.ca/search?find_desc=Halal+Restaurants&find_loc=${location}`,
        { timeout: 0 }
      );
      await page.setViewport({ width: 1080, height: 1024 });

      // Scroll to bottom
      await scrollToBottom(page);

      let button = true;
      while (button) {
        await scrollToBottom(page);

        // Check if the next button is disabled
        let isDisabled = await page.evaluate(() => {
          return document.querySelector(".pagination-button__09f24__kbFYf")
            .disabled;
        });

        if (isDisabled) {
          button = false;
        }

        // Get hotel links
        let hotels = await page.evaluate(() => {
          let links = Array.from(
            document.querySelectorAll(".y-css-1t5uorm")
          ).map((link) => link.href);
          return links;
        });

        storeHotelLinks("hotelLinks.txt", JSON.stringify(hotels));

        // Click the next page button
        await page.click(".pagination-button__09f24__kbFYf");
      }
    } catch (error) {
      console.error("Error occurred:", error);
      continue; // Continue to the next location if an error occurs
    }
  }

  await getDetails(page); // Call getDetails function after scraping hotel links
*/
}

main();

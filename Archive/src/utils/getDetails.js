import scrollToBottom from "./scroll.js";
import preprocess from "./preprocess.js";
import store from "./store.js";
let hotels = [];
async function getDetails(page, hotelLinks) {
  // let banner = await page.evaluate(() =>{
  //   let bannerElement = document.querySelector('')
  // })
  //visit each hotel page and get all the details
  for (let hotelLink of hotelLinks) {
    await page.goto(hotelLink, { timeout: 0 });
    await scrollToBottom(page);

    //get title
    let title = await page.evaluate(() => {
      let titleElement = document.querySelector(".y-css-olzveb");
      return titleElement ? titleElement.innerText : "";
    });

    //category
    let categories = await page.evaluate(() => {
      let cats = document.querySelectorAll(".y-css-kw85nd > .y-css-12ly5yx");
      return cats ? [...cats].map((cat) => cat.innerHTML) : [];
    });

    //schedule
    let schedule = await page.evaluate(() => {
      let scheduleElement = document.querySelector(
        ".hours-table__09f24__KR8wh"
      );
      return scheduleElement ? scheduleElement.innerText : "";
    });

    //get menu
    let dishTitles = await page.evaluate(() => {
      let dishElements = Array.from(document.querySelectorAll(".y-css-tnxl0n"));
      return dishElements ? dishElements.map((title) => title.innerText) : [];
    });

    //get dish images
    let dishImages = await page.evaluate(() => {
      let imageElements = Array.from(
        document.querySelectorAll(".dishImageV2__09f24__VT6Je")
      );

      return imageElements ? imageElements.map((image) => image.src) : [];
    });
    // get the dish prices
    // await page.waitForSelector(".price__09f24__F1T0p");
    let prices = await page.evaluate(() => {
      let priceElements = Array.from(
        document.querySelectorAll(".price__09f24__F1T0p")
      );
      return priceElements ? priceElements.map((price) => price.innerText) : [];
    });

    //get full menu link
    // await page.waitForSelector(".y-css-1o34y7f > a");
    let fullMenuLink = await page.evaluate(() => {
      let menuElement = document.querySelector(".y-css-1o34y7f > a");
      return menuElement ? menuElement.href : "";
    });
    //get location
    await page.waitForSelector("address");
    let location = await page.evaluate(() => {
      return document.querySelector("address").innerText.replace("\n", "");
    });
    let dishes = preprocess(dishTitles, dishImages, prices);

    let hotel = {
      title,
      categories,
      menu: dishes,
      fullMenuLink,
      location,
      schedule,
    };

    //save the hotel data
    hotels.push(hotel);
    await store(hotels);
  }
  //end
  console.log("WOOOOOHoooo done");
}

export default getDetails;

async function getHotels(page, hotelSelector, hotels) {
  try {
    //get the hotel links
    let hotelLinks = await page.evaluate(async () => {
      let links = Array.from(
        await document.querySelectorAll(hotelSelector)
      ).map((link) => link.href);
      return links;
    });
    hotels.push(hotelLinks);
    console.log(hotels);
  } catch (err) {
    console.log(err.message);
  }
}

export default getHotels;

import request from "request";
var url = "https://www.yelp.ca/search?find_desc=Halal+Restaurants";

request(
  {
    method: "GET",
    url:
      "http://api.proxiesapi.com/?auth_key=24a7f82c35dce824ccda176f7c5a921a_sr98766_ooPq87&url=" +
      encodeURIComponent(url),
    headers: {
      Accept: "application/json",
    },
  },
  function (error, response, body) {
    console.log(error);
    console.log(body);
  }
);

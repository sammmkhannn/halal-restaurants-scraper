//preprocess the menu data
export default function preprocess(titles, images, prices) {
  let dishes = titles.map((dish, index) => {
    return {
      title: dish,
      image: images[index],
      price: prices && prices[index],
    };
  });

  return dishes;
}

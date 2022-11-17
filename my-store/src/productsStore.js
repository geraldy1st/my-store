// coffee: price_1M4tUtJcbczduCCc6z2a9f14
// Tea: price_1M4tYgJcbczduCCcrOZzmguv
// Chocolate: price_1M4tZhJcbczduCCc9Ln9uHF7

const productsArray = [
  {
    id: "price_1M4tUtJcbczduCCc6z2a9f14",
    title: "Coffee",
    price: 4.99,
  },
  {
    id: "price_1M4tYgJcbczduCCcrOZzmguv",
    title: "Tea",
    price: 2.99,
  },
  {
    id: "price_1M4tZhJcbczduCCc9Ln9uHF7",
    title: "Chocolate",
    price: 6.99,
  },
];

function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);

  if (productData === undefined) {
    console.log("product data does not exist for ID: " + id);
    return undefined;
  }
  return productData;
}

export { productsArray, getProductData };

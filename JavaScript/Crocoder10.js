// High Priced Product Categories
// You are given an array of objects representing a collection of products, each with a name, price, and category. Your task is to use map, filter, and reduce to calculate the average price of products in each category, and then return an array of objects containing only the categories that have an average price above 50.

// Array.prototype.reduce()
// Array.prototype.push()
// Array.prototype.keys()
// Array.prototype.map()
// Array.prototype.filter()

const products = [
  { name: "Product 1", price: 20, category: "Electronics" },
  { name: "Product 2", price: 30, category: "Clothes" },
  { name: "Product 3", price: 40, category: "Electronics" },
  { name: "Product 4", price: 50, category: "Clothes" },
  { name: "Product 5", price: 60, category: "Clothes" },
  { name: "Product 6", price: 70, category: "Electronics" },
  { name: "Product 7", price: 80, category: "Clothes" },
  { name: "Product 8", price: 90, category: "Electronics" },
];

const categoryAveragePrices = Object.values(
  products.reduce((acc, { category, price }) => {
    acc[category] = acc[category] || { category, totalPrice: 0, count: 0 };
    acc[category].totalPrice += price;
    acc[category].count += 1;
    return acc;
  }, {})
).map(({ category, totalPrice, count }) => ({
  category,
  avgPrice: totalPrice / count,
}));

const highPricedCategories = categoryAveragePrices.filter(({ avgPrice }) => avgPrice > 50);

console.log(highPricedCategories);
const Product = require("../models/Product");

const products = [
  {
    _id: "65a7e45902e12c44f599444e",
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    stockQuantity: 14,
    brand: "65a7e20102e12c44f59943da",
    category: "65a7e24602e12c44f599442c",
    thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    images: [
      "https://cdn.dummyjson.com/product-images/1/1.jpg",
    ],
    isDeleted: false,
    updatedAt: "2024-02-07T09:22:57.840Z",
  },
  {
    _id: "65a7e45902e12c44f5994450",
    title: "Samsung Universe 9",
    description:
      "Samsung's new variant which goes beyond Galaxy to the Universe",
    price: 1249,
    discountPercentage: 15.46,
    stockQuantity: 36,
    brand: "65a7e20102e12c44f59943db",
    category: "65a7e24602e12c44f599442c",
    thumbnail: "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg",
    images: ["https://cdn.dummyjson.com/product-images/3/1.jpg"],
    isDeleted: false,
    updatedAt: "2024-02-07T09:22:57.840Z",
  },
  {
    _id: "65a7e45902e12c44f5994451",
    title: "OPPOF19",
    description: "OPPO F19 is officially announced on April 2021.",
    price: 280,
    discountPercentage: 17.91,
    stockQuantity: 123,
    brand: "65a7e20102e12c44f59943dc",
    category: "65a7e24602e12c44f599442c",
    thumbnail: "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg",
    images: [
      "https://cdn.dummyjson.com/product-images/4/1.jpg",
    ],
    isDeleted: false,
    updatedAt: "2024-02-07T09:22:57.840Z",
  },
  {
    _id: "65a7e45902e12c44f5994452",
    title: "Huawei P30",
    description:
      "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    price: 499,
    discountPercentage: 10.58,
    stockQuantity: 32,
    brand: "65a7e20102e12c44f59943dd",
    category: "65a7e24602e12c44f599442c",
    thumbnail: "https://cdn.dummyjson.com/product-images/5/thumbnail.jpg",
    images: [
      "https://cdn.dummyjson.com/product-images/5/1.jpg",
    ],
    isDeleted: false,
    updatedAt: "2024-02-07T09:22:57.840Z",
  },
  {
    _id: "65a7e45902e12c44f5994453",
    title: "MacBook Pro",
    description:
      "MacBook Pro 2021 with mini-LED display may launch between September, November",
    price: 1749,
    discountPercentage: 11.02,
    stockQuantity: 83,
    brand: "65a7e20102e12c44f59943da",
    category: "65a7e24602e12c44f599442d",
    thumbnail: "https://cdn.dummyjson.com/product-images/6/thumbnail.png",
    images: [
      "https://cdn.dummyjson.com/product-images/6/1.png",
    ],
    isDeleted: false,
    updatedAt: "2024-02-07T09:22:57.840Z",
  },
  {
    _id: "65a7e45902e12c44f5994454",
    title: "Samsung Galaxy Book",
    description:
      "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
    price: 1499,
    discountPercentage: 4.15,
    stockQuantity: 50,
    brand: "65a7e20102e12c44f59943db",
    category: "65a7e24602e12c44f599442d",
    thumbnail: "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg",
    images: [
      "https://cdn.dummyjson.com/product-images/7/1.jpg",
    ],
    isDeleted: false,
    updatedAt: "2024-02-07T09:22:57.840Z",
  },
  {
    _id: "65a7e45902e12c44f5994455",
    title: "Microsoft Surface Laptop 4",
    description:
      "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
    price: 1499,
    discountPercentage: 10.23,
    stockQuantity: 68,
    brand: "65a7e20102e12c44f59943de",
    category: "65a7e24602e12c44f599442d",
    thumbnail: "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg",
    images: [
      "https://cdn.dummyjson.com/product-images/8/1.jpg",
    ],
    isDeleted: false,
    updatedAt: "2024-02-07T09:22:57.840Z",
  },
  {
    _id: "65a7e45902e12c44f5994456",
    title: "Infinix INBOOK",
    description:
      "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
    price: 1099,
    discountPercentage: 11.83,
    stockQuantity: 96,
    brand: "65a7e20102e12c44f59943df",
    category: "65a7e24602e12c44f599442d",
    thumbnail: "https://cdn.dummyjson.com/product-images/9/thumbnail.jpg",
    images: [
      "https://cdn.dummyjson.com/product-images/9/1.jpg",
    ],
    isDeleted: false,
    updatedAt: "2024-02-07T09:22:57.840Z",
  },
  {
    _id: "65a7e45902e12c44f5994457",
    title: "HP Pavilion 15-DK1056WM",
    description:
      "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
    price: 1099,
    discountPercentage: 6.18,
    stockQuantity: 89,
    brand: "65a7e20102e12c44f59943e0",
    category: "65a7e24602e12c44f599442d",
    thumbnail: "https://cdn.dummyjson.com/product-images/10/thumbnail.jpeg",
    images: [
      "https://cdn.dummyjson.com/product-images/10/1.jpg",
    ],
    isDeleted: false,
    updatedAt: "2024-02-07T09:22:57.840Z",
  },
  {
    _id: "65a7e45902e12c44f59944ae",
    title: "Metal Ceramic Flower",
    description:
      "Metal Ceramic Flower Chandelier Home Lighting American Vintage Hanging Lighting Pendant Lamp",
    price: 35,
    discountPercentage: 10.94,
    stockQuantity: 146,
    brand: "65a7e20102e12c44f5994425",
    category: "65a7e24602e12c44f599443f",
    thumbnail: "https://cdn.dummyjson.com/product-images/97/thumbnail.jpg",
    images: [
      "https://cdn.dummyjson.com/product-images/97/1.jpg",
    ],
    isDeleted: false,
    updatedAt: "2024-02-07T09:22:57.840Z",
  },
  {
    _id: "65a7e45902e12c44f59944af",
    title: "3 lights lndenpant kitchen islang",
    description:
      "3 lights lndenpant kitchen islang dining room pendant rice paper chandelier contemporary led pendant light modern chandelier",
    price: 34,
    discountPercentage: 5.92,
    stockQuantity: 44,
    brand: "65a7e20102e12c44f5994426",
    category: "65a7e24602e12c44f599443f",
    thumbnail: "https://cdn.dummyjson.com/product-images/98/thumbnail.jpg",
    images: [
      "https://cdn.dummyjson.com/product-images/98/1.jpg",
    ],
    isDeleted: false,
    updatedAt: "2024-02-07T09:22:57.840Z",
  },
  {
    _id: "65a7e45902e12c44f59944b0",
    title: "American Vintage Wood Pendant Light",
    description:
      "American Vintage Wood Pendant Light Farmhouse Antique Hanging Lamp Lampara Colgante",
    price: 46,
    discountPercentage: 8.84,
    stockQuantity: 138,
    brand: "65a7e20102e12c44f5994425",
    category: "65a7e24602e12c44f599443f",
    thumbnail: "https://cdn.dummyjson.com/product-images/99/thumbnail.jpg",
    images: [
      "https://cdn.dummyjson.com/product-images/99/1.jpg",
    ],
    isDeleted: false,
    updatedAt: "2024-02-07T09:22:57.840Z",
  },
  {
    _id: "65a7e45902e12c44f59944b1",
    title: "Crystal chandelier maria theresa for 12 light",
    description: "Crystal chandelier maria theresa for 12 light",
    price: 47,
    discountPercentage: 16,
    stockQuantity: 133,
    brand: "65a7e20102e12c44f5994427",
    category: "65a7e24602e12c44f599443f",
    thumbnail: "https://cdn.dummyjson.com/product-images/100/thumbnail.jpg",
    images: [
      "https://cdn.dummyjson.com/product-images/100/1.jpg",
    ],
    isDeleted: false,
    updatedAt: "2024-02-07T09:22:57.840Z",
  },
];

exports.seedProduct = async () => {
  try {
    await Product.insertMany(products);
    console.log("Product seeded successfully");
  } catch (error) {
    console.log(error);
  }
};

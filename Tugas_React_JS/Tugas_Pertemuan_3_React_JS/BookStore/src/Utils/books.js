// books.js
import {
  bukuAtomic,
  bukuClean,
  bukuDeep,
  bukuPragmatic,
  bukuSapiens,
  bukuThingking,
  bukuSendiri,
  bukuTeluk,
  bukuManusiaBadai,
} from "../assets";

const books = [
  {
    id: 1,
    title: "Novel Sendiri",
    author: "Andi Prasetyo",
    year: 2021,
    description: "Sebuah novel inspiratif tentang perjalanan seorang individu dalam menemukan jati diri dan makna hidup.",
    image: bukuSendiri
  },
  {
    id: 2,
    title: "Novel Teluk",
    author: "Dina Sari",
    year: 2022,
    description: "Sebuah novel yang menceritakan kehidupan di sekitar teluk yang indah.",
    image: bukuTeluk
  },
  {
    id: 3,
    title: "Atomic Habits",
    author: "James Clear",
    year: 2018,
    description: "Tiny changes, remarkable results. A guide to building good habits and breaking bad ones.",
    image: bukuAtomic
  },
  {
    id: 4,
    title: "Deep Work",
    author: "Cal Newport",
    year: 2016,
    description: "Rules for focused success in a distracted world. Learn to concentrate deeply.",
    image: bukuDeep
  },
  {
    id: 5,
    title: "The Pragmatic Programmer",
    author: "David Thomas",
    year: 1999,
    description: "Your journey to mastery. A classic guide for software developers.",
    image: bukuPragmatic
  },
  {
    id: 6,
    title: "Clean Code",
    author: "Robert C. Martin",
    year: 2008,
    description: "A handbook of agile software craftsmanship for writing clean and maintainable code.",
    image: bukuClean
  },
  {
    id: 7,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    year: 2011,
    description: "A brief history of humankind exploring how Homo sapiens came to dominate the world.",
    image: bukuSapiens
  },
  {
    id: 8,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    year: 2011,
    description: "Explores the two systems that drive the way we think and make decisions.",
    image: bukuThingking
  },
  {
    id: 9,
    title: "Manusia Badai",
    author: "Hendra Wijaya",
    year: 2024,
    description: "Sebuah novel yang menggambarkan perjuangan manusia dalam menghadapi tantangan hidup.",
    image: bukuManusiaBadai
  }
];

export default books;
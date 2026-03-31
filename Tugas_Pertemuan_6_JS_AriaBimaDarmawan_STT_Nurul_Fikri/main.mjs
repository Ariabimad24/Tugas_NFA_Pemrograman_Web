import { index, store, destroy } from "./controller.mjs";

const main = () => {
  store({ nama: "Bima", umur: 21, alamat: "Jl. Bima 1", email: "bima@gmail.com" });
  store({ nama: "Andi", umur: 23, alamat: "Jl. Andi 5", email: "andi@gmail.com" });

  index();

  destroy("Data 3");

  index();
};

main();

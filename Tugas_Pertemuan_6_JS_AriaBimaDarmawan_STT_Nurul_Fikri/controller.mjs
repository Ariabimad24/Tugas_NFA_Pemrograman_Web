import users from "./data.mjs";

const index = () => {
  console.log("\n===== DATA USERS =====");
  users.map((user, i) => {
    console.log(`${i + 1}. Nama: ${user.nama} | Umur: ${user.umur} | Alamat: ${user.alamat} | Email: ${user.email}`);
  });
  console.log("======================\n");
};

const store = (user) => {
  users.push(user);
  console.log(`Data "${user.nama}" berhasil ditambahkan!`);
};

const destroy = (nama) => {
  const i = users.findIndex((user) => user.nama === nama);
  if (i !== -1) {
    console.log(`Data "${users[i].nama}" berhasil dihapus!`);
    users.splice(i, 1);
  } else {
    console.log(`Data "${nama}" tidak ditemukan.`);
  }
};

export { index, store, destroy };

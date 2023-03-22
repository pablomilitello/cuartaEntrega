const socketClient = io();

const addProduct = document.getElementById('addProduct');

const inputTitle = document.getElementById('pTitle');
const inputDescription = document.getElementById('pDescription');
const inputCategory = document.getElementById('pCategory');
const inputPrice = document.getElementById('pPrice');
const inputCode = document.getElementById('pCode');
const inputStock = document.getElementById('pStock');

const newProduct = {
  title: inputTitle.value,
  description: inputDescription.value,
  category: inputCategory.value,
  price: inputPrice.value,
  thumbnail: [],
  code: inputCode.value,
  stock: inputStock.value,
  status: true,
};

addProduct.onclick = (e) => {
  e.preventDefault();
  socketClient.emit('addNewProduct', ...newProduct);
};

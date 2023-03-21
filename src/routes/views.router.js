import { Router } from 'express';
import ProductManager from '../../ProductManager.js';
import { __dirname } from '../utils.js';

const path = __dirname + '/products.json';

const router = Router();

const productManager = new ProductManager(path);

router.get('/', async (req, res) => {
  try {
    const products = await productManager.getProducts();
    res.render('home', { products });
  } catch (error) {
    console.log(error);
    res.status(500).json('product search error');
  }
});

export default router;

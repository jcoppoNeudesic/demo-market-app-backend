import express from 'express';
import {
  createNewItem,
  getItems,
  getItem,
  updateItem,
  deleteItem,
} from '../controllers/marketItems';

const router = express.Router();

router.post('/market-item', createNewItem);
router.get('/market-items', getItems);
router.get('/market-item/:id', getItem);
router.put('/market-item/:id', updateItem);
router.delete('/market-item/:id', deleteItem);

export default router;

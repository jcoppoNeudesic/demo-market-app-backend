import moment from 'moment';
import MarketItem from '../models/marketItem';
import Guid from '../utils/Guid';
import { db } from '../loaders/firebase';

export default class MarketItemService {
  private dbName = 'market';

  createItem = async (item: any) => {
    const marketItem: MarketItem = {
      ownerUsername: item.ownerUsername,
      name: item.name,
      price: item.price,
      description: item.description || '',
      imageUrl: item.imageUrl || '',
      location: item.location,
      timeCreated: moment().format(),
      expireTime: moment().add(10, 'days').format(),
    };
    const newId = Guid.newGuid();
    try {
      await db.collection(this.dbName).doc(newId).set(marketItem);
    } catch (error) {
      throw error;
    }
  };

  getAllItems = async () => {
    try {
      const data = await db.collection(this.dbName).get();
      const items: MarketItem[] = this.mapItemsFromData(data);
      return items;
    } catch (error) {
      throw error;
    }
  };

  getItemsOfUser = async (user: string) => {
    try {
      const data = await db
        .collection(this.dbName)
        .where('ownerUsername', '==', user)
        .get();
      return this.mapItemsFromData(data);
    } catch (error) {
      throw error;
    }
  };

  getItemsWithinDistance = async (location: string, distanceKM: number) => {
    try {
      const data = await db.collection(this.dbName);
      // .where('ownerUsername', '==', user);
      // return this.mapItems(data);
    } catch (error) {
      throw error;
    }
  };

  getItem = async (id: string) => {
    try {
      const item = await db.collection(this.dbName).doc(id).get();
      if (item.exists) {
        return item.data();
      } else {
        throw Error('Item not found');
      }
    } catch (error) {
      throw error;
    }
  };

  updateItem = async (id: string, body: any) => {
    try {
      await db.collection(this.dbName).doc(id).update(body);
    } catch (error) {
      throw error;
    }
  };

  deleteItem = async (id: string) => {
    try {
      const data = await db.collection(this.dbName).doc(id).delete();
      console.log(data);
    } catch (error) {}
  };

  private mapItemsFromData = (data: FirebaseFirestore.QuerySnapshot) => {
    let items: MarketItem[] = [];
    data.forEach((doc) => {
      const item = this.itemFromDoc(doc);
      items.push(item);
    });
    return items;
  };

  private itemFromDoc = (doc: FirebaseFirestore.QueryDocumentSnapshot) => {
    const item: MarketItem = {
      ownerUsername: doc.data().ownerUsername,
      name: doc.data().name,
      price: doc.data().price,
      description: doc.data().description,
      imageUrl: doc.data().imageUrl,
      location: doc.data().location,
      timeCreated: doc.data().timeCreated,
      expireTime: doc.data().expireTime,
    };
    return item;
  };
}

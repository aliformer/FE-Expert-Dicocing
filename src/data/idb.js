import { openDB } from 'idb'
import CONFIG from '../global/config'

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade (database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' })
  }
})

const FavoriteRestaurantIdb = {
  async getRestaurant (id) {
    try {
      return (await dbPromise).get(OBJECT_STORE_NAME, id)
    } catch (err) {
      console.log(err)
    }
  },
  async getAllRestaurant () {
    try {
      return (await dbPromise).getAll(OBJECT_STORE_NAME)
    } catch (err) {
      return new Error(err)
    }
  },
  async putRestaurant (restaurant) {
    try {
      return (await dbPromise).put(OBJECT_STORE_NAME, restaurant)
    } catch (err) {
      return new Error(err)
    }
  },
  async deleteRestaurant (id) {
    try {
      return (await dbPromise).delete(OBJECT_STORE_NAME, id)
    } catch (err) {
      return new Error(err)
    }
  },
  async clearRestaurant () {
    try {
      return (await dbPromise).clear(OBJECT_STORE_NAME)
    } catch (err) {
      return new Error(err)
    }
  }
}

export default FavoriteRestaurantIdb

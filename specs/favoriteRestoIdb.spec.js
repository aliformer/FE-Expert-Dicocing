import { itActsAsFavoritedRestoModel } from './contract/favoriteRestaurantContract';
import FavoriteRestaurantIdb from '../src/data/idb'

describe('Favorite Resto Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurantIdb.getAllRestaurant()).forEach(async (restaurant) => {
      await FavoriteRestaurantIdb.deleteRestaurant(restaurant.id);
    });
  });

  itActsAsFavoritedRestoModel(FavoriteRestaurantIdb);
});

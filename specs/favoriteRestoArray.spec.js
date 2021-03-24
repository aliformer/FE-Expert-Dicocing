import { itActsAsFavoritedRestoModel } from './contract/favoriteRestaurantContract';

let FavoriteRestaurant = [];

const FavoriteRestoArray = {

  getRestaurant(id) {
    if (!id) {
      return false;
    }

    return FavoriteRestaurant.find((restaurant) => restaurant.id === id);
  },

  getAllRestaurant() {
    return FavoriteRestaurant;
  },

  putRestaurant(restaurant) {
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }

    // pastikan id ini belum ada dalam daftar FavoriteRestaurant
    if (this.getRestaurant(restaurant.id)) {
      return;
    }

    FavoriteRestaurant.push(restaurant);
  },

  deleteRestaurant(id) {
    // cara boros menghapus film dengan meng-copy film yang ada
    // kecuali film dengan id == id
    FavoriteRestaurant = FavoriteRestaurant.filter((restaurant) => restaurant.id !== id);
  },
};

describe('Favorite Resto Array Contract Test Implementation', () => {
  afterEach(() => FavoriteRestaurant = []);

  itActsAsFavoritedRestoModel(FavoriteRestoArray);
});

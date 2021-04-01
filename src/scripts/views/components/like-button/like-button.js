import FavoriteRestaurantIdb from '../../../../data/idb'

class LikeButton extends HTMLElement {
  set render (restaurant) {
    this.renderSaveButton(restaurant)
  }

  async renderSaveButton (restaurant) {
    if (await this.checkStatus(restaurant.id)) {
      try {
        this.innerHTML = '<button class="favorite"id=\'deleteButton\'><i class=\'material-icons md-24\'>bookmark</i>Hapus dari Favorit</button>'
        this.removeFavorite(restaurant)
      } catch (err) {
        return err
      }
    } else {
      try {
        this.innerHTML = '<button class="favorite" id=\'bookmarkButton\'><i class=\'material-icons md-24\' >bookmark</i>Tambahkan ke favorit</button>'
        this.addtoFavorite(restaurant)
      } catch (err) {
        return err
      }
    }
  }

  addtoFavorite (restaurant) {
    const bookmarkButton = this.querySelector('#bookmarkButton')
    bookmarkButton.addEventListener('click', async (event) => {
      try {
        FavoriteRestaurantIdb.putRestaurant(restaurant)
        this.render = restaurant
        this.renderToast('success to save')
      } catch (err) {
        this.renderErroToast('failed to save')
      }
    })
    this.dispatchEvent(new Event('like-button:rendered'))
  }

  removeFavorite (restaurant) {
    const deleteButton = this.querySelector('#deleteButton')
    deleteButton.addEventListener('click', (event) => {
      try {
        FavoriteRestaurantIdb.deleteRestaurant(restaurant.id)
        this.render = restaurant
        this.renderToast('success to remove')
      } catch (err) {
        this.renderErroToast('failed to remove')
      }
    })
    this.dispatchEvent(new Event('like-button:rendered'))
  }

  async checkStatus (id) {
    try {
      const movie = await FavoriteRestaurantIdb.getRestaurant(id)
      return !!movie
    } catch (err) {
      return new Error(err)
    }
  }

  renderToast (message) {
    const toast = document.createElement('h5')
    toast.innerText = message
    toast.classList = 'toast success'
    document.querySelector('main').append(toast)
    setTimeout(() => { document.querySelector('.toast').remove() }, 1000)
  }

  renderErroToast (message) {
    const toast = document.createElement('h5')
    toast.innerText = message
    toast.classList = 'toast error'
    document.querySelector('main').append(toast)
    setTimeout(() => { document.querySelector('.toast').remove() }, 1000)
  }
}

customElements.define('like-button', LikeButton)

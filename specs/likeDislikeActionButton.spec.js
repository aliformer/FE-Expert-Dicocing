/* eslint-disable no-undef */
import '../src/scripts/views/components/like-button/like-button'
import FavoriteRestaurantIdb from '../src/data/idb'

describe('test render like button', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = `<div id="likeButtonContainer"></div>
    <main>
    <like-button></like-buton>
    </main>
    </div>`
  }

  beforeEach(() => {
    addLikeButtonContainer()
  })
  afterEach(async () => {
    await FavoriteRestaurantIdb.clearRestaurant()
  })

  it('should not draw delete button', (done) => {
    const like = document.querySelector('like-button')
    like.render = { id: '1' }
    like.addEventListener('like-button:rendered', async () => {
      expect(await like.querySelector('#deleteButton')).toBeFalsy()
      done()
    })
  })
  it('should draw bookmark button', (done) => {
    const like = document.querySelector('like-button')
    like.render = { id: '2' }
    like.addEventListener('like-button:rendered', async () => {
      expect( await like.firstChild.id).toEqual('bookmarkButton')
      done()
    })
  })
  it('should draw dislike button after dispatch click event from bookmark button', (done) => {
    const like = document.querySelector('like-button')
    like.render = { id: '2' }
    like.addEventListener('like-button:rendered', async () => {
      if (await like.firstChild.id === 'bookmarkButton') {
        like.firstChild.click()
      }
      await expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([{ id: '2' }])
      await expect(await document.querySelector('#deleteButton')).toBeTruthy()
      done()
    })
  })
  it('should display toast succes after dispatch click event from bookmark button', (done) => {
    const like = document.querySelector('like-button')
    like.render = { id: '2' }
    like.addEventListener('like-button:rendered', async () => {
      if (await like.firstChild.id === 'bookmarkButton') {
        like.firstChild.click()
      }
      expect(document.querySelector('.toast').innerText).toEqual('success to save')
      done()
    })
  })
  it('should not render new button', (done) => {
    const like = document.querySelector('like-button')
    const restaurant = [{}]
    like.render = restaurant
    like.addEventListener('like-button:rendered', async () => {
      if (await like.firstChild.id === 'bookmarkButton') {
        like.firstChild.click()
      }
      expect(document.querySelector('#deleteButton')).toBeTruthy()
      done()
    })
  })
})

describe('test render dislike button', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = `<div id="likeButtonContainer"></div>
    <main>
    <like-button></like-buton>
    </main>
    </div>`
  }

  beforeEach(() => {
    addLikeButtonContainer()
  })
  afterEach(async () => {
    await FavoriteRestaurantIdb.clearRestaurant()
  })

  it('should not draw bookmark button', (done) => {
    FavoriteRestaurantIdb.putRestaurant({ id: '1' })
    const like = document.querySelector('like-button')
    like.render = { id: '1' }
    like.addEventListener('like-button:rendered', async () => {
      expect(await like.querySelector('#bookmarkButton')).toBeFalsy()
      done()
    })
  })
  it('should not draw bookmark button', (done) => {
    FavoriteRestaurantIdb.putRestaurant({ id: '1' })
    const like = document.querySelector('like-button')
    like.render = { id: '1' }
    like.addEventListener('like-button:rendered', async () => {
      expect(await like.firstChild.id).toEqual('deleteButton')
      done()
    })
  })
  it('should draw bookmark button after dispatch click event from bookmark button', (done) => {
    FavoriteRestaurantIdb.putRestaurant({ id: '2' })
    const like = document.querySelector('like-button')
    like.render = { id: '2' }
    like.addEventListener('like-button:rendered', async () => {
      if (await like.firstChild.id === 'deleteButton') {
        like.firstChild.click()
      }
      await expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([])
      await expect(await document.querySelector('#bookmarkButton')).toBeTruthy()
      done()
    })
  })
  it('should display toast succes after dispatch click event from delete button', (done) => {
    FavoriteRestaurantIdb.putRestaurant({ id: '2' })
    const like = document.querySelector('like-button')
    like.render = { id: '2' }
    like.addEventListener('like-button:rendered', async () => {
      if (await like.firstChild.id === 'deleteButton') {
        like.firstChild.click()
      }
      expect(document.querySelector('.toast').innerText).toEqual('success to remove')
      expect(await FavoriteRestaurantIdb.getAllRestaurant()).not.toEqual({ id: '2' })
      done()
    })
  })
})

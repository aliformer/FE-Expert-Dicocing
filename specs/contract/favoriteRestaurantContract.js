/* eslint-disable no-undef */
const itActsAsFavoritedRestoModel = (favoritedResto) => {
  it('should return restaurants has been added before', async () => {
    favoritedResto.putRestaurant({ id: 1 })
    favoritedResto.putRestaurant({ id: 2 })

    expect(await favoritedResto.getRestaurant(1))
      .toEqual({ id: 1 })
    expect(await favoritedResto.getRestaurant(2))
      .toEqual({ id: 2 })
    expect(await favoritedResto.getRestaurant(3))
      .toEqual(undefined)
  })

  it('should refuse restaurant with inaproppiate property', async () => {
    favoritedResto.putRestaurant({ prop : 'prop'})
    expect(await favoritedResto.getAllRestaurant()).toEqual([])
  })

  it('can return all of the restaurants that have been added', async () => {
    favoritedResto.putRestaurant({ id: 1 })
    favoritedResto.putRestaurant({ id: 2 })

    expect(await favoritedResto.getAllRestaurant())
      .toEqual([
        { id: 1 },
        { id: 2 }
      ])
  })

  it('should remove favorite restaurant', async () => {
    favoritedResto.putRestaurant({ id: 1 })
    favoritedResto.putRestaurant({ id: 2 })
    favoritedResto.putRestaurant({ id: 3 })

    await favoritedResto.deleteRestaurant(1)

    expect(await favoritedResto.getAllRestaurant())
      .toEqual([
        { id: 2 },
        { id: 3 }
      ])
  })

  it('should handle request to remove a restaurant even though the restaurant has not been added', async () => {
    favoritedResto.putRestaurant({ id: 1 })
    favoritedResto.putRestaurant({ id: 2 })
    favoritedResto.putRestaurant({ id: 3 })

    await favoritedResto.deleteRestaurant(4)

    expect(await favoritedResto.getAllRestaurant())
      .toEqual([
        { id: 1 },
        { id: 2 },
        { id: 3 }
      ])
  })
}

export { itActsAsFavoritedRestoModel }

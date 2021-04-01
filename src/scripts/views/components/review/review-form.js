import API_ENDPOINT from '../../../../global/api-endpoints'
class ReviewFormElement extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  set submitEvent ([element, loadData, getData, id]) {
    this._submitEvent = async (event) => {
      event.preventDefault()
      this.id = id
      this.element = element
      this.loadData = loadData
      this.getData = getData
      this.renderPage = render
      const data = await this.getFormData()
      data.id = this.id
      await this.sendReview(data)
      await console.log('success')
      document.querySelector('item-list').render()
    }
    this.render()
  }

  render () {
    this.innerHTML = `
      <h3 class="review-header">Reviews</h3>
      <form class="review-form" id="reviewForm">
        <div class="review-container">

          <label for="inputReview">Your Review :</label>
          <textarea id="inputReview" name="inputReview" rows="4" width="100%"
          aria-label="Input your review restaurant"  placeholder="masukkan review anda"></textarea>

        </div>
        <div class="review-container">

          <label for="inputName">Name</label>
          <input type="text" id="inputName" name="inputName" 
          aria-label="Please input your name in here" placeholder="masukkan nama anda">

        </div>
        <div class="review-container">

          <button class="review-button" id="submitReview" type="submit" 
          aria-label="Click to show all discovery restaurant">
              Submit
          </button>

        </div>
      </form>
    `
    this.querySelector('form').addEventListener('submit', this._submitEvent)
  }

  getFormData () {
    const form = document.querySelector('#reviewForm')
    const review = form.elements.inputReview.value
    const name = form.elements.inputName.value
    const data = {
      review: review,
      name: name
    }
    return data
  }

  async sendReview (data) {
    const helper = await import('../../../../global/api.helper')
      .then((module) => module.default)
      .then((API_HELPER) => API_HELPER)
      .catch((error) => new Error(error))
    const response = await fetch(API_ENDPOINT.POST_REVIEW, helper.option(data))
    await helper.check(response)
    this.submitEvent = [this.element, this.id]
    const dataRenew = await this.getData(this.id)
    this.loadData(await dataRenew, 'gagal memuat data', this.element)
  }
}
customElements.define('review-form', ReviewFormElement)

import axios from 'axios';

const API_KEY = '33674761-de1d44d4741b05ad048b05bf0';

export default class FetchImages {
  constructor() {
    this.page = 1;
    this.perPage = 8;
    this.searchQuery = '';
  }

  async getImages() {

    const response = await axios.get(
      `https://pixabay.com/api/?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=${this.perPage}`
    );
    return response;
  }

  nextPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}
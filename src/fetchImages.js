import axios from 'axios';

const API_KEY = '33674761-de1d44d4741b05ad048b05bf0';

export default class FetchImages {
  constructor() {
    this.page = 1;
    this.searchQuery = '';
  }

  getImages() {
    return axios.get(
      `https://pixabay.com/api/?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=4`
    );
  }

  nextPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}


// export function fetchCountries(name) {
//     const API_KEY = '33674761-de1d44d4741b05ad048b05bf0';
//     return axios.get(
//       `https://pixabay.com/api/?key=${API_KEY}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&page=1&per_page=40`
//     );
    
// }


// export default class NewsApiService {
//   constructor() {
//     this.page = 1;
//     this.searchQuery = '';
//   }

//   getNews() {
//     const URL = `${ENDPOINT}?q=${this.searchQuery}&pageSize=5&page=${this.page}`;

//     return fetch(URL, options)
//       .then(response => response.json())
//       .then(({ articles }) => {
//         this.nextPage();
//         return articles;
//       });
//   }

//   nextPage() {
//     this.page += 1;
//   }
//   resetPage() {
//     this.page = 1;
//   }
// }
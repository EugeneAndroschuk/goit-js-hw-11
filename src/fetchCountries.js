import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from 'axios';

export function fetchCountries(name) {
    const API_KEY = '33674761-de1d44d4741b05ad048b05bf0';
    return axios.get(
      `https://pixabay.com/api/?key=${API_KEY}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true`
    );
    
}

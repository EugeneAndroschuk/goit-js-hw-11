import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from './fetchCountries.js';

const form = document.getElementById('search-form');
const input = document.querySelector('input');
const cardList = document.querySelector('.gallery');

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const findQuery = input.value.trim();

  if (findQuery === '') return;

  fetchCountries(findQuery).then(response => {
   // console.log(response.data.hits);
    const arrayOfImages = response.data.hits;
    
    Notify.info(`Hooray! We found ${response.data.totalHits} images.`);

    const cardMarkup = arrayOfImages.map(image => {
      return `<div class="photo-card">
      <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
           <div class="info">
              <p class="info-item">
              <b>Likes</b>
              ${image.likes}
              </p>
              <p class="info-item">
              <b>Views</b>
              ${image.views}
              </p>
              <p class="info-item">
              <b>Comments</b>
              ${image.comments}
              </p>
              <p class="info-item">
              <b>Downloads</b>
              ${image.downloads}
              </p>
           </div>
      </div>`;
    });
    cardList.innerHTML = cardMarkup.join('');
  });
}

// const countryList = document.querySelector('.country-list');
// const countryInfo = document.querySelector('.country-info');

// input.addEventListener('input', onInput());

// function onInput() {
//   const name = input.value.trim();
//   if (name === "") return;

//   fetchCountries(name)
//     .then(countries => {
//       const numberOfCountries = countries.length;

//       if (numberOfCountries > 10) {
//         countryInfo.innerHTML = '';
//         countryList.innerHTML = '';
//         Notify.info(
//           'Too many matches found. Please enter a more specific name.'
//         );
//       } else if (numberOfCountries >= 2 && numberOfCountries <= 10) {
//         const countryListMarkup = countries.map(country => {
//           return `<li class="country-item">
//           <div class="img-wrap">
//           <img src="${country.flags.svg}" alt="" width="30"/></div>
//           <p class="country-name">${country.name.official}</p>
//           </li>`;
//         });
//         countryInfo.innerHTML = '';
//         countryList.innerHTML = countryListMarkup.join('');
//       } else {
//         const countryListMarkup = `<li class="country-item">
//           <div class="img-wrap">
//           <img src="${countries[0].flags.svg}" alt="" width="30"/></div>
//           <p class="country-name finded">${countries[0].name.official}</p>
//           </li>`;
//         const countryInfoMarkup = `<p class="info-value"><span class="country-info">Capital:</span>  ${
//           countries[0].capital
//         }</p>
//           <p class="info-value"><span class="country-info">Population:</span>  ${
//             countries[0].population
//           }</p>
//           <p class="info-value"><span class="country-info">Languages:</span>  ${Object.values(
//             countries[0].languages
//           ).join(', ')}</p>`;
//         countryInfo.innerHTML = countryInfoMarkup;
//         countryList.innerHTML = countryListMarkup;
//       }
//     })
//     .catch(() => {
//       countryInfo.innerHTML = '';
//       countryList.innerHTML = '';
//       Notify.failure('Oops, there is no country with that name');
//     });
// }

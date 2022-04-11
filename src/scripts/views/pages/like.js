import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestoItemTemplate } from '../templates/template-creator';
import '../../component/like-item.js';

const Like = {
  async render() {
    return `
      <like-item></like-item>
    `;
  },

  async afterRender() {
    const restaurant = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantContainer = document.querySelector('#restaurants');
    restaurant.forEach((resto) => {
      restaurantContainer.innerHTML += createRestoItemTemplate(resto);
    });
    const hero = document.querySelector('.hero');
    if (!hero.classList.contains('skip-hero')) {
      hero.classList.toggle('skip-hero');
    }
  },
};

export default Like;

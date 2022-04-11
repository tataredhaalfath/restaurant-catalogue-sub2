import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import './component/app-bar.js';
import './component/hero-el.js';

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('.nav-menu'),
  hero: document.querySelector('.hero'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();
  swRegister();
});

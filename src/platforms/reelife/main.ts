import { PLATFORM_CONFIG } from './config.js';
import { ReelifeAPI } from './api.js';
import { Navbar } from '../../core/ui/navbar.js';
import { AppRouter } from '../../core/router.js';
import '../../index.css';

document.addEventListener('DOMContentLoaded', () => {
  (window as any).platform = PLATFORM_CONFIG;
  (window as any).api = new ReelifeAPI();

  const navbar = new Navbar(PLATFORM_CONFIG.id, PLATFORM_CONFIG.menu);
  document.body.prepend(navbar.render());

  const app = document.getElementById('app-content');
  if (!app) {
    const appDiv = document.createElement('div');
    appDiv.id = 'app-content';
    document.body.appendChild(appDiv);
  }

  const router = new AppRouter(PLATFORM_CONFIG.id);
  router.init();

  console.log(`✅ ${PLATFORM_CONFIG.name} Loaded`);
});

/* eslint-disable no-unused-vars */

/* eslint-disable no-new */
import { Card } from './components/card/card.js';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Menu } from './components/menu/menu';
import { Tasks } from './components/tasks/tasks';
import './index.scss';
import { PokeStructure } from './services/repository/task.stprage.repo.';

export type MenuOption = {
  label: string;
  path: string;
};

const menuOptions: MenuOption[] = [
  { label: 'Los Pokemon', path: '/home' },
  { label: 'Mi Pokemon', path: '/favs' },
];

console.log('Load', location.pathname);
new Header('app-container');
new Menu('.header__menu', menuOptions);

if (location.pathname === '/home') {
  new Tasks('menu', new TasksStorageRepo());
}

new Footer('.app-container');

new Card('.app-container');

/* eslint-disable no-unused-vars */
import { PokeStructure } from '../../models/task';
import { Component } from '../component/component';
import './card.scss';

export class Card extends Component {
  constructor(public selector: string, public task: PokeStructure) {
    super();
    this.template = this.createTemplate();
    this.render('beforeend');
  }

  createTemplate() {
    return `
    <li class="card">
      <span>${this.task.isCompleted}</span>
      <span title="${this.task.id}">${this.task.name}</span>
      <span>${this.task.ability}</span>
      <button>🗑️</button>
    </li>`;
  }
}

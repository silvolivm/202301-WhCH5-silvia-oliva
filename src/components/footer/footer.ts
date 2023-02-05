/* eslint-disable no-unused-vars */
import { Component } from '../component/component';
import './footer.scss';

export class Footer extends Component {
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.render('beforeend');
  }

  private createTemplate() {
    return `
              <footer class="footer">
              <img class="footer__img"src="./pokemon-logo-svg" alt="Logo Pokemon"/>
             <address>pokemon</address>
                <button type="submit">siguiente</button>
              </footer>
    `;
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
  }
}

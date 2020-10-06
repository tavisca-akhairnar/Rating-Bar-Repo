import { html, customElement, LitElement, property, TemplateResult } from 'lit-element';
import styles from './orxe-rating-bar-css';
import { styleMap } from 'lit-html/directives/style-map';

@customElement('orxe-orxe-rating-bar')
export default class OrxeOrxeRatingBar extends LitElement {
  @property({ type: String })
  type: 'linear' | 'donut' = 'donut';

  @property({ type: String })
  label = 'Data';

  @property({ type: Number })
  rating = 10.1;

  /**
 *  Getting styles from components custom scss file
 */
  static styles = styles;

  /**
   * Implement `render` to define a template for button element.
   */
  render() {
    this.rating = this._getScaledRating(this.rating);
    return html`
      <div> 
         ${this.type === 'donut'
        ? html`${this._renderDonut()}`
        : html`${this._renderLinear()}`
      }
      </div>
    `;
  }

  _getScaledRating(receivedRating): number {
    return !receivedRating
      ? 0
      : receivedRating > 100
        ? 10
        : receivedRating < 0
          ? 0
          : Math.floor(receivedRating) / 10;
  }

  _getProgress(barType) {
    const progress = {};
    if (barType == 'donut') {
      if (this.rating > 10) {
        progress['stroke-dashoffset'] = 0;
      } else if (this.rating < 0) {
        progress['stroke-dashoffset'] = 113.04;
      } else {
        progress['stroke-dashoffset'] = 113.04 * (1 - this.rating / 10);
      }
    } else {
      if (this.rating > 10) {
        progress['width'] = '100%';
      } else if (this.rating < 0) {
        progress['width'] = '0%';
      } else {
        progress['width'] = (this.rating * 10) + '%';
      }
    }
    return progress;
  }

  _getClass(barType): string {
    if (this.rating >= 1 && this.rating < 3) {
      return barType + `-track--bad`;
    } else if (this.rating >= 3 && this.rating < 5) {
      return barType + `-track--poor`;
    } else if (this.rating >= 5 && this.rating < 7) {
      return barType + `-track--average`;
    } else if (this.rating >= 7 && this.rating < 8.5) {
      return barType + `-track--great`;
    } else if (this.rating >= 8.5) {
      return barType + `-track--excellent`;
    } else {
      return '';
    }
  }

  _renderDonut(): TemplateResult {
    return html`
      <div class="donut-container">
          <svg data-testid="donut-rating-bar" aria-hidden="true" class="donut" viewBox="0 0 40 40" width="40" height="40">
            <circle cx="20" cy="20" r="18" class="donut-track" />
            <circle
              data-testid="donut-track-indicator"
              cx="20"
              cy="20"
              r="18"
              style=${styleMap(this._getProgress(this.type))}
              class="donut-track__indicator ${this._getClass('donut')}"
            />
            <div data-testid="donut-rating" class="donut-track__info">${this.rating}</div>
          </svg>
        </div>
      `;
  }

  _renderLinear(): TemplateResult {
    return html`
      <div aria-hidden="true" data-testid="linear-rating-bar" class="linear-track">
        <div
          data-testid="linear-indicator"
          style=${styleMap(this._getProgress(this.type))}
          class="linear-track__indicator ${this._getClass('linear')}">
        </div>
      </div>
      <div class="linear-track__info">
        <span data-testid="linear-rating-label">${this.label}</span>
        <span data-testid="linear-rating-value">${this.rating}</span>
      </div>
    `;
  }
}

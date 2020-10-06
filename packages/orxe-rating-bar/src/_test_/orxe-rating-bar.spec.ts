import { OrxeOrxeRatingBar } from '../';
import {
  toHaveStyle,
  toHaveClass
} from '@testing-library/jest-dom/matchers';

expect.extend({ toHaveStyle, toHaveClass});
describe('orxe-orxe-rating-bar', () => {
  let ratingBar;

  beforeEach(async function () {
    OrxeOrxeRatingBar;

    ratingBar = document.createElement('orxe-orxe-rating-bar') as OrxeOrxeRatingBar;
    await document.body.append(ratingBar);
  });

  afterEach(async function () {
    await ratingBar.remove();
  });

  function getByTestId(id: string): HTMLElement {
    return ratingBar.shadowRoot.querySelector(`[data-testid=${id}]`) as HTMLElement;
  }

  /*
   * Function that sets properties on the Custom Element.
   */
  async function setProperties(properties: object): Promise<void> {
    for (const property in properties) {
      if (ratingBar.hasOwnProperty(property)) {
        ratingBar[property] = properties[property];
      }
    }
    await ratingBar.requestUpdate();
  }

  it('should check default values of properties', async () => {
    expect(ratingBar.type).toEqual('donut');
    expect(ratingBar.label).toEqual('Data');
    expect(ratingBar.rating).toEqual(1);
  });

  it('check rendering of donut rating bar', async () => {
    await setProperties({ type: 'donut' });
    const donutRatingBar = getByTestId('donut-rating-bar');
    expect(donutRatingBar).toBeTruthy();
  });

  it('check rendering of linear rating bar', async () => {
    await setProperties({ type: 'linear' });
    const donutRatingBar = getByTestId('linear-rating-bar');
    expect(donutRatingBar).toBeTruthy();
  });


  it('check Parent class for donut rating bar', async () => {
    await setProperties({ type: 'donut' });
    const donutRatingBar = getByTestId('donut-rating-bar');
    expect(donutRatingBar).toHaveClass('donut');
  });

  it('check Parent class for linear rating bar', async () => {
    await setProperties({ type: 'linear' });
    const linearRatingBar = getByTestId('linear-rating-bar');
    expect(linearRatingBar).toHaveClass('linear-track');
  });

  it('check Progress for Donut rating bar', async () => {
    await setProperties({ rating: 7, type: 'donut'});
    const donutTrack = getByTestId('donut-track-indicator');
    expect(donutTrack).toHaveStyle({ 'stroke-dashoffset': 105.12720000000002 });
  });

  it('check Progress for Linear rating bar when below 0', async () => {
    await setProperties({ rating: -10, type:'linear' });
    const linearTrack = getByTestId('linear-indicator');
    expect(linearTrack).toHaveStyle({ width: '0%' });
  });
});

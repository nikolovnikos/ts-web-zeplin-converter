import { ZeplinConverter } from './ZeplinConverter';
import { deviceModel, Orientation } from './types';

export class WZeplinConverter extends ZeplinConverter {
  constructor(deviceM: deviceModel, orientation: Orientation = 'portrait') {
    super(deviceM, orientation);
  }
  getWindowHeight(): number {
    return document.body.clientHeight;
  }
  getWindowWidth(): number {
    return document.body.clientWidth;
  }
}

import { DeviceDimZ, Orientation } from './types';
import { ZeplinConverter } from './ZeplinConverter';

export class WZeplinConverter extends ZeplinConverter {
  constructor(deviceDimZ: DeviceDimZ, orientation: Orientation = 'portrait') {
    super(deviceDimZ, orientation);
  }
  getWindowHeight(): number {
    return document.body.clientHeight;
  }
  getWindowWidth(): number {
    return document.body.clientWidth;
  }
}

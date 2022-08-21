import { deviceType, Orientation } from './types';
import { ZeplinConverter } from './ZeplinConverter';

export abstract class ZeplinStyle<T> {
  private deviceType: deviceType;
  protected deviceZ: ZeplinConverter;

  constructor(deviceT: deviceType) {
    this.deviceType = deviceT;
    this.deviceZ = this.getDeviceZ();
  }

  protected abstract phoneDeviceZ(): ZeplinConverter | any;
  protected abstract tabletDeviceZ(): ZeplinConverter | any;
  protected abstract desktopDeviceZ(): ZeplinConverter | any;

  protected abstract phoneStylesPortrait(): T;
  protected abstract phoneStylesLandscape(): T;
  protected abstract tabletStylesPortrait(): T;
  protected abstract tabletStylesLandscape(): T;
  protected abstract desktopStylesLandscape(): T;

  protected abstract setDeviceZToStorage(): void;

  private getPhone(orientation: Orientation): T {
    const isPortrait = orientation === 'portrait';
    this.deviceZ.setOrientation(orientation);

    if (isPortrait) {
      return this.phoneStylesPortrait();
    }
    return this.phoneStylesLandscape();
  }

  private getTablet(orientation: Orientation): T {
    const isPortrait = orientation === 'portrait';
    this.deviceZ.setOrientation(orientation);

    if (isPortrait) {
      return this.tabletStylesPortrait();
    }
    return this.tabletStylesLandscape();
  }

  private getDesktop(): T {
    this.deviceZ.setOrientation('landscape');
    return this.desktopStylesLandscape();
  }

  private getDeviceZ(): ZeplinConverter {
    let deviceZ: ZeplinConverter;
    switch (this.deviceType) {
      case 'phone':
        deviceZ = this.phoneDeviceZ();
        break;
      case 'tablet':
        deviceZ = this.tabletDeviceZ();
        break;
      case 'desktop':
        deviceZ = this.desktopDeviceZ();
        break;
      default:
        deviceZ = this.phoneDeviceZ();
        break;
    }
    return deviceZ;
  }

  setDeviceZ(deviceT: deviceType) {
    this.deviceType = deviceT;
    this.deviceZ = this.getDeviceZ();
  }

  getStyles(orientation: Orientation): T {
    let style: T;
    switch (this.deviceType) {
      case 'phone':
        style = this.getPhone(orientation);
        break;
      case 'tablet':
        style = this.getTablet(orientation);
        break;
      case 'desktop':
        style = this.getDesktop();
        break;
      default:
        style = this.getPhone(orientation);
        break;
    }
    return style;
  }
}

import { deviceType, Orientation, devicesZModels } from './types';
import { WZeplinConverter } from './WZeplinConverter';

export abstract class ZeplinStyle<T> {
  private deviceType: deviceType;
  private devicesZModels: devicesZModels;
  protected deviceZ: WZeplinConverter;

  /**
   *
   * @param {deviceType} deviceT current client device type
   * @param {devicesZModels} devicesZ models of devices used in Zeplin Designs
   *
   */
  constructor(deviceT: deviceType, devicesZ: devicesZModels) {
    this.deviceType = deviceT;
    this.devicesZModels = devicesZ;
    this.deviceZ = this.getDeviceZ();
    this.setDeviceZToStorage();
  }

  protected abstract phoneStylesPortrait(): T;
  protected abstract phoneStylesLandscape(): T;
  protected abstract tabletStylesPortrait(): T;
  protected abstract tabletStylesLandscape(): T;
  protected abstract desktopStylesLandscape(): T;

  private setDeviceZToStorage(): void {
    const deviceModel = this.devicesZModels[this.deviceType];
    global[`zeplin_${deviceModel}`] = this.deviceZ;
  }

  private getDeviceZStorage(): WZeplinConverter | null {
    const deviceModel = this.devicesZModels[this.deviceType];
    const device = global[`zeplin_${deviceModel}`];
    if (device instanceof WZeplinConverter) {
      return device;
    }
    return null;
  }

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

  private getDeviceZ(): WZeplinConverter {
    const deviceZ = this.getDeviceZStorage();
    if (deviceZ !== null) {
      return deviceZ;
    }
    const deviceModel = this.devicesZModels[this.deviceType];
    return new WZeplinConverter(deviceModel);
  }

  /**
   * Change device type on the fly
   * @param {deviceType} deviceT current client device type
   *
   */
  setDeviceZ(deviceT: deviceType) {
    this.deviceType = deviceT;
    this.deviceZ = this.getDeviceZ();
    this.setDeviceZToStorage();
  }

  /**
   * Get calucated styles based on current device type and orientation
   * @param {orientation} Orientation orientation of the current device
   *
   */
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

  /**
   * Set calculated styles for each element by tag name
   * @param {styles} T calculated styles with getStyles
   *
   */
  setStylesToElements(styles: T): void {
    const elementsList = Object.keys(styles);
    const elementsCssProps = Object.values(styles);
    elementsList.forEach((name, i) => {
      const element = document.getElementsByName(name);
      if (!element.length) {
        console.warn("Zeplin Conveter can't find elem with name: " + name);
        return;
      }
      const elementCssProps = elementsCssProps[i];
      const keysCssProps = Object.keys(elementCssProps);
      const valuesCssProps = Object.values(elementCssProps);
      keysCssProps.forEach((key, j) => {
        element[0].style[key] = valuesCssProps[j];
      });
    });
  }
}

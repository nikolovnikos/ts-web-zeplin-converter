import { Orientation, deviceModel, deviceType } from './types';

interface DeviceDimZ {
  widthP: number;
  heightP: number;
  widthL: number;
  heightL: number;
}

type devicesDim = {
  [P in deviceModel]: DeviceDimZ;
};

const devicesDimensionsZ: devicesDim = {
  iphone11: {
    // iphone 11 with safearea
    widthP: 414,
    widthL: 800,
    heightP: 896,
    heightL: 400,
  },
  ipad: {
    widthP: 768,
    widthL: 1024,
    heightP: 1024,
    heightL: 768,
  },
  desktop1440: {
    widthP: 1440,
    widthL: 1440,
    heightP: 1024,
    heightL: 1024,
  },
};

export abstract class ZeplinConverter {
  private deviceDimZ: DeviceDimZ;
  private orientation: Orientation;
  deviceModel: deviceModel;

  protected abstract getWindowWidth(): number;
  protected abstract getWindowHeight(): number;

  /**
   *
   * @param {deviceDimZ} deviceDimZ Object of device width in portrait and landscape in Zeplin project
   *
   */
  constructor(deviceM: deviceModel, orientation: Orientation = 'portrait') {
    this.deviceDimZ = devicesDimensionsZ[deviceM];
    this.deviceModel = deviceM;
    this.orientation = orientation;
  }

  public setOrientation = (orientation: Orientation) => {
    this.orientation = orientation;
  };

  private calucalteWidth = (widthZ: number, deviceWidthZ: number, locked: boolean = false): number => {
    let windowWidth = this.getWindowWidth();
    if (locked && windowWidth > deviceWidthZ) {
      windowWidth = deviceWidthZ;
    }
    const ratio = windowWidth / deviceWidthZ;
    return widthZ * ratio;
  };

  private calucaltHeight = (heightZ: number, deviceHeightZ: number, locked: boolean = false): number => {
    let windowWidth = this.getWindowHeight();
    if (locked && windowWidth > deviceHeightZ) {
      windowWidth = deviceHeightZ;
    }
    const ratio = windowWidth / deviceHeightZ;
    return heightZ * ratio;
  };

  /**
   *
   * @param {number} widthZ width of element in Zeplin
   * @param {number} heightZ height of element in Zeplin
   * @param {number} deviceWidthZ width of device in Zeplin (portrait or landscape)
   *
   */
  private calculateBox = (
    widthZ: number,
    heightZ: number,
    deviceWidthZ: number,
    locked: boolean = false,
  ): { width: number; height: number } => {
    const ratioZ = widthZ / heightZ;
    const w = this.calucalteWidth(widthZ, deviceWidthZ, locked);
    const h = w / ratioZ;
    return { width: w, height: h };
  };

  /**
   *
   * @param {number} widthZ width of element from Zeplin project
   * @param {Boolean} locked When set to true the return
   * value can't be bigger than Zeplin element value
   *
   */
  public getWidth = (widthZ: number, locked: boolean = false): number => {
    if (this.orientation === 'portrait') {
      return this.calucalteWidth(widthZ, this.deviceDimZ.widthP, locked);
    }
    return this.calucalteWidth(widthZ, this.deviceDimZ.widthL, locked);
  };

  /**
   *
   * @param {number} heightZ height of element from Zeplin project
   * @param {Boolean} locked When set to true the return
   * value can't be bigger than Zeplin element value
   *
   */
  public getHeight = (heightZ: number, locked: boolean = false): number => {
    if (this.orientation === 'portrait') {
      const dimensionsP = this.calculateBox(heightZ, heightZ, this.deviceDimZ.widthP, locked);
      return dimensionsP.height;
    }
    const dimensionsL = this.calculateBox(heightZ, heightZ, this.deviceDimZ.widthL, locked);
    return dimensionsL.height;
  };

  /**
   *
   * @param {number} heightZ height of element from Zeplin project
   * @param {Boolean} locked When set to true the return
   * value can't be bigger than Zeplin element value
   *
   */
  public getUnPropHeight = (heightZ: number, locked: boolean = false): number => {
    if (this.orientation === 'portrait') {
      return this.calucaltHeight(heightZ, this.deviceDimZ.heightP, locked);
    }
    return this.calucaltHeight(heightZ, this.deviceDimZ.heightL, locked);
  };

  /**
   *
   * @param {number} widthZ width of element from Zeplin project
   * @param {number} heightZ height of element from Zeplin project
   * @param {Boolean} locked When set to true the return
   * value can't be bigger that Zeplin element values
   *
   */
  public getBox = (widthZ: number, heightZ: number, locked: boolean = false): { width: number; height: number } => {
    if (this.orientation === 'portrait') {
      return this.calculateBox(widthZ, heightZ, this.deviceDimZ.widthP, locked);
    }
    return this.calculateBox(widthZ, heightZ, this.deviceDimZ.widthL, locked);
  };
}

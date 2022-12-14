import { Orientation, deviceType, ZeplinWebEventDetails } from './types';

const TABLET_MAX_WIDTH_SIZE = 1133;
const getDeviceByUserAgent = (): deviceType => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return 'tablet';
  } else if (
    /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)
  ) {
    return 'phone';
  }
  return 'desktop';
};

const getDeviceType = (): deviceType => {
  const deviceByUserAgent = getDeviceByUserAgent();
  if (deviceByUserAgent === 'desktop' && document.body.clientWidth <= TABLET_MAX_WIDTH_SIZE) {
    return 'tablet';
  }
  return deviceByUserAgent;
};

const getCurrentOrientation = (): Orientation => {
  const landscape: Orientation = 'landscape';
  const portrait: Orientation = 'portrait';
  const orientationType = (window.screen.orientation || {}).type;
  if (orientationType) {
    // no Safari
    if (orientationType.indexOf(landscape) !== -1) {
      return landscape;
    } else {
      return portrait;
    }
  }

  // on Safari web and iOS
  if (typeof window.orientation === 'undefined') {
    // Detect desktop
    return landscape;
  }
  // Detect mobile iOS device
  if (window.orientation === 90 || window.orientation === -90) {
    // Landscape Mode
    return landscape;
  }
  return portrait;
};

export class WZeplinEventListener {
  deviceType: deviceType;
  orientation: Orientation;
  private listener: any;
  private event: any;

  /**
   *
   * Get and set current device type and orientation;
   * Append window.addEventListener resize and orientationchange
   *
   */
  constructor() {
    this.deviceType = getDeviceType();
    this.orientation = getCurrentOrientation();
    this.init();
  }

  /**
   *
   * add zeplin listener to document
   * @param {void} callBack function when on zeplin listener is trigged
   * *Syntax**: `callBack({ width: number, orientation: Orientation, deviceType: deviceType})`
   *
   */
  addListener = (callBack: (options: ZeplinWebEventDetails) => void) => {
    this.listener = (e: CustomEvent) => {
      const { detail } = e;
      const options: ZeplinWebEventDetails = {
        width: detail.width || 0,
        orientation: detail.orientation || 'portrait',
        deviceType: detail.deviceType || 'phone',
      };
      callBack(options);
    };
    document.addEventListener('zeplin', this.listener, false);
  };

  /**
   *
   * remove all attached listeners
   *
   */
  removeListener = () => {
    document.removeEventListener('zeplin', this.listener, false);
    window.removeEventListener('resize', this.handleResize, false);
    window.removeEventListener('orientationchange', this.handleResize, false);
    document.body.removeAttribute('zeplinEventAttached');
  };

  private handleOrienationChangeEvent = (e: any) => {
    const { type } = e.target.screen.orientation;

    const width = document.body.clientWidth;
    let deviceT = this.deviceType;
    let orientation = this.orientation;
    const deviceByUserAgent = getDeviceByUserAgent();
    if (deviceByUserAgent === 'desktop' && width > TABLET_MAX_WIDTH_SIZE) {
      deviceT = 'desktop';
    }
    if (type.indexOf('landscape') !== -1) {
      orientation = 'landscape';
    } else {
      orientation = 'portrait';
    }
    document.dispatchEvent(
      this.event({
        width,
        orientation,
        deviceType: deviceT,
      }),
    );
    this.deviceType = deviceT;
    this.orientation = orientation;
  };

  private handleResize = () => {
    const width = document.body.clientWidth;
    let deviceT = this.deviceType;
    let orientation = this.orientation;
    const deviceByUserAgent = getDeviceByUserAgent();
    if (deviceByUserAgent === 'desktop' && width > TABLET_MAX_WIDTH_SIZE) {
      deviceT = 'desktop';
    }
    if (!window.onorientationchange) {
      // Desktop Devices
      orientation = getCurrentOrientation();
    }
    document.dispatchEvent(
      this.event({
        width,
        orientation,
        deviceType: deviceT,
      }),
    );
    this.deviceType = deviceT;
    this.orientation = orientation;
  };

  private init = () => {
    const zeplinEventAttached = document.body.getAttribute('zeplinEventAttached');
    if (zeplinEventAttached === 'true') {
      return;
    }
    this.event = (data?: ZeplinWebEventDetails) =>
      new CustomEvent('zeplin', {
        detail: data,
      });
    document.body.setAttribute('zeplinEventAttached', 'true');

    window.addEventListener('resize', this.handleResize, false);
    if (window.onorientationchange) {
      // Only on mobile devices
      window.addEventListener('orientationchange', this.handleOrienationChangeEvent);
    }
  };
}

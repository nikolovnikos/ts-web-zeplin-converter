import { Orientation } from '../types';

export const setDeviceDimensions = (dim: { width: number; height: number }) => {
  Object.defineProperty(document.body, 'clientWidth', { writable: true, configurable: true, value: dim.width });
  Object.defineProperty(document.body, 'clientHeight', { writable: true, configurable: true, value: dim.height });
};

export const setOrientation = (orientation: Orientation) => {
  Object.defineProperty(window.screen, 'orientation', {
    writable: true,
    configurable: true,
    value: { type: orientation },
  });
};

export const setUserAgent = (userAgent: string) => {
  Object.defineProperty(navigator, 'userAgent', { writable: true, configurable: true, value: userAgent });
};

export const userAgents = {
  phoneiOS:
    'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1',
  phoneAndroid:
    'Mozilla/5.0 (Linux; U; Android 4.4.2; en-us; SCH-I535 Build/KOT49H) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
  tabletSamTabA:
    'Mozilla/5.0 (Linux; Android 5.0.2; SAMSUNG SM-T550 Build/LRX22G) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/3.3 Chrome/38.0.2125.102 Safari/537.36',
  ipadiOS:
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0 Safari/605.1.15',
  macSafari:
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/601.3.9 (KHTML, like Gecko) Version/9.0.2 Safari/601.3.9',
};

export const IPHONE11 = {
  model: 'iphone11',
  widthP: 414,
  widthL: 800,
  heightP: 896,
  heightL: 400,
};
export const IPAD = {
  model: 'ipad',
  widthP: 768,
  widthL: 1024,
  heightP: 1024,
  heightL: 768,
};
export const DESKTOP_1440 = {
  model: 'dekstop1440',
  widthP: 1440,
  widthL: 1440,
  heightP: 1024,
  heightL: 1024,
};

export const mockDevicesDim = {
  iphoneSE_P: { width: 375, height: 667 },
  iphoneSE_L: { width: 667, height: 375 },
  iphone11_P: { width: 414, height: 896 },
  iphone11_L: { width: 800, height: 400 },
  ipad_P: { width: 768, height: 1024 },
  ipad_L: { width: 1024, height: 768 },
  iphone13ProMax_P: { width: 428, height: 845 },
  iphone13ProMax_L: { width: 832, height: 407 },
  desktop1440: { width: 1440, height: 1024 },
};

export const mockStyles = {
  iphoneSE_P: {
    rectangleGreen: { width: '375px', height: '43.47826086956522px' },
    rectangleOrange: { width: '375px', height: '43.47826086956522px' },
    rectangleWhite: {
      width: '375px',
      height: '72.46376811594203px',
      fontSize: '28.985507246376812px',
    },
    rectangleBigBlack: {
      width: '375px',
      height: '146.73913043478262px',
      marginBottom: '43.47826086956522px',
    },
    rectanglesGray: { width: '375px', height: '86.95652173913044px' },
    rectangleGray1: {
      width: '187.5px',
      fontSize: '10.869565217391305px',
      paddingLeft: '14.492753623188406px',
      paddingTop: '14.492753623188406px',
    },
    rectangleGray2: { width: '99.6376811594203px' },
    rectangleDarkGray: {
      width: '201.08695652173913px',
      height: '65.21739130434783px',
      fontSize: '14.492753623188406px',
      marginTop: '76.08695652173913px',
    },
    rectanglesColor: {
      width: '375px',
      marginTop: '50.72463768115942px',
      paddingTop: '7.246376811594203px',
      paddingBottom: '7.246376811594203px',
    },
    rectangleCian: { width: '112.31884057971016px', height: '94.20289855072465px' },
    rectangleBlue: {
      width: '144.02173913043478px',
      height: '94.20289855072464px',
      marginLeft: '7.246376811594203px',
      marginRight: '7.246376811594203px',
    },
    rectanglePing: { width: '78.80434782608695px', height: '94.20289855072463px' },
  },
  iphoneSE_L: {
    rectangleGreen: { width: '667px', height: '40.019999999999996px' },
    rectangleOrange: { width: '667px', height: '40.019999999999996px' },
    rectangleWhite: { width: '667px', height: '66.7px', fontSize: '26.68px' },
    rectangleBigBlack: {
      width: '667px',
      height: '135.0675px',
      marginBottom: '40.019999999999996px',
    },
    rectanglesGray: { width: '667px', height: '80.03999999999999px' },
    rectangleGray1: {
      width: '333.5px',
      fontSize: '10.004999999999999px',
      paddingLeft: '13.34px',
      paddingTop: '13.34px',
    },
    rectangleGray2: { width: '177.58875px' },
    rectangleDarkGray: {
      width: '357.67875px',
      height: '60.03px',
      fontSize: '13.34px',
      marginTop: '70.035px',
    },
    rectanglesColor: {
      width: '667px',
      marginTop: '46.69px',
      paddingTop: '6.67px',
      paddingBottom: '6.67px',
    },
    rectangleCian: { width: '200.1px', height: '86.71000000000001px' },
    rectangleBlue: {
      width: '255.96125px',
      height: '86.71px',
      marginLeft: '13.34px',
      marginRight: '13.34px',
    },
    rectanglePing: { width: '140.07px', height: '86.71px' },
  },
  iphone11_P: {
    rectangleGreen: { width: '414px', height: '48px' },
    rectangleOrange: { width: '414px', height: '48px' },
    rectangleWhite: { width: '414px', height: '80px', fontSize: '32px' },
    rectangleBigBlack: { width: '414px', height: '162px', marginBottom: '48px' },
    rectanglesGray: { width: '414px', height: '96px' },
    rectangleGray1: {
      width: '207px',
      fontSize: '12px',
      paddingLeft: '16px',
      paddingTop: '16px',
    },
    rectangleGray2: { width: '110px' },
    rectangleDarkGray: {
      width: '222px',
      height: '72px',
      fontSize: '16px',
      marginTop: '84px',
    },
    rectanglesColor: {
      width: '414px',
      marginTop: '56px',
      paddingTop: '8px',
      paddingBottom: '8px',
    },
    rectangleCian: { width: '124px', height: '104px' },
    rectangleBlue: {
      width: '159px',
      height: '104px',
      marginLeft: '8px',
      marginRight: '8px',
    },
    rectanglePing: { width: '87px', height: '104px' },
  },
  iphone11_L: {
    rectangleGreen: { width: '800px', height: '48px' },
    rectangleOrange: { width: '800px', height: '48px' },
    rectangleWhite: { width: '800px', height: '80px', fontSize: '32px' },
    rectangleBigBlack: { width: '800px', height: '162px', marginBottom: '48px' },
    rectanglesGray: { width: '800px', height: '96px' },
    rectangleGray1: {
      width: '400px',
      fontSize: '12px',
      paddingLeft: '16px',
      paddingTop: '16px',
    },
    rectangleGray2: { width: '213px' },
    rectangleDarkGray: {
      width: '429px',
      height: '72px',
      fontSize: '16px',
      marginTop: '84px',
    },
    rectanglesColor: {
      width: '800px',
      marginTop: '56px',
      paddingTop: '8px',
      paddingBottom: '8px',
    },
    rectangleCian: { width: '240px', height: '104.00000000000001px' },
    rectangleBlue: {
      width: '307px',
      height: '104px',
      marginLeft: '16px',
      marginRight: '16px',
    },
    rectanglePing: { width: '168px', height: '104px' },
  },
  ipad_P: {
    rectangleGreen: { width: '768px', height: '48px' },
    rectangleOrange: { width: '768px', height: '48px' },
    rectangleWhite: { width: '768px', height: '80px', fontSize: '32px' },
    rectangleBigBlack: { width: '768px', height: '88px', marginBottom: '80px' },
    rectanglesGray: { width: '720px', height: '86px' },
    rectangleGray1: {
      width: '147px',
      fontSize: '14px',
      paddingLeft: '8px',
      paddingTop: '16px',
    },
    rectangleGray2: { width: '110px' },
    rectangleDarkGray: {
      width: '195px',
      height: '64px',
      fontSize: '16px',
      marginTop: '288px',
    },
    rectanglesColor: {
      width: '768px',
      marginTop: '92px',
      paddingTop: '16px',
      paddingBottom: '41px',
    },
    rectangleCian: { width: '224px', height: '93px' },
    rectangleBlue: {
      width: '298px',
      height: '93px',
      marginLeft: '24px',
      marginRight: '24px',
    },
    rectanglePing: { width: '150px', height: '93px' },
  },
  ipad_L: {
    rectangleGreen: { width: '1024px', height: '48px' },
    rectangleOrange: { width: '1024px', height: '48px' },
    rectangleWhite: { width: '1024px', height: '80px', fontSize: '32px' },
    rectangleBigBlack: { width: '1024px', height: '88px', marginBottom: '76px' },
    rectanglesGray: { width: '912px', height: '86px' },
    rectangleGray1: {
      width: '147px',
      fontSize: '14px',
      paddingLeft: '8px',
      paddingTop: '16px',
    },
    rectangleGray2: { width: '110px' },
    rectangleDarkGray: {
      width: '195px',
      height: '64px',
      fontSize: '16px',
      marginTop: '78px',
    },
    rectanglesColor: {
      width: '1024px',
      marginTop: '50px',
      paddingTop: '16px',
      paddingBottom: '41px',
    },
    rectangleCian: { width: '289px', height: '93px' },
    rectangleBlue: {
      width: '384px',
      height: '93px',
      marginLeft: '24px',
      marginRight: '24px',
    },
    rectanglePing: { width: '191px', height: '93px' },
  },
  iphone13ProMax_P: {
    rectangleGreen: { width: '427.99999999999994px', height: '49.623188405797094px' },
    rectangleOrange: { width: '427.99999999999994px', height: '49.623188405797094px' },
    rectangleWhite: {
      width: '427.99999999999994px',
      height: '82.70531400966183px',
      fontSize: '33.08212560386473px',
    },
    rectangleBigBlack: {
      width: '427.99999999999994px',
      height: '167.47826086956522px',
      marginBottom: '49.623188405797094px',
    },
    rectanglesGray: { width: '427.99999999999994px', height: '99.24637681159419px' },
    rectangleGray1: {
      width: '213.99999999999997px',
      fontSize: '12.405797101449274px',
      paddingLeft: '16.541062801932366px',
      paddingTop: '16.541062801932366px',
    },
    rectangleGray2: { width: '113.71980676328502px' },
    rectangleDarkGray: {
      width: '229.50724637681157px',
      height: '74.43478260869564px',
      fontSize: '16.541062801932366px',
      marginTop: '86.84057971014492px',
    },
    rectanglesColor: {
      width: '427.99999999999994px',
      marginTop: '57.89371980676328px',
      paddingTop: '8.270531400966183px',
      paddingBottom: '8.270531400966183px',
    },
    rectangleCian: { width: '128.19323671497582px', height: '107.51690821256037px' },
    rectangleBlue: {
      width: '164.37681159420288px',
      height: '107.51690821256038px',
      marginLeft: '8.270531400966183px',
      marginRight: '8.270531400966183px',
    },
    rectanglePing: { width: '89.94202898550724px', height: '107.51690821256037px' },
  },
  iphone13ProMax_L: {
    rectangleGreen: { width: '832px', height: '49.919999999999995px' },
    rectangleOrange: { width: '832px', height: '49.919999999999995px' },
    rectangleWhite: { width: '832px', height: '83.2px', fontSize: '33.28px' },
    rectangleBigBlack: {
      width: '832px',
      height: '168.48000000000002px',
      marginBottom: '49.92px',
    },
    rectanglesGray: { width: '832px', height: '99.83999999999999px' },
    rectangleGray1: {
      width: '416px',
      fontSize: '12.48px',
      paddingLeft: '16.64px',
      paddingTop: '16.64px',
    },
    rectangleGray2: { width: '221.52px' },
    rectangleDarkGray: {
      width: '446.16px',
      height: '74.88000000000001px',
      fontSize: '16.64px',
      marginTop: '87.36px',
    },
    rectanglesColor: {
      width: '832px',
      marginTop: '58.24px',
      paddingTop: '8.32px',
      paddingBottom: '8.32px',
    },
    rectangleCian: { width: '249.60000000000002px', height: '108.16000000000003px' },
    rectangleBlue: {
      width: '319.28000000000003px',
      height: '108.16000000000001px',
      marginLeft: '16.64px',
      marginRight: '16.64px',
    },
    rectanglePing: { width: '174.72px', height: '108.16px' },
  },
};

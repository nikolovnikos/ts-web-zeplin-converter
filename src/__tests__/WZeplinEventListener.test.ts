/**
 * @jest-environment jsdom
 */
import { ZeplinWebEventDetails } from '../types';
import { WZeplinEventListener } from '../WZeplinEventListener';
import { setDeviceDimensions, mockDevicesDim, setOrientation, setUserAgent, userAgents } from './mocks';

test('iphone11_L', () => {
  setOrientation('portrait');
  setUserAgent(userAgents.phoneiOS);
  const lisenter = new WZeplinEventListener();
  const callBack = (options: ZeplinWebEventDetails) => {
    expect(options).toEqual({ width: 800, orientation: 'landscape', deviceType: 'phone' });
  }
  lisenter.addListener(callBack);
  setOrientation('landscape');
  setDeviceDimensions(mockDevicesDim.iphone11_L);
  // Trigger the window resize event.
  global.dispatchEvent(new Event('resize'));
  lisenter.removeListener();
});

test('ipadiOS_L', () => {
  setOrientation('portrait');
  setUserAgent(userAgents.ipadiOS);
  const lisenter = new WZeplinEventListener();
  const callBack = (options: ZeplinWebEventDetails) => {
    expect(options).toEqual({ width: 1024, orientation: 'landscape', deviceType: 'tablet' });
  }
  lisenter.addListener(callBack);
  setOrientation('landscape');
  setDeviceDimensions(mockDevicesDim.ipad_L);
  // Trigger the window resize event.
  global.dispatchEvent(new Event('resize'));
  lisenter.removeListener();
});

test('desktop', () => {
  setOrientation('landscape');
  setUserAgent(userAgents.macSafari);
  const lisenter = new WZeplinEventListener();
  const callBack = (options: ZeplinWebEventDetails) => {
    expect(options).toEqual({ width: 1440, orientation: 'landscape', deviceType: 'desktop' });
  }
  lisenter.addListener(callBack);
  setOrientation('landscape');
  setDeviceDimensions(mockDevicesDim.desktop1440);
  // Trigger the window resize event.
  global.dispatchEvent(new Event('resize'));
  lisenter.removeListener();
});
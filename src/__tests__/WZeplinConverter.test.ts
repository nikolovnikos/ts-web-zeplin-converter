/**
 * @jest-environment jsdom
 */

import { LayoutScreenStyle } from './LayoutScreenStyle';
import { devicesZModels } from '../types';
import { setDeviceDimensions, mockDevicesDim, mockStyles} from './mocks';

const deviceZM: devicesZModels = { phone: 'iphone11', tablet: 'ipad', desktop: 'desktop1440' };
test('LayoutScreenStyle iphone11_P', () => {
  setDeviceDimensions(mockDevicesDim.iphone11_P);
  const zeplinStyleObject = new LayoutScreenStyle('phone', deviceZM);
  const phoneStyle = zeplinStyleObject.getStyles('portrait');
  expect(phoneStyle).toEqual(mockStyles.iphone11_P);
});

test('LayoutScreenStyle iphone11_L', () => {
  setDeviceDimensions(mockDevicesDim.iphone11_L);
  const zeplinStyleObject = new LayoutScreenStyle('phone', deviceZM);
  const phoneStyle = zeplinStyleObject.getStyles('landscape');
  expect(phoneStyle).toEqual(mockStyles.iphone11_L);
});

test('LayoutScreenStyle iphoneSE_P', () => {
  setDeviceDimensions(mockDevicesDim.iphoneSE_P);
  const zeplinStyleObject = new LayoutScreenStyle('phone', deviceZM);
  const phoneStyle = zeplinStyleObject.getStyles('portrait');
  expect(phoneStyle).toEqual(mockStyles.iphoneSE_P);
});

test('LayoutScreenStyle iphoneSE_L', () => {
  setDeviceDimensions(mockDevicesDim.iphoneSE_L);
  const zeplinStyleObject = new LayoutScreenStyle('phone', deviceZM);
  const phoneStyle = zeplinStyleObject.getStyles('landscape');
  expect(phoneStyle).toEqual(mockStyles.iphoneSE_L);
});

test('LayoutScreenStyle iphone13ProMax_P', () => {
  setDeviceDimensions(mockDevicesDim.iphone13ProMax_P);
  const zeplinStyleObject = new LayoutScreenStyle('phone', deviceZM);
  const phoneStyle = zeplinStyleObject.getStyles('portrait');
  expect(phoneStyle).toEqual(mockStyles.iphone13ProMax_P);
});

test('LayoutScreenStyle iphone13ProMax_L', () => {
  setDeviceDimensions(mockDevicesDim.iphone13ProMax_L);
  const zeplinStyleObject = new LayoutScreenStyle('phone', deviceZM);
  const phoneStyle = zeplinStyleObject.getStyles('landscape');
  expect(phoneStyle).toEqual(mockStyles.iphone13ProMax_L);
});

test('LayoutScreenStyle ipad_P', () => {
  setDeviceDimensions(mockDevicesDim.ipad_P);
  const zeplinStyleObject = new LayoutScreenStyle('tablet', deviceZM);
  const tabletStyle = zeplinStyleObject.getStyles('portrait');
  expect(tabletStyle).toEqual(mockStyles.ipad_P);
});

test('LayoutScreenStyle ipad_L', () => {
  setDeviceDimensions(mockDevicesDim.ipad_L);
  const zeplinStyleObject = new LayoutScreenStyle('tablet', deviceZM);
  const tabletStyle = zeplinStyleObject.getStyles('landscape');
  expect(tabletStyle).toEqual(mockStyles.ipad_L);
});

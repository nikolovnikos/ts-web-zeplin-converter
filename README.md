# ts-web-zeplin-converter

Typescript Web Zeplin Design and Dimensions Converter.
The module takes Zeplin real dimensions (with, height, font size, margin, etc.) of elements created for specific devices and orientation and then calculate them proportionally or pixel perfect for the current running device.

## Installation

```bash
npm install --save web-zeplin-converter
```
## Initialization 

```javascript
import { WZeplinEventListener, ZeplinWebEventDetails, devicesZModels, ZeplinStyle  } from 'web-zeplin-converter';
```

## Examples of use

index.ts
```javascript
import { WZeplinEventListener, ZeplinWebEventDetails, devicesZModels, ZeplinStyle  } from 'web-zeplin-converter';

interface StyleProps {
  zeplin_tagName: {
    width: string;
    height: string;
  }
}

class LayoutScreenStyle extends ZeplinStyle<StyleProps> {
  phoneStylesPortrait() {
    const style: StyleProps = {
      width: this.deviceZ.getWidth(100) + 'px';
    }
    return style;
  }
  phoneStylesLandscape() {
    const style: StyleProps = {
      width: this.deviceZ.getWidth(100) + 'px';
    }
    return style;
  }
  tabletStylesPortrait() {
    const style: StyleProps = {
      width: this.deviceZ.getWidth(100) + 'px';
    }
    return style;

  }
  tabletStylesLandscape() {
    const style: StyleProps = {
      width: this.deviceZ.getWidth(100) + 'px';
    }
    return style;
  }
  desktopStylesLandscape() {
    const style: StyleProps = {
      width: this.deviceZ.getWidth(100) + 'px';
    }
    return style;
  }
}

const listener = new WZeplinEventListener();
const deviceZM: devicesZModels = { phone: 'iphone11', tablet: 'ipad', desktop: 'desktop1440' };
const zeplinStyleObject = new LayoutScreenStyle(listener.deviceType, deviceZM);

const callBackListener = (options: ZeplinWebEventDetails) => {
  zeplinStyleObject.setDeviceZ(options.deviceType);
  const styles = zeplinStyleObject.getStyles(options.orientation);
  zeplinStyleObject.setStylesToElements(styles);
}
callBackListener({
  orientation: listener.orientation,
  width: document.body.clientWidth,
  deviceType: listener.deviceType,
});
listener.addListener(callBackListener);
```
All you need is to use some webpack to compile index.ts to index.js and include in the index.html file.
Create html element with tag name="zeplin_tagName"
index.html
```html
  <div name="zeplin_tagName"></div>
  <script type="module" src="/dist/index.js"></script>
```

## Test with jest
```javascript
  import { LayoutScreenStyle } from './LayoutScreenStyle';

  mockStyles = {
    zeplin_tagName: {
      width: '100px',
    }
  }

  test('LayoutScreenStyle iphone11_P', () => {
    const deviceZM: devicesZModels = { phone: 'iphone11', tablet: 'ipad', desktop: 'desktop1440' };
    const iphone11_P = { width: 414, height: 896 };
    Object.defineProperty(document.body, 'clientWidth', { writable: true, configurable: true, value: iphone11_P.width });
    Object.defineProperty(document.body, 'clientHeight', { writable: true, configurable: true, value: iphone11_P.height });
    const zeplinStyleObject = new LayoutScreenStyle('phone', deviceZM);
    const phoneStyle = zeplinStyleObject.getStyles('portrait');
    expect(phoneStyle).toEqual(mockStyles);
  });
```
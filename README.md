# ts-web-zeplin-converter

Typescript Web Zeplin Design and Dimensions Converter.
The module takes Zeplin real dimensions (with, height, font size, margin, etc.) of elements created for specific devices and orientation and then calculate them proportionally or pixel perfect for the current running device.

## Installation

```bash
npm install --save web-zeplin-converter
```
You can install csstype to add `Properties` type for the styles interface
```bash
npm install --save csstype
```

## Examples of use

LayoutScreenStyle.ts
```javascript
import { ZeplinStyle, WithRequiredProperty  } from 'web-zeplin-converter';
import type { Properties } from 'csstype';

// Create a style interface. Each property is the tag attribute `name` of the element in the HTML file
// with WithRequiredProperty we get only the width and height of allowed CSS Properties
interface StyleProps {
  zeplin_tagName: WithRequiredProperty<Properties, 'width' | 'height'>,
}

// Define abstract class ZeplinStyle and all of his abstract methods
// caclulate each StyleProps key and its properties for
// each phone, tablet and desktop both portrait and landscape
export class LayoutScreenStyle extends ZeplinStyle<StyleProps> {
  phoneStylesPortrait() {
    const style: StyleProps = {
      zeplin_tagName: {
        // the value 100 or other for the element `zeplin_tagName`, we get from real zeplin design for the iphone11 portrait design
        width: this.deviceZ.getWidth(100) + 'px',
        height: this.deviceZ.getHeight(100) + 'px',
      }
      // Apply all CSS props for all elements that need to be calculated for different devices, widths, and orientation
    }
    return style;
  }
  phoneStylesLandscape() {
    const style: StyleProps = {
      zeplin_tagName: {
        width: this.deviceZ.getWidth(100) + 'px',
        height: this.deviceZ.getHeight(100) + 'px',
      }
    }
    return style;
  }
  tabletStylesPortrait() {
    const style: StyleProps = {
      zeplin_tagName: {
        width: this.deviceZ.getWidth(100) + 'px',
        height: this.deviceZ.getHeight(100) + 'px',
      }
    }
    return style;

  }
  tabletStylesLandscape() {
    const style: StyleProps = {
      zeplin_tagName: {
        width: this.deviceZ.getWidth(100) + 'px',
        height: this.deviceZ.getHeight(100) + 'px',
      }
    }
    return style;
  }
  desktopStylesLandscape() {
    const style: StyleProps = {
      zeplin_tagName: {
        width: this.deviceZ.getWidth(100) + 'px',
        height: this.deviceZ.getHeight(100) + 'px',
      }
    }
    return style;
  }
}
```
index.ts
```javascript
import { WZeplinEventListener, ZeplinWebEventDetails, devicesZTypes } from 'web-zeplin-converter';
import { LayoutScreenStyle } from './LayoutScreenStyle';

// create new zeplin listener instance
const listener = new WZeplinEventListener();
// define dimensions of usable view port (with safearea)
// and models of the devices used by Zeplin Designers to create layouts
const devicesZT: devicesZTypes = {
  phone: {
    model: 'iphone11',
    widthP: 414,
    widthL: 800,
    heightP: 896,
    heightL: 400,
  },
  tablet: {
    model: 'ipad',
    widthP: 768,
    widthL: 1024,
    heightP: 1024,
    heightL: 768,
  },
  desktop: {
    model: 'dekstop1440',
    widthP: 1440,
    widthL: 1440,
    heightP: 1024,
    heightL: 1024,
  },
};
// create new style zeplin instance with the current device type (phone, tablet, desktop)
// and deviceZM -> models of the devices used to create zeplin designs
const zeplinStyleObject = new LayoutScreenStyle(listener.deviceType, devicesZT);

const callBackListener = (options: ZeplinWebEventDetails) => {
  // set device type if changed
  zeplinStyleObject.setDeviceZ(options.deviceType);
  // get calculated styles based on changed orientation and width of the window
  const styles = zeplinStyleObject.getStyles(options.orientation);
  // apply styles to html elements by the attribute `name`
  zeplinStyleObject.setStylesToElements(styles);
}
callBackListener({
  orientation: listener.orientation,
  width: document.body.clientWidth,
  deviceType: listener.deviceType,
});
// add zeplin listener
// each change of device width, orientation and/or device type
// will trigger callBackListener
listener.addListener(callBackListener);
```
All you need now is to use some module bundler with TS to compile index.ts to index.js and include in the index.html file.

Create html element with tag name="zeplin_tagName".
index.html
```html
  <div name="zeplin_tagName"></div>
  <script type="module" src="/dist/index.js"></script>
```
## Test with jest
The repository has __tests__ directory where jest tests are created.
The tests cover Zeplin Style calculations for iPhone 11, iPhone SE, iPhone 13 Pro Max, IPad tablet and desktop.
Also, tests are created for Zeplin Event Listener. There are mocked changes in device width and orientation.
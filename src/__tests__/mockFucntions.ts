export const setDeviceDimensions = (dim: { width: number; height: number }) => {
  Object.defineProperty(document.body, 'clientWidth', { writable: true, configurable: true, value: dim.width });
  Object.defineProperty(document.body, 'clientHeight', { writable: true, configurable: true, value: dim.height });
};

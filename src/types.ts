export type deviceType = 'phone' | 'tablet' | 'desktop';
export type Orientation = 'portrait' | 'landscape';

export type WithRequiredProperty<Type, Key extends keyof Type> = Pick<Type, Key> & {
  [Property in Key]-?: Type[Property];
};

export interface ZeplinWebEventDetails {
  width: number;
  orientation: Orientation;
  deviceType: deviceType;
}

export interface DeviceDimZ {
  model: string,
  widthP: number;
  heightP: number;
  widthL: number;
  heightL: number;
}

export type devicesZTypes = { [P in deviceType]: DeviceDimZ };

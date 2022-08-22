export type deviceModel = 'iphone11' | 'ipad' | 'desktop1440';
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

export type devicesZModels = { [P in deviceType]: deviceModel };

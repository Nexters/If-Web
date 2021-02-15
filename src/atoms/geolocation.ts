import { atom } from 'recoil';

export const GeolocationAtom = atom({
  key: 'geolocation',
  default: {
    latitude: 37.555,
    longitude: 126.91,
  },
});

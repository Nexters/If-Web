import { atom } from 'recoil';

interface IGeolocationAtom {
  latitude: number | null;
  longitude: number | null;
}

export const GeolocationAtom = atom<IGeolocationAtom>({
  key: 'geolocation',
  default: {
    latitude: null,
    longitude: null,
  },
});

import { atom } from 'recoil';

export enum MyPageStateField {
  FEED = 'FEED',
  ALBUM = 'ALBUM',
}

interface IMyPageStateAtom {
  parent: MyPageStateField;
}

export const MyPageStateAtom = atom<IMyPageStateAtom>({
  key: 'myPageState',
  default: {
    parent: MyPageStateField.FEED,
  },
});

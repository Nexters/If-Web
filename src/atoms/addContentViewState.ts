import { atom, useRecoilValue, useSetRecoilState } from 'recoil';

export enum AddContentViewMode {
  DEFAULT = 'DEFAULT',
  FIND_NATION = 'FIND_NATION',
  FIND_PLACE = 'FIND_PLACE',
}

export const addContentViewModeState = atom<AddContentViewMode>({
  key: 'addContentView/mode',
  default: AddContentViewMode.DEFAULT,
});

export const useViewMode = () => {
  return useRecoilValue(addContentViewModeState);
};

export const useChangeViewMode = (mode: AddContentViewMode) => {
  const changeMode = useSetRecoilState(addContentViewModeState);
  return () => {
    changeMode(mode);
  };
};

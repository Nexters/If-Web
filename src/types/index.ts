interface IPicture {
  id: number;
  fileName: string;
  order: number;
  storyId: number;
  url: string;
}

export interface IStory {
  id: number;
  createdAt: string;
  date: string;
  memo: string;
  pictureList: [IPicture];
  updatedAt: string;
  userPlaceId: number;
}

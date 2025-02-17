export type StoriesDataType = {
  id: string;
  name: string;
  avatarSource: {
    uri: string;
  };
  stories: StoriesType[];
};

export type StoriesType = {
  id: string;
  mediaType: string;
  source: {
    uri: string;
  };
};

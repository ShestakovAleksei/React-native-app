export interface Photos {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
}

export interface PhotosRes {
  isLoading: bool;
  res: Photos[] | null;
  hasError: bool;
}

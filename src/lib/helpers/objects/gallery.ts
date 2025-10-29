import galleryJson from './gallery.json';

export interface Gallery {
  id: number,
  image: string,
};

export const gallery = galleryJson as Gallery[];
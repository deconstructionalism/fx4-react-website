import { create } from "zustand";

import loadImagesAsync from "lib/loadImagesAsync";

import { ImageData } from "@/app/_db/db";

interface ImagePreviewState {
  isOpen: boolean;
  images: ImageData[];
  currentIndex: number;
  openGallery: (
    galleryImages: ImageData[],
    startIndex?: number,
  ) => Promise<void>;
  closeGallery: () => void;
  nextImage: () => void;
  previousImage: () => void;
}

const useImagePreview = create<ImagePreviewState>()((set, get) => ({
  isOpen: false,
  images: [],
  currentIndex: 0,
  /**
   * Opens the gallery with the provided images.
   * @param galleryImages - images to be displayed in the gallery.
   * @param startIndex - index of the image to be displayed first.
   */
  openGallery: async (
    galleryImages: ImageData[],
    startIndex = 0,
  ): Promise<void> => {
    if (galleryImages.length === 0) {
      set((state) => ({
        ...state,
        images: [],
        isOpen: false,
        currentIndex: 0,
      }));
      return;
    }

    await loadImagesAsync(galleryImages.map((image) => image.src));
    set((state) => ({
      ...state,
      images: galleryImages,
      isOpen: true,
      currentIndex: startIndex,
    }));
  },

  /**
   * Closes the gallery.
   */
  closeGallery: () =>
    set((state) => ({ ...state, images: [], isOpen: false, startIndex: 0 })),

  /**
   * Displays the next image in the gallery.
   */
  nextImage: () => {
    if (get().currentIndex === get().images.length - 1) {
      return;
    }
    set((state) => ({ ...state, currentIndex: state.currentIndex + 1 }));
  },

  /**
   * Displays the previous image in the gallery.
   */
  previousImage: () => {
    if (get().currentIndex === 0) {
      return;
    }
    set((state) => ({ ...state, currentIndex: state.currentIndex - 1 }));
  },
}));

export default useImagePreview;

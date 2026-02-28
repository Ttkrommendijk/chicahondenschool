import { deepBilingual } from "./l10n";

export interface GeneratedReviewImage {
  src: string;
  alt: string;
}

export const generatedReviewImages: GeneratedReviewImage[] = [];

export const generatedReviewImagesI18n = deepBilingual(generatedReviewImages);

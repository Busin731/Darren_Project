import { SelectedImage } from "../type";

export const SELECTED_IMAGE = "SELECTED_IMAGE";

export const selectedImage = (imageUrl: SelectedImage) => ({
    type: SELECTED_IMAGE,
    payload: imageUrl,
})
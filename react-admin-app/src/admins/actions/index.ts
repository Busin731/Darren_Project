import { SelectedImage, ViewAsFeed } from "../type";

export const SELECTED_IMAGE = "SELECTED_IMAGE";

export const VIEW_AS_FEED = 'VIEW_AS_FEED';

export const selectedImage = (imageUrl: SelectedImage) => ({
    type: SELECTED_IMAGE,
    payload: imageUrl,
})
export const viewAsFeed = (isViewAsFeed: ViewAsFeed) => ({
    type: VIEW_AS_FEED,
    payload: isViewAsFeed,
})
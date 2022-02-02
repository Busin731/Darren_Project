import { Reducer } from "react";
import { 
    selectedImage, 
    SELECTED_IMAGE,
    viewAsFeed,
    VIEW_AS_FEED 
} from "../actions";
import {SelectedImage, ViewAsFeed} from '../type';
// Image SelectImage
type SelectImageState = SelectedImage;
type SelectImageAction = 
    | ReturnType<typeof selectedImage>
    | { type: 'OTHER_ACTION'; payload?: any };

export const imageSelectReducer: Reducer<SelectImageState, SelectImageAction> = (
    previousState = '',
    action
) => {
    if ( action.type === SELECTED_IMAGE ) {
        return action.payload;
    }
    return previousState
}
// ViewAsFeed
type ViewAsFeedState = ViewAsFeed;
type ViewAsFeedAction = 
    | ReturnType<typeof viewAsFeed>
    | { type: 'OTHER_ACTION'; payload?: any };

export const viewAsFeedReducer: Reducer<ViewAsFeedState, ViewAsFeedAction> = (
    previousState = 'false',
    action
) => {
    if ( action.type === VIEW_AS_FEED ) {
        return action.payload;
    }
    return previousState
}
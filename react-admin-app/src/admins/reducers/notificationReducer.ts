import { Reducer } from "react";
import { selectedImage, SELECTED_IMAGE } from "../actions";
import {SelectedImage} from '../type';
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
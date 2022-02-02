import { ReduxState } from "react-admin";

export type SelectedImage = string;

export type ViewAsFeed = 'true' | 'false'

export interface NotificationState extends ReduxState{
    imageUrl :  SelectedImage;
    isViewAsFeed : ViewAsFeed;
}

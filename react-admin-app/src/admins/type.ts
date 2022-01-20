import { ReduxState } from "react-admin";

export type SelectedImage = string;

export interface NotificationState extends ReduxState{
    imageUrl :  SelectedImage;
}
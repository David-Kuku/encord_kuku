import { TColumn } from "./types";

export const imgColumns: TColumn[] = [
    { header: 'File Name', key: 'name' },
    { header: 'Size', key: 'size' },
    { header: 'Time of Upload', key: 'timeOfUpload' },
    { header: '', key: 'button'}

];

export const predictionColumns: TColumn[] = [
    { header: 'Title', key: 'title' },
    { header: 'Description', key: 'description' },
    { header: 'Time of Prediction', key: 'timeOfPrediction' },
    { header: '', key: 'button'}

];

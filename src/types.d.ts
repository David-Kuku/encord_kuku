export type TImage = {
    id?: number;
    name: string;
    size: number;
    imageObject: File
    timeOfUpload: string;
}

export type TColumn = {
    header: string;
    key: string;
}
export type TPrediction = {
    bbox: {
        x1: number;
        x2: number;
        y1: number;
        y2: number;
    };
    label: string;
    score: string;
};

export type TImgPrediction = {
    title: string
    description: string
    image: TImage
    predictions: TPrediction[]
    timeOfPrediction: string
}

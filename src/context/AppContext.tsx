import React, { createContext, useState } from 'react';
import { TImage, TImgPrediction, TPrediction } from '../types';


interface IProps {
    activeTab: number
    updateActiveTab: (index: number) => void
    predictions: TImgPrediction[]
    setPredictions: React.Dispatch<React.SetStateAction<TImgPrediction[]>>
    images: TImage[]
    setImages: React.Dispatch<React.SetStateAction<TImage[]>>
  }
const AppContext = createContext<IProps>({
    activeTab: 0,
    images: [],
    predictions: [],
    setPredictions: () => {},
    setImages: () => {},
    updateActiveTab: () => {}
});

interface ContextProps {
    children: JSX.Element
}
export const AppProvider = ({ children }: ContextProps) => {
    const [activeTab, setActiveTab] = useState(0);
    const [predictions, setPredictions] = useState<TImgPrediction[]>([])
    const [images, setImages] = useState<TImage[]>([])
    const updateActiveTab = (index: number) => {
        setActiveTab(index)
    }
    return (
        <AppContext.Provider value={{ activeTab, updateActiveTab, predictions, setPredictions,images, setImages }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContext;

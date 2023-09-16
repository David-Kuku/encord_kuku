import React, { createContext, useState } from 'react';

const AppContext = createContext({
    activeTab: 0,
    updateActiveTab: (ind: number) => { }
});

interface ContextProps {
    children: JSX.Element
}
export const AppProvider = ({ children }: ContextProps) => {
    const [activeTab, setActiveTab] = useState(0);
    const updateActiveTab = (index: number) => {
        setActiveTab(index)
    }
    return (
        <AppContext.Provider value={{ activeTab, updateActiveTab }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContext;

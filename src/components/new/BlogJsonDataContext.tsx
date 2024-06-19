import React, { createContext, useState, useContext, ReactNode } from 'react';

interface JsonData {
    [key: string]: any;
}

interface JsonDataContextType {
    jsonData: JsonData | undefined;
    setJsonData: (data: JsonData) => void;
}

const JsonDataContext = createContext<JsonDataContextType | undefined>(undefined);

export const useJsonData = () => {
    const context = useContext(JsonDataContext);
    if (!context) {
        throw new Error('useJsonData must be used within a JsonDataProvider');
    }
    return context;
};

export const JsonDataProvider = ({ children }: { children: ReactNode }) => {
    const [jsonData, setJsonData] = useState<JsonData>({});

    return (
        <JsonDataContext.Provider value={{ jsonData, setJsonData }}>
            {children}
        </JsonDataContext.Provider>
    );
};

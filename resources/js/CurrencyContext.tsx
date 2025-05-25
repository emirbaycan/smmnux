import React, { createContext, useState, useContext, PropsWithChildren } from "react";

type CurrencyType = 'USD' | 'EUR' | 'TRY' | string;
type SymbolType = '$' | '€' | '₺' | string;

type CurrencyContextType = {
    currency: CurrencyType;
    setCurrency: (value: CurrencyType) => void;
    symbol: SymbolType;
    setSymbol: (value: SymbolType) => void;
};

const defaultCurrency: CurrencyContextType = {
    currency: 'USD',
    setCurrency: () => { },
    symbol: '$', 
    setSymbol: () => { },
};

interface Props {
    children: React.ReactNode
}

export const CurrencyContext = createContext<CurrencyContextType>(defaultCurrency);

export const CurrencyProvider: React.FC<Props> = ({ children }) => {
    const [currency, setCurrency] = useState('USD');
    const [symbol, setSymbol] = useState('$');

    return (
        <CurrencyContext.Provider value={{ currency, symbol, setCurrency, setSymbol }}>
            {children}
        </CurrencyContext.Provider>
    );
};

export const useCurrency = () => useContext(CurrencyContext);
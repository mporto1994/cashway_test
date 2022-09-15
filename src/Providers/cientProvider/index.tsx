import React, { createContext, ReactNode, useState } from "react";


interface transactionsProviderProps{
    children:ReactNode;
}
interface transactionsInterface{
    date:string,
    description:string,
    complement:string,
    amount:number
}

interface createContextInterface{
    transactions:transactionsInterface[],
}

export const TransactionsContext = createContext<createContextInterface>({} as createContextInterface);

export const TransactionsProvider = ({children}:transactionsProviderProps) => {
    const [transactions , setTransactions] = useState<transactionsInterface[]>([]);

    return (
        <TransactionsContext.Provider value={{transactions}}>
            {children}
        </TransactionsContext.Provider>
    );
}
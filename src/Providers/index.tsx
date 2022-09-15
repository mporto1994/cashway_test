import { UserProvider } from "./userProvider";
import {ReactNode} from "react"
import { TransactionsProvider } from "./cientProvider";

interface ProvidersInterface{
    children:ReactNode
}

const Providers = ({ children }:ProvidersInterface) => {
    return (
        <UserProvider>
            <TransactionsProvider>
                {children}
            </TransactionsProvider>
        </UserProvider>
    )
};

export default Providers
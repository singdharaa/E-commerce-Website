import { createContext, useContext, type ReactNode } from 'react'
import { products } from '../assets/assets';

type ShopContextType = {
    products : typeof products;
    currency: String;
    delivery_fee: number;
}

export const ShopContext = createContext<ShopContextType | undefined>(undefined);

export function ShopContextProvider({children}:{children: ReactNode}){
    const currency = "$";
    const delivery_fee = 10;
    const value: ShopContextType = {
        products, currency, delivery_fee
    }
    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}

// Avoids repeating useContext and handles the potentially undefined context safely.
export function useShop() {
    const context = useContext(ShopContext);
    if(!context)
        throw new Error("useShop must be defined within ShopContextProvider")
    return context;
}




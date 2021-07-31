import React, { ReactNode, useContext, createContext, useState } from 'react'



export type Order = {
    id: string;
    size: string;
    syrup: string;
    fruit: string;
    free: string[];
    paid: string[];
    value: string;
    acaiAmount: number;
    status?: string;
}

type OrderContextData = {
    order: Order[];
    address: string;
    name: string;
    status: string;
}

type OrderProviderProps = {
    children: ReactNode;
}

export const OrderContext = createContext({} as OrderContextData)

function OrderProvider({children}: OrderProviderProps) {
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [status, setStatus] = useState('')
    const [order, setOrder] = useState<Order[]>({} as Order[])

    return (
        <OrderContext.Provider value={{
            name,
            order,
            address,
            status
        }}>
            {children}
        </OrderContext.Provider>
    )
}

function useOrder() {
    const context = useContext(OrderContext)
    return context
}

export {
    OrderProvider,
    useOrder
}
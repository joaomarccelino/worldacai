import React, { ReactNode, useContext, createContext, useState } from 'react'

export type OrderProps = {
    id: string;
    size: string;
    syrup: string;
    fruit: string;
    free: string[];
    paid: string[];
    value: string;
    acaiAmount: number;
}

export type PaymentProps = {
    payment: string;
    change?: string;
}

export type FirebaseOrders = Record<string, {
    name: string;
    userId: string;
    address: string;
    order: {
        size: string;
        syrup: string;
        fruit: string;
        free: string[];
        paid: string[];
        value: string;
        acaiAmount: number;
    };
    status: string;
    totalValue: string;
    payment: PaymentProps;
}>

export type OrderType = {
    id: string;
    name: string;
    userId: string
    address: string;
    order: {
        size: string;
        syrup: string;
        fruit: string;
        free: string[];
        paid: string[];
        value: string;
        acaiAmount: number;
    },
    status: string;
    totalValue: string;
    payment: PaymentProps;
}

type OrderContextData = {
    order: OrderProps[];
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
    const [order, setOrder] = useState<OrderProps[]>({} as OrderProps[])

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
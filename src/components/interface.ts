import { MouseEventHandler } from "react";

export interface ICard {
    data: {
            id: number;
            title: string;
            price: number;
            description: string;
            image: string;
            category: string;
            total: number;
            count: number
    }
}

export interface ICart {
            id: number;
            title: string;
            price: number;
            description: string;
            image: string;
            category: string;
            total: number;
            count: number
}

export interface IButton {
    title: string,
    onPress: MouseEventHandler<HTMLButtonElement>,
    className: string
}

export interface IInitial {
    items: [],
    isModal: boolean,
    countCart: number,
    totalCart: number,
    isCartShow: boolean,
    isOrdersShow: boolean
}
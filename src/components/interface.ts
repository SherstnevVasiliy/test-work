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
    }
}

export interface IButton {
    title: string,
    onPress: MouseEventHandler<HTMLButtonElement>,
    className: string
}
import { ICart } from "../../components/interface";

export const setItemsState = (props: []) => ({
    type: 'SET_ITEMS',
    payload: {
      items: props,
    },
});
  
export const setCountCart = (countCart:number, totalCart:number) => ({
    type: 'SET_CART',
    payload: {
        countCart,
        totalCart
    },
});

export const cartShow = (props: boolean) => ({
    type: 'CART_SHOW',
    payload: {
        isCartShow: props
    },
});

export const ordersShow = (props: boolean) => ({
    type: 'ORDERS_SHOW',
    payload: {
        isOrdersShow: props
    },
});

export const openModal = (isModal: boolean, dataModal:ICart) => ({
    type: 'MODAL_SHOW',
    payload: {
        isModal,
        dataModal
    },
});

  